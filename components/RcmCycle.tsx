import React from 'react';
import Section from './ui/Section';
import { 
  CalendarCheck, 
  Send, 
  CreditCard, 
  BarChart4,
  ArrowRight,
  RefreshCw,
  Stethoscope
} from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Patient Access",
    subtitle: "Step 1",
    desc: "Registration, Eligibility Verification, & Prior Authorization.",
    icon: CalendarCheck,
    colorClass: "text-brand-400",
    bgClass: "bg-brand-500/10",
    borderClass: "group-hover:border-brand-500/50"
  },
  {
    id: 2,
    title: "Clinical Documentation",
    subtitle: "Step 2",
    desc: "Medical Coding (ICD-10/CPT), Audit, & Charge Capture.",
    icon: Stethoscope,
    colorClass: "text-blue-400",
    bgClass: "bg-blue-500/10",
    borderClass: "group-hover:border-blue-500/50"
  },
  {
    id: 3,
    title: "Claims Submission",
    subtitle: "Step 3",
    desc: "AI Scrubbing, Clearinghouse & Payer Transmission.",
    icon: Send,
    colorClass: "text-purple-400",
    bgClass: "bg-purple-500/10",
    borderClass: "group-hover:border-purple-500/50"
  },
  {
    id: 4,
    title: "Payment & Collections",
    subtitle: "Step 4",
    desc: "Payment Posting, Denial Management & Patient Billing.",
    icon: CreditCard,
    colorClass: "text-green-400",
    bgClass: "bg-green-500/10",
    borderClass: "group-hover:border-green-500/50"
  },
  {
    id: 5,
    title: "Analysis & Reporting",
    subtitle: "Step 5",
    desc: "Financial Reporting, Trend Auditing & Strategic Growth.",
    icon: BarChart4,
    colorClass: "text-orange-400",
    bgClass: "bg-orange-500/10",
    borderClass: "group-hover:border-orange-500/50"
  }
];

const RcmCycle: React.FC = () => {
  return (
    <Section id="rcm-cycle" className="py-20 relative bg-gradient-to-b from-transparent to-brand-900/5">
       <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-bold uppercase tracking-wider mb-4">
           <RefreshCw className="w-3 h-3 animate-spin-slow" />
           The Workflow
        </div>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
          The Full RCM Lifecycle
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          We optimize every single touchpoint. From the first phone call to the final deposit, our seamless process ensures zero revenue leakage.
        </p>
      </div>

      <div className="relative">
        {/* Desktop Connecting Line */}
        <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
             <div key={step.id} className="relative group">
                <div className={`h-full bg-dark-950 border border-white/10 p-6 rounded-2xl transition-all duration-300 ${step.borderClass} hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-900/20`}>
                   
                   <div className="relative z-10 flex flex-col items-center text-center">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${step.bgClass} ${step.colorClass} shadow-lg ring-1 ring-white/5 transition-transform group-hover:scale-110 duration-300`}>
                         <step.icon className="w-8 h-8" />
                      </div>

                      <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">{step.subtitle}</div>
                      <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                   </div>
                   
                   {/* Mobile Arrow */}
                   {index < steps.length - 1 && (
                     <div className="lg:hidden flex justify-center mt-6 text-white/10">
                        <ArrowRight className="w-5 h-5" />
                     </div>
                   )}
                </div>
                
                {/* Desktop Connector Dot */}
                {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-12 -right-3 w-6 h-6 z-20 items-center justify-center translate-x-1/2">
                        <div className="w-2 h-2 rounded-full bg-dark-900 ring-2 ring-white/10 group-hover:bg-brand-500 group-hover:ring-brand-500/50 transition-all duration-300"></div>
                    </div>
                )}
             </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default RcmCycle;