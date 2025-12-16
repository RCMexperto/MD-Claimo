import React from 'react';
import Section from './ui/Section';
import { ClipboardCheck, Settings, UploadCloud, PieChart } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Discovery & Audit",
    desc: "We analyze your current billing health, fee schedules, and denial patterns to identify immediate revenue opportunities.",
    icon: ClipboardCheck,
    color: "text-brand-400",
    bg: "bg-brand-500/10"
  },
  {
    id: 2,
    title: "Strategic Onboarding",
    desc: "Seamless integration with your EHR. We set up clearinghouse connections and configure specialty-specific coding rules.",
    icon: Settings,
    color: "text-blue-400",
    bg: "bg-blue-500/10"
  },
  {
    id: 3,
    title: "Precision Cycle",
    desc: "Daily claims submission with 24-hour coding turnaround. Aggressive denial management starts immediately upon rejection.",
    icon: UploadCloud,
    color: "text-purple-400",
    bg: "bg-purple-500/10"
  },
  {
    id: 4,
    title: "Growth Reporting",
    desc: "Monthly executive reports showing net collections, A/R velocity, and actionable insights for practice growth.",
    icon: PieChart,
    color: "text-green-400",
    bg: "bg-green-500/10"
  }
];

const Process: React.FC = () => {
  return (
    <Section id="process" className="bg-dark-900/50 my-12 border-y border-white/5">
      <div className="text-center mb-16">
        <h2 className="text-brand-400 font-semibold tracking-wide uppercase text-sm mb-3">How We Work</h2>
        <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">The MD Claimo Workflow</h3>
        <p className="text-gray-400 max-w-2xl mx-auto">A transparent, four-step process designed to transition your practice from financial uncertainty to predictable cash flow.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {/* Connecting Line (Desktop) */}
        <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10"></div>

        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center text-center group">
            <div className={`w-24 h-24 ${step.bg} rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
              <step.icon className={`w-10 h-10 ${step.color}`} />
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-dark-950 border border-white/20 flex items-center justify-center text-sm font-bold text-white">
                {step.id}
              </div>
            </div>
            <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Process;