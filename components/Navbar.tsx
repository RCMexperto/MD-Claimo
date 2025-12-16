import React, { useState, useEffect } from 'react';
import { Menu, X, Activity, ChevronDown } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { NavLink } from '../types';

interface NavbarProps {
  onNavClick?: (link: NavLink) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, link: NavLink) => {
    // If it's a link with children (dropdown), we might want to toggle visibility on mobile
    // But for desktop hover does the job.
    // For main links:
    
    // Always call onNavClick to allow parent to reset states (like closing ArticleView)
    if (onNavClick) {
      onNavClick(link);
    }

    if (link.children) {
      // Logic for mobile dropdown toggle could go here if needed
      return; 
    }

    // Close mobile menu
    setIsOpen(false);

    // If it's a hash link, the default behavior + App.tsx logic will handle it.
    // However, if we are in ArticleView, preventing default might be needed to let React handle state first.
    // But standard anchor behavior is usually fine if the element exists. 
    // Since App.tsx handles the state reset, we don't strictly need preventDefault unless it's a "button" type link.
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark-950/90 backdrop-blur-md border-b border-white/10 shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.location.href = '/'}>
            <div className="bg-gradient-to-tr from-brand-500 to-blue-600 p-2 rounded-lg">
              <Activity className="h-6 w-6 text-white" />
            </div>
            <span className="font-heading font-bold text-2xl text-white tracking-tight">
              MD <span className="text-brand-400">Claimo</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAV_LINKS.map((link) => (
                <div key={link.label} className="relative group h-full flex items-center">
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link)}
                    className="text-gray-300 group-hover:text-brand-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-1 cursor-pointer"
                  >
                    {link.label}
                    {link.children && <ChevronDown className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" />}
                  </a>

                  {link.children && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out z-50">
                      <div className="bg-dark-950/95 backdrop-blur-md border border-white/10 rounded-xl shadow-xl overflow-hidden p-2 ring-1 ring-black ring-opacity-5 relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-1 w-2 h-2 bg-dark-950/95 border-t border-l border-white/10 rotate-45 transform"></div>
                        
                        {link.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            onClick={(e) => {
                               e.preventDefault(); // Prevent jump, let App handle content switch
                               handleLinkClick(e, child);
                            }}
                            className="block px-4 py-3 text-sm text-gray-300 hover:bg-white/5 hover:text-brand-400 rounded-lg transition-colors cursor-pointer"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <a
                href="#contact"
                className="bg-brand-600 hover:bg-brand-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-brand-500/25"
              >
                Get Started
              </a>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-950 border-b border-white/10 animate-in slide-in-from-top duration-300 max-h-[90vh] overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link)}
                  className="text-gray-300 hover:text-brand-400 block px-3 py-2 rounded-md text-base font-medium flex justify-between items-center"
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-4 h-4 text-gray-500" />}
                </a>
                
                {link.children && (
                  <div className="pl-4 space-y-1 border-l border-white/10 ml-3 my-1">
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick(e, child);
                        }}
                        className="text-gray-400 hover:text-brand-400 block px-3 py-2 rounded-md text-sm font-medium"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-brand-600 text-white block px-3 py-3 rounded-md text-base font-bold text-center mt-6 mx-3"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;