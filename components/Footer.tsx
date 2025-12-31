import React from 'react';
import { Twitter, Linkedin, Facebook, MapPin, Phone, Mail, BookOpen } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { NavLink } from '../types';

interface FooterProps {
  onNavClick: (link: NavLink) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  const handleInternalLink = (e: React.MouseEvent, link: NavLink) => {
    e.preventDefault();
    onNavClick(link);
  };

  return (
    <footer className="bg-dark-950 border-t border-white/10 pt-20 pb-10 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
               <div className="flex flex-col">
                <span className="font-heading font-extrabold text-3xl text-white tracking-tight leading-none uppercase">
                  MD <span className="text-brand-400">Claimo</span>
                </span>
                <span className="text-[9px] text-accent-500 font-bold uppercase tracking-[0.2em] mt-1">
                  RCM Solutions
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-8">
              MD Claimo is a premier RCM partner delivering financial clarity and operational relief to healthcare providers nationwide. We specialize in eliminating the administrative friction that delays revenue.
            </p>
            <div className="flex space-x-4">
              {[Twitter, Linkedin, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-brand-500 hover:text-white transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-widest">Navigation</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map(link => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleInternalLink(e, link)}
                    className="hover:text-brand-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li><a href="#about" onClick={(e) => handleInternalLink(e, {label: 'About', href: '#about'})} className="hover:text-brand-400 text-sm transition-colors">Our Mission</a></li>
            </ul>
          </div>

          {/* Expert Tools */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-widest">Expert Toolkit</h4>
            <ul className="space-y-4">
               <li>
                <a 
                  href="/knowledge-center" 
                  onClick={(e) => handleInternalLink(e, { label: 'Knowledge Center', href: '/knowledge-center', type: 'page' })}
                  className="text-brand-400 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                >
                  <BookOpen className="w-4 h-4" /> Provider Manuals 
                </a>
              </li>
              <li>
                <a 
                  href="#timely-filing" 
                  onClick={(e) => handleInternalLink(e, { label: 'Timely Filing', href: '#timely-filing' })}
                  className="hover:text-brand-400 text-sm transition-colors flex items-center gap-2"
                >
                  Timely Filing Directory <span className="text-[10px] bg-accent-500/20 text-accent-400 px-1.5 py-0.5 rounded font-bold uppercase">Tools</span>
                </a>
              </li>
              <li><a href="#resources" onClick={(e) => handleInternalLink(e, {label: 'Resources', href: '#resources'})} className="hover:text-brand-400 text-sm transition-colors">Government Portals</a></li>
              <li><a href="#faq" onClick={(e) => handleInternalLink(e, {label: 'FAQ', href: '#faq'})} className="hover:text-brand-400 text-sm transition-colors">Client Support</a></li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-widest">Headquarters</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-brand-500 shrink-0" />
                <span>
                  100 Innovation Blvd, Ste 200<br/>
                  Houston, TX 77002
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5 text-brand-500 shrink-0" />
                <a href="tel:3466784300" className="hover:text-white transition-colors">(346) 678-4300</a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-brand-500 shrink-0" />
                <a href="mailto:info@mdclaimo.com" className="hover:text-white transition-colors">info@mdclaimo.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} MD Claimo RCM Solutions, LLC. Proudly serving US Medical Practices.
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-gray-600">
            <a href="#" className="hover:text-brand-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand-400 transition-colors">BAA Agreement</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;