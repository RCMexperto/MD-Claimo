import React from 'react';
import Section from './ui/Section';
import { SERVICES } from '../data';
import { ArrowRight, BookOpen, ShieldCheck } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesProps {
  onServiceArticleClick?: (service: ServiceItem) => void;
}

const Services: React.FC<ServicesProps> = ({ onServiceArticleClick }) => {
  return (
    <Section id="services">
      <div className="text-center mb-16">
        <h2 className="text-brand-400 font-semibold tracking-wide uppercase text-sm mb-3">Our Solutions</h2>
        <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Comprehensive RCM Services</h3>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          From patient intake to final payment, we offer an end-to-end suite of services designed to optimize your revenue cycle management and reduce administrative burden.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service, index) => (
          <div 
            key={service.id}
            className={`
              bg-white/5 border border-white/10 p-8 rounded-2xl transition-all duration-300 group
              hover:-translate-y-2 hover:bg-white/10 hover:shadow-2xl hover:shadow-brand-900/10 relative overflow-hidden flex flex-col
              ${service.id === 'scheduling' ? 'md:col-span-2 lg:col-span-1 bg-gradient-to-br from-white/5 to-brand-900/10 border-brand-500/20' : ''}
            `}
          >
            {/* Highlight for Scheduling service */}
            {service.id === 'scheduling' && (
               <div className="absolute top-0 right-0 p-3 bg-brand-500/20 rounded-bl-2xl border-l border-b border-white/10">
                 <span className="text-xs font-bold text-brand-300 uppercase tracking-wider">Top Rated</span>
               </div>
            )}

            <div className="w-14 h-14 bg-brand-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-500/20 transition-colors">
              <service.Icon className="w-7 h-7 text-brand-400" />
            </div>
            
            <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
            <p className="text-gray-400 leading-relaxed text-sm mb-6 flex-grow">
              {service.description}
            </p>

            {/* Trust Signal - Small Badge */}
            <div className="flex items-center gap-2 mb-6 text-xs text-gray-500 font-medium">
              <ShieldCheck className="w-3 h-3 text-green-500" />
              <span>HIPAA Compliant Workflow</span>
            </div>

            {service.article && (
              <button 
                onClick={(e) => {
                  e.stopPropagation(); // Prevent conflicts if the parent has click handlers
                  onServiceArticleClick && onServiceArticleClick(service);
                }}
                className="mt-auto w-full py-3 px-4 rounded-lg bg-white/5 hover:bg-brand-600 hover:text-white border border-white/10 flex items-center justify-center gap-2 text-sm font-semibold text-brand-300 transition-all group-hover:border-brand-500/30"
              >
                <BookOpen className="w-4 h-4" />
                View Strategy
                <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;