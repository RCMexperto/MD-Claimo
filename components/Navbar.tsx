import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { NavLink } from '../types';

interface NavbarProps {
  onNavClick?: (link: NavLink) => void;
}

// Base64 encoded logo image
// Replaced with a minimal, valid transparent PNG placeholder to resolve persistent SyntaxError.
// You should replace this with your actual logo's base64 data after ensuring it's correctly generated.
const MD_CLAIMO_LOGO_BASE64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';

const Navbar: React.FC<NavbarProps> = ({ onNavClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (link: NavLink, e?: React.MouseEvent) => {
    if (link.children) {
      e?.preventDefault(); // Prevent default if it's a parent link with children
      setOpenDropdown(openDropdown === link.label ? null : link.label);
      return;
    }
    
    if (onNavClick) {
      onNavClick(link);
    }
    setIsOpen(false);
    setOpenDropdown(null);
  };

  const MobileNavLink: React.FC<{ link: NavLink }> = ({ link }) => (
    <li>
      <button
        onClick={(e) => handleLinkClick(link, e)}
        className="flex items-center justify-between w-full py-3 px-4 text-lg text-white font-medium hover:bg-white/10 rounded-lg transition-colors"
      >
        {link.label}
        {link.children && <ChevronDown className={`w-5 h-5 transition-transform ${openDropdown === link.label ? 'rotate-180' : ''}`} />}
      </button>
      {link.children && openDropdown === link.label && (
        <ul className="pl-6 pt-2 space-y-2">
          {link.children.map((childLink) => (
            <li key={childLink.label}>
              <a
                href={childLink.href}
                onClick={() => handleLinkClick(childLink)}
                className="block py-2 px-3 text-base text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition-colors"
              >
                {childLink.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );

  const DesktopNavLink: React.FC<{ link: NavLink }> = ({ link }) => (
    <div className="relative group">
      <button
        onClick={(e) => handleLinkClick(link, e)}
        className={`flex items-center gap-1 font-medium hover:text-brand-400 transition-colors ${link.children ? 'cursor-pointer' : ''}`}
      >
        {link.label}
        {link.children && <ChevronDown className={`w-4 h-4 transition-transform group-hover:rotate-180 ${openDropdown === link.label ? 'rotate-180' : ''}`} />}
      </button>
      {link.children && (
        <div className={`absolute left-1/2 -translate-x-1/2 mt-3 w-64 bg-dark-900 border border-white/10 rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300
          ${openDropdown === link.label ? 'opacity-100 visible' : ''}
        `}>
          <ul className="space-y-1">
            {link.children.map((childLink) => (
              <li key={childLink.label}>
                <a
                  href={childLink.href}
                  onClick={() => handleLinkClick(childLink)}
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-brand-500/10 hover:text-brand-400 transition-colors"
                >
                  {childLink.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-950/80 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2" onClick={() => handleLinkClick({ label: 'Home', href: '/' })}>
            {/* Using img tag for base64 logo */}
            <img src={MD_CLAIMO_LOGO_BASE64} alt="MD Claimo Logo" className="h-8 w-auto" />
            <span className="font-heading font-bold text-xl text-white tracking-tight">
              MD <span className="text-brand-400">Claimo</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <DesktopNavLink key={link.label} link={link} />
            ))}
          </div>

          {/* Contact Button for Desktop */}
          <div className="hidden md:block">
            <a 
              href="#contact" 
              className="px-5 py-2 rounded-full bg-brand-600 hover:bg-brand-500 text-white text-sm font-semibold transition-all shadow-md shadow-brand-900/20"
              onClick={() => handleLinkClick({ label: 'Contact', href: '#contact' })}
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-dark-950/90 backdrop-blur-md pb-4 border-t border-white/10`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {NAV_LINKS.map((link) => (
            <MobileNavLink key={link.label} link={link} />
          ))}
          <li>
            <a 
              href="#contact" 
              onClick={() => handleLinkClick({ label: 'Contact Us', href: '#contact' })}
              className="block py-3 px-4 text-lg text-white font-medium bg-brand-600 hover:bg-brand-500 rounded-lg transition-colors mt-4 text-center"
            >
              Contact Us
            </a>
          </li>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };