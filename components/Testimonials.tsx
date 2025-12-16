import React from 'react';
import Section from './ui/Section';
import { TESTIMONIALS } from '../constants';
import { Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <Section id="testimonials" className="bg-gradient-to-b from-dark-900/50 to-dark-950 rounded-3xl my-20 border border-white/5">
      <div className="text-center mb-16">
        <h2 className="text-brand-400 font-semibold tracking-wide uppercase text-sm mb-3">Testimonials</h2>
        <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">What Our Clients Say</h3>
        <p className="text-gray-400 max-w-2xl mx-auto">Don't just take our word for it. Here is what medical professionals have to say about partnering with us.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((item) => (
          <div key={item.id} className="bg-white/5 border border-white/10 p-8 rounded-2xl relative hover:bg-white/10 transition-colors duration-300">
            <Quote className="absolute top-8 right-8 w-8 h-8 text-brand-500/20" />
            
            <div className="flex gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            
            <p className="text-gray-200 mb-8 italic leading-relaxed text-sm">"{item.quote}"</p>
            
            <div className="flex items-center gap-4">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-12 h-12 rounded-full object-cover border-2 border-brand-500/30"
              />
              <div>
                <h4 className="text-white font-bold text-sm">{item.name}</h4>
                <div className="text-brand-400 text-xs font-medium">{item.role}</div>
                <div className="text-gray-500 text-xs">{item.practice}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;