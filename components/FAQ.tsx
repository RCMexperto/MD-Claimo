import React, { useState } from 'react';
import Section from './ui/Section';
import { FAQS } from '../constants';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq" className="my-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <div className="sticky top-24">
            <div className="flex items-center gap-2 mb-4">
               <HelpCircle className="w-6 h-6 text-brand-400" />
               <h2 className="text-brand-400 font-semibold tracking-wide uppercase text-sm">Common Questions</h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">Frequently Asked Questions</h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              Transparency is key to our partnership. Here are answers to the most common questions we receive from practice administrators.
            </p>
            <a href="#contact" className="text-white border-b border-brand-500 pb-1 hover:text-brand-400 transition-colors font-medium inline-block">
              Have a specific question? Contact us.
            </a>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div 
                key={index} 
                className={`bg-white/5 border ${openIndex === index ? 'border-brand-500/50 bg-white/10' : 'border-white/10'} rounded-xl transition-all duration-300 overflow-hidden`}
              >
                <button 
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`text-lg font-bold ${openIndex === index ? 'text-white' : 'text-gray-200'}`}>
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-brand-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                
                <div 
                  className={`px-6 text-gray-300 leading-relaxed transition-all duration-300 overflow-hidden ${openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default FAQ;