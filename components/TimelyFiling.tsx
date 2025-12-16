import React, { useState, useEffect } from 'react';
import { Search, Clock, ArrowLeft, AlertTriangle, Building2, Landmark, ShieldAlert, CheckCircle2, Ban, Info, FileText, Calendar, Activity, BarChart2 } from 'lucide-react';

interface PayerLimit {
  payer: string;
  inNetwork: number; // Converted to number for visual graph
  inNetworkDisplay: string;
  outNetwork: string;
  notes: string;
  category: 'Government' | 'Commercial' | 'Medicare Advantage';
  riskLevel: 'Low' | 'Medium' | 'High';
}

const PAYER_DATA: PayerLimit[] = [
  { 
    payer: 'Original Medicare (CMS) Parts A & B', 
    inNetwork: 365,
    inNetworkDisplay: '365 Days', 
    outNetwork: 'N/A', 
    notes: 'The TFL is 365 Days for all claims (assigned and unassigned).', 
    category: 'Government',
    riskLevel: 'Low'
  },
  { 
    payer: 'Medicare Advantage (MA) Plans', 
    inNetwork: 90,
    inNetworkDisplay: '90–180 Days', 
    outNetwork: '90–365 Days', 
    notes: 'MA Plans have networks and penalties unlike original Medicare.', 
    category: 'Medicare Advantage',
    riskLevel: 'High'
  },
  { 
    payer: 'Aetna (Commercial)', 
    inNetwork: 120,
    inNetworkDisplay: '120 Days', 
    outNetwork: '180 Days', 
    notes: 'Check specific contract. Some HMO plans are stricter (90 days).', 
    category: 'Commercial',
    riskLevel: 'Medium'
  },
  { 
    payer: 'Cigna (Commercial)', 
    inNetwork: 90,
    inNetworkDisplay: '90 Days', 
    outNetwork: '180 Days', 
    notes: 'One of the strictest limits. Appeals for late filing are rarely granted.', 
    category: 'Commercial',
    riskLevel: 'High'
  },
  { 
    payer: 'UnitedHealthcare (UHC)', 
    inNetwork: 90,
    inNetworkDisplay: '90 Days', 
    outNetwork: '90–365 Days', 
    notes: 'Requires proof of timely filing for reconsideration. State laws vary.', 
    category: 'Commercial',
    riskLevel: 'High'
  },
  { 
    payer: 'Medicaid (State)', 
    inNetwork: 180,
    inNetworkDisplay: '90–365 Days (State Var)', 
    outNetwork: 'Varies', 
    notes: 'Varies drastically by state. Must verify local enrollment.', 
    category: 'Government',
    riskLevel: 'Medium'
  },
  { 
    payer: 'Blue Cross Blue Shield (BCBS)', 
    inNetwork: 365,
    inNetworkDisplay: '60–365 Days (Varies)', 
    outNetwork: 'Varies', 
    notes: 'Federal Employee Program (FEP) is usually 365. Local plans vary.', 
    category: 'Commercial',
    riskLevel: 'Medium'
  }
];

const TimelyFiling: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const filteredData = PAYER_DATA.filter(item => 
    item.payer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getRiskColor = (risk: string) => {
    switch(risk) {
      case 'High': return 'text-red-400 bg-red-500/10 border-red-500/20';
      case 'Medium': return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20';
      default: return 'text-green-400 bg-green-500/10 border-green-500/20';
    }
  };

  const getWidthPercentage = (days: number) => {
    // Map 90-365 days to a percentage width for the graph
    return Math.min(100, Math.max(20, (days / 365) * 100)) + '%';
  };

  const getBarColor = (days: number) => {
     if (days <= 90) return 'bg-red-500';
     if (days <= 180) return 'bg-yellow-500';
     return 'bg-green-500';
  };

  return (
    <div 
      className={`pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto min-h-screen bg-dark-950 text-white transition-opacity duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
    >
      
      {/* Navigation & Header */}
      <div className="mb-12">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-brand-400 hover:text-white transition-colors group mb-6 text-sm font-semibold uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Dashboard
        </button>
        
        <div className="flex flex-col lg:flex-row justify-between items-end gap-6">
          <div>
             <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
               Timely Filing Limits
             </h1>
             <p className="text-gray-400 text-lg max-w-3xl">
               The "Statute of Limitations" on your revenue. Submitting claims after these deadlines results in a <strong>CO-29 Denial</strong> (Time Limit Expired), which is typically non-billable to the patient.
             </p>
          </div>
          
          <div className="w-full lg:w-96 relative">
             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-500" />
             </div>
             <input
               type="text"
               className="block w-full pl-10 pr-3 py-4 border border-white/10 rounded-xl leading-5 bg-white/5 text-gray-300 placeholder-gray-500 focus:outline-none focus:bg-white/10 focus:border-brand-500 transition-colors shadow-xl"
               placeholder="Search Payer (e.g. Aetna)"
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
             />
          </div>
        </div>
      </div>

      {/* KPI Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
         <div className="bg-dark-900/50 p-6 rounded-2xl border border-white/10 flex items-center gap-4 hover:border-brand-500/30 transition-colors">
            <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-400">
               <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
               <div className="text-gray-400 text-xs font-bold uppercase tracking-wider">Critical Warning</div>
               <div className="text-2xl font-bold text-white">90 Days</div>
               <div className="text-xs text-red-400">Common Commercial Limit</div>
            </div>
         </div>
         <div className="bg-dark-900/50 p-6 rounded-2xl border border-white/10 flex items-center gap-4 hover:border-brand-500/30 transition-colors">
            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
               <Calendar className="w-6 h-6" />
            </div>
            <div>
               <div className="text-gray-400 text-xs font-bold uppercase tracking-wider">Federal Standard</div>
               <div className="text-2xl font-bold text-white">365 Days</div>
               <div className="text-xs text-blue-400">Medicare Part B</div>
            </div>
         </div>
         <div className="bg-dark-900/50 p-6 rounded-2xl border border-white/10 flex items-center gap-4 hover:border-brand-500/30 transition-colors">
            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-400">
               <Activity className="w-6 h-6" />
            </div>
            <div>
               <div className="text-gray-400 text-xs font-bold uppercase tracking-wider">Our Performance</div>
               <div className="text-2xl font-bold text-white">24 Hours</div>
               <div className="text-xs text-green-400">Avg Submission Time</div>
            </div>
         </div>
      </div>

      {/* Data Table / List */}
      <div className="space-y-4">
        <div className="hidden md:grid grid-cols-12 gap-4 px-6 text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
           <div className="col-span-4">Payer Name</div>
           <div className="col-span-3">Filing Window (Graph)</div>
           <div className="col-span-2">Limit</div>
           <div className="col-span-2">Risk Profile</div>
           <div className="col-span-1 text-right">Details</div>
        </div>

        {filteredData.map((item, index) => (
          <article 
            key={index}
            className="group bg-white/5 border border-white/10 rounded-xl p-6 md:p-4 hover:bg-white/10 transition-all hover:border-brand-500/30 hover:shadow-lg relative overflow-hidden"
          >
             <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                
                {/* Payer Name */}
                <div className="md:col-span-4">
                   <h3 className="text-lg font-bold text-white group-hover:text-brand-400 transition-colors">{item.payer}</h3>
                   <div className="flex items-center gap-2 mt-1">
                      {item.category === 'Government' && <Landmark className="w-3 h-3 text-blue-400" />}
                      {item.category === 'Medicare Advantage' && <ShieldAlert className="w-3 h-3 text-orange-400" />}
                      {item.category === 'Commercial' && <Building2 className="w-3 h-3 text-purple-400" />}
                      <span className="text-xs text-gray-400">{item.category}</span>
                   </div>
                </div>

                {/* Visual Timeline Bar */}
                <div className="md:col-span-3 hidden md:block">
                   <div className="w-full bg-dark-950 rounded-full h-3 border border-white/5 relative overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${getBarColor(item.inNetwork)} transition-all duration-1000 ease-out`}
                        style={{ width: isVisible ? getWidthPercentage(item.inNetwork) : '0%' }}
                      ></div>
                   </div>
                </div>

                {/* Numeric Limit */}
                <div className="md:col-span-2 flex items-center gap-2">
                   <Clock className={`w-4 h-4 ${item.inNetwork <= 90 ? 'text-red-400' : 'text-gray-500'}`} />
                   <span className={`font-bold ${item.inNetwork <= 90 ? 'text-white' : 'text-gray-300'}`}>
                      {item.inNetworkDisplay}
                   </span>
                </div>

                {/* Risk Badge */}
                <div className="md:col-span-2">
                   <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${getRiskColor(item.riskLevel)}`}>
                      {item.riskLevel === 'High' && <AlertTriangle className="w-3 h-3" />}
                      {item.riskLevel === 'Medium' && <Info className="w-3 h-3" />}
                      {item.riskLevel === 'Low' && <CheckCircle2 className="w-3 h-3" />}
                      {item.riskLevel} Priority
                   </span>
                </div>

                {/* Mobile/Notes details */}
                <div className="md:col-span-1 text-right">
                   <div className="p-2 bg-white/5 rounded-full inline-flex group-hover:bg-brand-500 group-hover:text-white transition-colors">
                     <Info className="w-4 h-4" />
                   </div>
                </div>
             </div>
             
             {/* Expandable/Hover Details */}
             <div className="mt-4 pt-4 border-t border-white/5 text-sm text-gray-400 flex flex-col md:flex-row gap-6 md:opacity-50 group-hover:opacity-100 transition-opacity">
                <div className="flex-1">
                   <strong className="text-gray-300">Strategy Note:</strong> {item.notes}
                </div>
                <div>
                   <strong className="text-gray-300">OON Limit:</strong> {item.outNetwork}
                </div>
             </div>
          </article>
        ))}
      </div>
      
      {filteredData.length === 0 && (
         <div className="text-center py-20 bg-white/5 rounded-xl border border-white/5 border-dashed">
            <FileText className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-400">No Payers Found</h3>
            <p className="text-gray-500">Try searching for a broad term like "Medicare" or "Commercial".</p>
         </div>
      )}

      {/* SEO & Education Footer */}
      <div className="mt-20 border-t border-white/10 pt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
         <div>
            <h4 className="text-white font-bold mb-3 flex items-center gap-2">
               <ShieldAlert className="w-5 h-5 text-brand-400" /> What is Timely Filing?
            </h4>
            <p className="text-sm text-gray-400 leading-relaxed">
               Timely filing is the deadline by which an insurance claim must be received by the payer. If you miss this window, the claim is denied, and you generally cannot bill the patient for the balance. It is a 100% write-off.
            </p>
         </div>
         <div>
            <h4 className="text-white font-bold mb-3 flex items-center gap-2">
               <BarChart2 className="w-5 h-5 text-brand-400" /> Proof of Timely Filing
            </h4>
            <p className="text-sm text-gray-400 leading-relaxed">
               If a payer claims they didn't receive a claim, your only defense is a "Clearinghouse Acceptance Report" (277CA) with a timestamp. Our system archives these automatically for 7 years.
            </p>
         </div>
      </div>
    </div>
  );
};

export default TimelyFiling;