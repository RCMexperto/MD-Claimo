import React from 'react';
import { Activity, Twitter, Linkedin, Facebook, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { NavLink } from '../types';

interface FooterProps {
  onNavClick: (link: NavLink) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  const handleInternalLink = (e: React.MouseEvent, href: string, label: string) => {
    e.preventDefault();
    onNavClick({ href, label });
  };

  return (
    <footer className="bg-dark-950 border-t border-white/10 pt-16 pb-8 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-tr from-brand-500 to-blue-600 p-1.5 rounded-lg">
                <Activity className="h-5 w-5 text-white" />
              </div>
              <span className="font-heading font-bold text-xl text-white tracking-tight">
                MD <span className="text-brand-400">Claimo</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              Premier Revenue Cycle Management (RCM) partner for private practices. We combine AI-driven technology with certified coding expertise to eliminate denials and accelerate cash flow.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Twitter" className="bg-white/5 p-2 rounded-full hover:bg-brand-500 hover:text-white transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="bg-white/5 p-2 rounded-full hover:bg-brand-500 hover:text-white transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Facebook" className="bg-white/5 p-2 rounded-full hover:bg-brand-500 hover:text-white transition-all">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Company</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map(link => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleInternalLink(e, link.href, link.label)}
                    className="text-gray-400 hover:text-brand-400 text-sm transition-colors hover:translate-x-1 inline-block duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="#learn" 
                  onClick={(e) => handleInternalLink(e, '#learn', 'Blogs')}
                  className="text-gray-400 hover:text-brand-400 text-sm transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          {/* Resources & Tools (NEW SECTION) */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Provider Tools</h4>
            <ul className="space-y-3">
               <li>
                <a 
                  href="#timely-filing" 
                  onClick={(e) => handleInternalLink(e, '#timely-filing', 'Timely Filing Limit')}
                  className="text-gray-400 hover:text-brand-400 text-sm transition-colors hover:translate-x-1 inline-block duration-200 flex items-center gap-2"
                >
                  Timely Filing Directory <span className="bg-brand-500/20 text-brand-300 text-[10px] px-1.5 py-0.5 rounded font-bold">New</span>
                </a>
              </li>
              <li>
                <a 
                  href="#resources" 
                  onClick={(e) => handleInternalLink(e, '#resources', 'Resources')}
                  className="text-gray-400 hover:text-brand-400 text-sm transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  Official Resources
                </a>
              </li>
              <li><a href="#faq" onClick={(e) => handleInternalLink(e, '#faq', 'FAQ')} className="text-gray-400 hover:text-brand-400 text-sm transition-colors">FAQ & Support</a></li>
            </ul>
          </div>

          {/* Contact Info - Critical for Local SEO */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm group">
                <MapPin className="w-5 h-5 text-brand-500 shrink-0 group-hover:text-brand-400" />
                <span>
                  100 Innovation Blvd, Ste 200<br/>
                  Tech City, ST 90210
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm group">
                <Phone className="w-5 h-5 text-brand-500 shrink-0 group-hover:text-brand-400" />
                <a href="tel:+15551234567" className="hover:text-white transition-colors">+1 (555) 123-4567</a>
              </li>
              <li className="flex items-center gap-3 text-sm group">
                <Mail className="w-5 h-5 text-brand-500 shrink-0 group-hover:text-brand-400" />
                <a href="mailto:info@mdclaimo.com" className="hover:text-white transition-colors">info@mdclaimo.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* SEO Links & Copyright */}
        <div className="border-t border-white/5 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-500 mb-6">
             <div>
               <span className="font-bold text-gray-400">Serving:</span> USA, California, Texas, Florida, New York, Illinois.
             </div>
             <div className="md:text-right">
               <span className="font-bold text-gray-400">Specialties:</span> Cardiology, Orthopedics, Pediatrics, Mental Health.
             </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} MD Claimo RCM Solutions, LLC. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-brand-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-brand-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-brand-400 transition-colors">BAA</a>
              <a href="#" className="hover:text-brand-400 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;