import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAV_LINKS } from '../constants.ts';
import { NavLink } from '../types.ts';

interface NavbarProps {
  onNavClick?: (link: NavLink) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (link: NavLink) => {
    setIsOpen(false);
    if (onNavClick) onNavClick(link);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark-950/95 backdrop-blur-md py-3 shadow-2xl border-b border-white/5' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo - Text Only Mode */}
          <div className="flex items-center gap-3 cursor-pointer group shrink-0" onClick={() => handleLinkClick({ label: 'Home', href: '#' })}>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-2xl md:text-3xl text-white tracking-tight leading-none uppercase drop-shadow-lg">
                MD <span className="text-brand-400">Claimo</span>
              </span>
              <span className="text-[9px] text-accent-500 font-bold uppercase tracking-[0.2em] mt-1 group-hover:text-accent-400 transition-colors">
                RCM Solutions
              </span>
            </div>
          </div>

          {/* Desktop Nav - Visible on MD and up */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="relative group">
                <a
                  href={link.href}
                  onClick={(e) => {
                    if (link.type === 'page' || !link.children) {
                      e.preventDefault();
                      handleLinkClick(link);
                    }
                  }}
                  className="text-gray-300 hover:text-brand-400 transition-colors text-xs font-bold uppercase tracking-widest flex items-center gap-1 py-4"
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform" />}
                </a>

                {/* Hover Dropdown */}
                {link.children && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-64 bg-dark-900 border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-4 px-2 z-50 transform origin-top translate-y-2 group-hover:translate-y-0">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-dark-900 border-t border-l border-white/10 rotate-45"></div>
                    <div className="relative bg-dark-900 rounded-xl overflow-hidden">
                      {link.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          onClick={(e) => {
                            e.preventDefault();
                            handleLinkClick(child);
                          }}
                          className="block px-4 py-3 text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* Contact Button */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick({ label: 'Contact', href: '#contact' });
              }}
              className="bg-brand-500 hover:bg-brand-600 text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all shadow-lg shadow-brand-500/20 active:scale-95 ml-2"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Toggle - Hidden on MD and up */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark-950 border-b border-white/10 shadow-2xl max-h-screen overflow-y-auto">
          <div className="px-4 py-8 space-y-6">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="space-y-4">
                <div 
                  onClick={() => !link.children && handleLinkClick(link)}
                  className={`text-brand-400 font-bold text-xs uppercase tracking-widest border-b border-white/5 pb-2 ${!link.children ? 'cursor-pointer' : ''}`}
                >
                  {link.label}
                </div>
                {link.children && (
                  <div className="grid grid-cols-1 gap-4 pl-4">
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick(child);
                        }}
                        className="text-gray-300 hover:text-white text-xs font-bold uppercase tracking-wider"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick({ label: 'Contact', href: '#contact' });
                }}
                className="block w-full bg-brand-500 hover:bg-brand-600 text-white text-center px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all shadow-lg shadow-brand-500/20"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;