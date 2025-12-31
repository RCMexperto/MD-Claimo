import React from 'react';
import { 
  CheckCircle2, 
  Activity, 
  TrendingUp, 
  Ban,
  ArrowRight
} from 'lucide-react';

const SectionHeader: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div className="mb-8">
    <h3 className="text-3xl font-heading font-bold text-white mb-3">{title}</h3>
    {subtitle && <p className="text-xl text-gray-400 leading-relaxed">{subtitle}</p>}
  </div>
);

const StrategyCard: React.FC<{ number: string; title: string; children: React.ReactNode; color: 'brand' | 'blue' | 'purple' }> = ({ 
  number, 
  title, 
  children, 
  color 
}) => {
  const colors = {
    brand: { bg: 'bg-brand-500/20', text: 'text-brand-400', border: 'hover:border-brand-500/30' },
    blue: { bg: 'bg-blue-500/20', text: 'text-blue-400', border: 'hover:border-blue-500/30' },
    purple: { bg: 'bg-purple-500/20', text: 'text-purple-400', border: 'hover:border-purple-500/30' }
  };
  
  const c = colors[color];

  return (
    <div className={`bg-dark-950 border border-white/10 rounded-2xl p-8 transition-colors ${c.border}`}>
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 ${c.bg} rounded-lg flex items-center justify-center ${c.text} font-bold text-xl`}>{number}</div>
        <h4 className="text-xl font-bold text-white">{title}</h4>
      </div>
      {children}
    </div>
  );
};

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

export const EligibilityArticle: React.FC = () => (
  <div className="space-y-12 text-gray-300 leading-relaxed text-lg">
    <section>
      <SectionHeader 
        title="The First Line of Defense: Advance Eligibility & Verification of Benefits (VOB)"
        subtitle="Providing medical services without verifying coverage is akin to gambling with your practice's revenue."
      />
      <div className="bg-red-900/10 border-l-4 border-red-500 p-6 rounded-r-xl mb-8">
        <h4 className="text-red-400 font-bold mb-2 flex items-center gap-2"><Ban className="w-5 h-5"/> The Cost of Assumption</h4>
        <p className="text-sm">
          Industry data shows that 24% of all claim denials stem from eligibility issues.
        </p>
      </div>
    </section>

    <section>
      <h3 className="text-2xl font-bold text-white mb-6">MD Claimo's "Clear-View" VOB Protocol</h3>
      <div className="grid gap-6">
        <StrategyCard number="1" title="Comprehensive Benefit Analysis" color="brand">
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-brand-500"/> Specific CPT Code Coverage</li>
            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-brand-500"/> Deductible Remaining & Co-insurance %</li>
          </ul>
        </StrategyCard>
      </div>
    </section>
  </div>
);

export const CredentialingArticle: React.FC = () => (
  <div className="space-y-12 text-gray-300 leading-relaxed text-lg">
    <section>
      <SectionHeader 
        title="Provider Contracting & Credentialing"
        subtitle="Credentialing bottlenecks are the #1 reason for delayed revenue in new practices."
      />
    </section>
  </div>
);

export const BillingCodingArticle: React.FC = () => (
  <div className="space-y-12 text-gray-300 leading-relaxed text-lg">
    <section>
      <SectionHeader title="Medical Billing & Coding" subtitle="Ironclad compliance." />
    </section>
  </div>
);

export const ARDenialArticle: React.FC = () => (
  <div className="space-y-12 text-gray-300 leading-relaxed text-lg">
    <section>
      <SectionHeader title="A/R & Denial Management" subtitle="We recover what is yours." />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <MetricCard value="94%" label="Overturn Rate" trend="First Appeal" color="brand" />
        <MetricCard value="28 Days" label="Avg Days in A/R" trend="vs 45 Industry" color="blue" />
        <MetricCard value="$32k" label="Recovered / Provider" trend="Old A/R" color="green" />
      </div>
    </section>
  </div>
);

export const AuditArticle: React.FC = () => (
  <div className="space-y-12 text-gray-300 leading-relaxed text-lg">
    <section>
      <SectionHeader title="Auditing & Reporting" subtitle="Financial X-Ray vision." />
    </section>
  </div>
);