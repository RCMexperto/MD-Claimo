import React from 'react';
import {
  CheckCircle2,
  TrendingUp,
  Brain,
  MessageSquare,
  Activity,
  Smartphone,
  Users,
  AlertTriangle,
  FileSearch,
  ShieldCheck,
  Ban,
  Clock,
  ArrowRight,
  Phone,
  Mic, // New icon for transcription
  NotebookPen, // Another option
  Laptop
} from 'lucide-react';

// Reusing UI components pattern for consistency
const SectionHeader: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div className="mb-8">
    <h3 className="text-3xl font-heading font-bold text-white mb-3">{title}</h3>
    {subtitle && <p className="text-xl text-gray-400 leading-relaxed">{subtitle}</p>}
  </div>
);

const ImpactBox: React.FC<{ icon: React.ElementType, title: string, children: React.ReactNode, colorClass?: string, bgClass?: string }> = ({ 
  icon: Icon, 
  title, 
  children, 
  colorClass = "text-brand-400",
  bgClass = "bg-brand-900/10 border-brand-500/20"
}) => (
  <div className={`${bgClass} p-5 rounded-xl border flex gap-4 mt-6`}>
    <Icon className={`w-6 h-6 ${colorClass} shrink-0 mt-1`} />
    <div>
      <strong className={`block mb-1 ${colorClass}`}>{title}</strong>
      <div className="text-sm text-gray-300 leading-relaxed">{children}</div>
    </div>
  </div>
);

const ProblemSolution: React.FC<{ problem: string; solution: string }> = ({ problem, solution }) => (
  <div className="flex flex-col md:flex-row gap-4 bg-white/5 p-6 rounded-xl border border-white/10 my-4">
    <div className="md:w-1/2 border-l-4 border-red-500 pl-4">
      <h5 className="text-red-400 font-bold text-sm uppercase mb-1">The Challenge</h5>
      <p className="text-gray-300 text-sm">{problem}</p>
    </div>
    <div className="hidden md:block w-px bg-white/10"></div>
    <div className="md:w-1/2 border-l-4 border-green-500 pl-4 md:border-l-0">
      <h5 className="text-green-400 font-bold text-sm uppercase mb-1">The MD Claimo Fix</h5>
      <p className="text-gray-300 text-sm">{solution}</p>
    </div>
  </div>
);

const KeyPoint: React.FC<{ title: string; desc: string; icon?: React.ElementType }> = ({ title, desc, icon: Icon = CheckCircle2 }) => (
  <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-brand-500/30 transition-colors">
    <h4 className="text-white font-bold mb-2 flex items-center gap-2">
      <Icon className="w-5 h-5 text-brand-400" />
      {title}
    </h4>
    <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
  </div>
);


const MedicalTranscriptionArticle: React.FC = () => {
  return (
    <div className="space-y-12 text-gray-300 leading-relaxed text-lg">
      <section>
        <SectionHeader
          title="Medical Transcription: Unlocking Efficiency & Accuracy"
          subtitle="Accurate and timely medical documentation is the bedrock of patient care, legal compliance, and successful billing. Yet, it remains a significant time sink for busy practitioners."
        />

        <div className="bg-red-900/10 border-l-4 border-red-500 p-6 rounded-r-xl mb-8">
          <h4 className="text-red-400 font-bold mb-2 flex items-center gap-2">
            <Ban className="w-5 h-5" />
            The Hidden Costs of Manual Documentation
          </h4>
          <p className="text-sm">
            Physicians spend up to <strong>2 hours per day</strong> on administrative tasks, including charting. This leads to burnout, reduced patient interaction, and critical errors that can jeopardize patient safety and trigger claim denials due to incomplete or inaccurate records.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-dark-950 p-6 rounded-xl border border-white/10">
            <h5 className="text-white font-bold mb-3 flex items-center gap-2"><Clock className="w-4 h-4 text-orange-500"/> Time & Productivity Drain</h5>
            <p className="text-sm text-gray-400">Every minute spent on documentation is a minute not spent with a patient. Inefficient processes directly impact patient access and practice revenue.</p>
          </div>
          <div className="bg-dark-950 p-6 rounded-xl border border-white/10">
            <h5 className="text-white font-bold mb-3 flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-orange-500"/> Billing & Compliance Risks</h5>
            <p className="text-sm text-gray-400">Inaccurate or incomplete documentation leads to claim denials, audit risks, and potential legal liabilities. Clear records are essential for demonstrating medical necessity.</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-bold text-white mb-6">MD Claimo’s Intelligent Transcription Solution</h3>
        <p className="mb-8 text-gray-400">
          We combine cutting-edge AI speech-to-text technology with human oversight to deliver rapid, highly accurate, and HIPAA-compliant medical transcriptions.
        </p>

        <div className="space-y-6">
          <KeyPoint
            title="AI-Powered Efficiency"
            desc="Leverage advanced AI algorithms specifically trained on medical terminology to convert spoken dictations into accurate text quickly."
            icon={Brain}
          />
          <KeyPoint
            title="Human Quality Assurance"
            desc="Every transcription undergoes rigorous review by certified medical transcriptionists, ensuring context, accuracy, and proper formatting for diverse specialties."
            icon={ShieldCheck}
          />
          <KeyPoint
            title="Seamless EHR Integration"
            desc="Our transcribed documents are formatted for easy integration into all major EHR systems, reducing manual data entry and speeding up charting workflows."
            icon={Laptop}
          />
          <KeyPoint
            title="Flexible Dictation Methods"
            desc="Dictate securely via phone, digital recorder, or our mobile app. We support various input methods to fit your practice's unique needs."
            icon={Mic}
          />
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-bold text-white mb-6">Transforming Your Documentation Workflow</h3>
        <ProblemSolution
          problem="Long turnaround times for transcription, delaying charting and billing cycles."
          solution="Our standard turnaround is 24 hours, with critical STAT reports delivered in as little as 4 hours, ensuring your claims are ready for submission without delay."
        />
        <ProblemSolution
          problem="Generic transcription services struggle with complex medical terminology and accents, leading to errors."
          solution="Our AI is trained on vast medical datasets, and our human editors are specialty-matched to your practice (e.g., Cardiology, Orthopedics), guaranteeing a 99%+ accuracy rate."
        />
        <ProblemSolution
          problem="Concerns about HIPAA compliance and data security with outsourced services."
          solution="We are fully HIPAA compliant, with encrypted data transfer protocols and strict confidentiality agreements. Your patient data is always secure."
        />
      </section>

      <ImpactBox icon={TrendingUp} title="The MD Claimo Advantage">
        Implement MD Claimo's Medical Transcription Service and free up to <strong>15 hours of physician time per week</strong>. This translates into increased patient volume, improved E/M coding accuracy, and accelerated revenue, allowing your providers to focus on what they do best: patient care.
      </ImpactBox>
    </div>
  );
};

export { MedicalTranscriptionArticle };