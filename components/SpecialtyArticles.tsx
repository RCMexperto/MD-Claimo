import React from 'react';
import { 
  CheckCircle2, 
  Activity, 
  ShieldCheck, 
  TrendingUp, 
  AlertCircle, 
  FileText, 
  BadgeCheck, 
  DollarSign, 
  Search,
  Clock,
  Ban,
  Scale,
  Brain,
  Baby,
  Bone,
  Zap,
  Droplets,
  Microscope,
  Sun,
  Building2,
  Users,
  AlertTriangle,
  Shield,
  ClipboardCheck,
  Pill,
  Syringe,
  Stethoscope,
  Laptop,
  HeartPulse
} from 'lucide-react';

const SectionHeader: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div className="mb-8">
    <h3 className="text-3xl font-heading font-bold text-white mb-3">{title}</h3>
    {subtitle && <p className="text-xl text-gray-400 leading-relaxed">{subtitle}</p>}
  </div>
);

const MetricCard: React.FC<{ value: string; label: string; trend?: string; color: 'brand' | 'blue' | 'green' | 'purple' }> = ({ value, label, trend, color }) => {
  const colorMap = {
    brand: 'border-brand-500/30 text-brand-500 text-brand-400',
    blue: 'border-blue-500/30 text-blue-500 text-blue-400',
    green: 'border-green-500/30 text-green-500 text-green-400',
    purple: 'border-purple-500/30 text-purple-500 text-purple-400'
  };
  const currentStyles = colorMap[color].split(' ');

  return (
    <div className={`bg-dark-950 p-6 rounded-2xl border ${currentStyles[0]} relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300`}>
      <div className={`absolute top-0 right-0 p-4 opacity-10 ${currentStyles[1]}`}>
        <TrendingUp className="w-16 h-16" />
      </div>
      <div className={`text-4xl font-bold text-white mb-2`}>{value}</div>
      <div className="text-gray-400 text-sm font-medium uppercase tracking-wide">{label}</div>
      {trend && (
        <div className={`mt-4 ${currentStyles[2]} text-xs font-bold flex items-center gap-1`}>
          <TrendingUp className="w-3 h-3" /> {trend}
        </div>
      )}
    </div>
  );
};

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

export const CardiologyArticle: React.FC = () => (
  <div className="space-y-12 text-gray-300 leading-relaxed text-lg">
    <SectionHeader title="Cardiovascular RCM" subtitle="Precision at the heart of revenue." />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      <MetricCard value="99.8%" label="Coding Accuracy" trend="First Pass" color="brand" />
      <MetricCard value="$58k" label="Avg Recovery" trend="Missed Revenue" color="blue" />
      <MetricCard value="12 Days" label="A/R Velocity" trend="Cash flow" color="green" />
    </div>
  </div>
);

export const PsychiatryArticle: React.FC = () => (
  <div className="space-y-12 text-gray-300 leading-relaxed text-lg">
    <SectionHeader title="Psychiatry RCM" subtitle="Mastering mental health billing." />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      <MetricCard value="22%" label="Revenue Uplift" trend="E/M + Add-on" color="purple" />
    </div>
  </div>
);

export const OrthopedicsArticle: React.FC = () => (<div className="text-white">Orthopedics Article Content</div>);
export const PediatricsArticle: React.FC = () => (<div className="text-white">Pediatrics Article Content</div>);
export const InternalMedicineArticle: React.FC = () => (<div className="text-white">Internal Medicine Article Content</div>);
export const FamilyMedicineArticle: React.FC = () => (<div className="text-white">Family Medicine Article Content</div>);
export const UrgentCareArticle: React.FC = () => (<div className="text-white">Urgent Care Article Content</div>);
export const SNFArticle: React.FC = () => (<div className="text-white">SNF Article Content</div>);
export const DMEArticle: React.FC = () => (<div className="text-white">DME Article Content</div>);
export const PharmacyArticle: React.FC = () => (<div className="text-white">Pharmacy Article Content</div>);
export const PainMgmtArticle: React.FC = () => (<div className="text-white">Pain Mgmt Article Content</div>);
export const ObGynArticle: React.FC = () => (<div className="text-white">OB/GYN Article Content</div>);
export const DermatologyArticle: React.FC = () => (<div className="text-white">Dermatology Article Content</div>);
export const GastroArticle: React.FC = () => (<div className="text-white">Gastroenterology Article Content</div>);
export const NephrologyArticle: React.FC = () => (<div className="text-white">Nephrology Article Content</div>);