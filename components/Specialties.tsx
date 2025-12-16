import React from 'react';
import Section from './ui/Section';
import { SPECIALTIES } from '../data';
import { ArrowUpRight } from 'lucide-react';
import { SpecialtyItem } from '../types';

interface SpecialtiesProps {
  onSpecialtyClick?: (specialty: SpecialtyItem) => void;
}

const Specialties: React.FC<SpecialtiesProps> = ({ onSpecialtyClick }) => {
  return (
    <div id="specialties" className="bg-brand-900/10 border-y border-white/5">
      <Section id="specialties-inner">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/3 sticky top-24">
            <h2 className="text-brand-400 font-semibold tracking-wide uppercase text-sm mb-3">Specialties</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Expertise Across Fields</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Medical billing nuances vary drastically by specialty. A cardiologist needs a different strategy than a pediatrician. <br/><br/>
              Our dedicated teams are trained in the specific coding, compliance, and payer policies of your field to maximize your specific revenue stream.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 text-white border-b border-brand-500 pb-1 hover:text-brand-400 transition-colors font-medium">
              View full list of specialties <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {SPECIALTIES.map((spec) => (
              <div 
                key={spec.id}
                onClick={() => onSpecialtyClick && onSpecialtyClick(spec)}
                className="group flex flex-col p-6 bg-dark-950 border border-white/10 rounded-xl hover:border-brand-500/50 hover:bg-white/5 transition-all cursor-pointer relative overflow-hidden"
              >
                {/* Background decorative blob */}
                <div className="absolute -right-10 -bottom-10 w-24 h-24 bg-brand-500/5 rounded-full blur-2xl group-hover:bg-brand-500/10 transition-colors"></div>

                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-brand-400 group-hover:text-white group-hover:bg-brand-500 transition-colors">
                    <spec.Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-200 group-hover:text-white transition-colors">{spec.name}</h4>
                </div>
                
                <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors line-clamp-2">
                  {spec.description}
                </p>

                <div className="mt-4 flex items-center text-xs font-bold text-brand-400 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  View Specialty Strategy <ArrowUpRight className="w-3 h-3 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Specialties;