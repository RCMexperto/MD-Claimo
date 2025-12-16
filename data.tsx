import React from 'react';
import { 
  FileText, 
  DollarSign, 
  ShieldCheck, 
  BarChart3, 
  CalendarClock, 
  FileSignature, 
  Undo2,
  HeartPulse, 
  Brain, 
  Baby, 
  Bone, 
  Stethoscope, 
  Activity,
  Building2,
  Armchair,
  Pill,
  Users,
  Zap,
  Droplets,
  Microscope,
  Sun,
  Syringe
} from 'lucide-react';
import { ServiceItem, SpecialtyItem } from './types';
import SchedulingArticle from './components/SchedulingArticle';
import { 
  EligibilityArticle, 
  CredentialingArticle, 
  BillingCodingArticle, 
  ARDenialArticle, 
  AuditArticle 
} from './components/ServiceArticles';
import { 
  CardiologyArticle, 
  PsychiatryArticle, 
  OrthopedicsArticle, 
  PediatricsArticle,
  InternalMedicineArticle,
  FamilyMedicineArticle,
  UrgentCareArticle,
  SNFArticle,
  DMEArticle,
  PharmacyArticle,
  PainMgmtArticle,
  ObGynArticle,
  DermatologyArticle,
  GastroArticle,
  NephrologyArticle
} from './components/SpecialtyArticles';

export const SERVICES: ServiceItem[] = [
  {
    id: 'scheduling',
    title: 'Patient Scheduling & Intake',
    description: 'Optimize the very first step of your revenue cycle. Reduce no-shows and front-end denials with our strategic intake protocols.',
    Icon: CalendarClock,
    article: {
      title: 'The True Start of Your Revenue Cycle: Why Patient Scheduling is Not a Clerical Task',
      image: 'https://images.unsplash.com/photo-1584515933487-98db75f565b1?auto=format&fit=crop&q=80&w=1000',
      content: <SchedulingArticle />
    }
  },
  {
    id: 'eligibility',
    title: 'Advance Eligibility & VOB',
    description: 'Stop denials before they happen. We verify comprehensive benefits, deductibles, and auth requirements prior to every visit.',
    Icon: ShieldCheck,
    article: {
      title: 'The First Line of Defense: Mastering Verification of Benefits (VOB)',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000',
      content: <EligibilityArticle />
    }
  },
  {
    id: 'credentialing',
    title: 'Provider Contracting & Credentialing',
    description: 'Eliminate enrollment bottlenecks. We manage CAQH, payer applications, and contract negotiations to ensure you get paid from day one.',
    Icon: FileSignature,
    article: {
      title: 'Breaking Through the Red Tape: Strategic Provider Credentialing',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000',
      content: <CredentialingArticle />
    }
  },
  {
    id: 'billing',
    title: 'Medical Billing & Coding',
    description: 'AAPC certified coders ensuring 99% accuracy. We maximize reimbursement while maintaining strict ICD-10 and CPT compliance.',
    Icon: FileText,
    article: {
      title: 'Precision Meets Profit: The Art of Compliant Medical Coding',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000',
      content: <BillingCodingArticle />
    }
  },
  {
    id: 'ar_denial',
    title: 'AR Follow-up & Denial Management',
    description: 'We don’t accept "no" from payers. Our aggressive appeal strategies recover lost revenue and drastically reduce your Days in AR.',
    Icon: Undo2,
    article: {
      title: 'Recovering What Is Yours: The Science of Denial Management',
      image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=1000',
      content: <ARDenialArticle />
    }
  },
  {
    id: 'audit',
    title: 'Auditing & Reporting',
    description: 'X-Ray vision for your finances. Custom dashboards and deep-dive audits to uncover missed charges and compliance risks.',
    Icon: BarChart3,
    article: {
      title: 'Data-Driven Decisions: Auditing for Growth and Compliance',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
      content: <AuditArticle />
    }
  },
];

export const SPECIALTIES: SpecialtyItem[] = [
  { 
    id: 'cardiology', 
    name: 'Cardiology', 
    Icon: HeartPulse,
    description: 'Expertise in Interventional, Electrophysiology, and General Cardiology billing.',
    article: {
      title: 'Cardiology RCM: Precision at the Heart of Revenue',
      image: 'https://images.unsplash.com/photo-1628348070889-29037999d28f?auto=format&fit=crop&q=80&w=1000',
      content: <CardiologyArticle />
    }
  },
  { 
    id: 'psychiatry', 
    name: 'Psychiatry & Behavioral', 
    Icon: Brain,
    description: 'Navigating time-based coding, telehealth parity, and mental health parity laws.',
    article: {
      title: 'Mental Health RCM: Mastering Complexity',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000',
      content: <PsychiatryArticle />
    }
  },
  { 
    id: 'pediatrics', 
    name: 'Pediatrics', 
    Icon: Baby,
    description: 'High-volume efficiency, VFC vaccine management, and preventive care coding.',
    article: {
      title: 'Pediatrics RCM: Maximizing Thin Margins',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea86b48e?auto=format&fit=crop&q=80&w=1000',
      content: <PediatricsArticle />
    }
  },
  { 
    id: 'orthopedics', 
    name: 'Orthopedics', 
    Icon: Bone,
    description: 'Managing global surgical periods, implants, and workers compensation claims.',
    article: {
      title: 'Orthopedics RCM: From Surgery to Rehab',
      image: 'https://images.unsplash.com/photo-1584516150909-c43483ee7932?auto=format&fit=crop&q=80&w=1000',
      content: <OrthopedicsArticle />
    }
  },
  { 
    id: 'internal_med', 
    name: 'Internal Medicine', 
    Icon: Stethoscope,
    description: 'Optimizing Chronic Care Management (CCM) and Annual Wellness Visits.',
    article: {
      title: 'Internal Medicine: capturing Chronic Care Revenue',
      image: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&q=80&w=1000',
      content: <InternalMedicineArticle />
    }
  },
  { 
    id: 'pain_mgmt', 
    name: 'Pain Management', 
    Icon: Zap,
    description: 'Navigating opioid scrutiny, injection bundling, and urine toxicology audits.',
    article: {
      title: 'Pain Management: Compliance in a High-Audit Field',
      image: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&q=80&w=1000',
      content: <PainMgmtArticle />
    }
  },
  { 
    id: 'obgyn', 
    name: 'OB/GYN', 
    Icon: Baby, 
    description: 'Mastering the global maternity package, ultrasounds, and preventive split-billing.',
    article: {
      title: 'OB/GYN RCM: The Maternity Matrix',
      image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df4?auto=format&fit=crop&q=80&w=1000',
      content: <ObGynArticle />
    }
  },
  { 
    id: 'dermatology', 
    name: 'Dermatology', 
    Icon: Sun,
    description: 'Mohs surgery staging, cosmetic vs medical necessity, and lesion destruction rules.',
    article: {
      title: 'Dermatology: Precision in Procedures',
      image: 'https://images.unsplash.com/photo-1616391182219-e080b4d1043a?auto=format&fit=crop&q=80&w=1000',
      content: <DermatologyArticle />
    }
  },
  { 
    id: 'gastro', 
    name: 'Gastroenterology', 
    Icon: Microscope,
    description: 'Endoscopy coding rules, screening vs diagnostic colonoscopies, and anesthesia.',
    article: {
      title: 'Gastroenterology: The Screening Nuance',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000',
      content: <GastroArticle />
    }
  },
  { 
    id: 'nephrology', 
    name: 'Nephrology', 
    Icon: Droplets,
    description: 'Dialysis monthly capitation (MCP) tiers, CKD staging, and anemia management.',
    article: {
      title: 'Nephrology: Maximizing MCP Revenue',
      image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=1000',
      content: <NephrologyArticle />
    }
  },
  { 
    id: 'family_med', 
    name: 'Family Medicine', 
    Icon: Users,
    description: 'Holistic billing for multi-generational care and diverse procedure codes.',
    article: {
      title: 'Family Medicine: Breadth and Depth',
      image: 'https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&q=80&w=1000',
      content: <FamilyMedicineArticle />
    }
  },
  { 
    id: 'urgent_care', 
    name: 'Urgent Care', 
    Icon: Activity,
    description: 'Fast-paced billing for S-codes, occ-med, and immediate care services.',
    article: {
      title: 'Urgent Care: Speed and Accuracy',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000',
      content: <UrgentCareArticle />
    }
  },
  { 
    id: 'snf', 
    name: 'SNF (Skilled Nursing)', 
    Icon: Building2,
    description: 'Navigating PDPM, consolidated billing, and Part A vs Part B complexities.',
    article: {
      title: 'SNF Billing: The PDPM Era',
      image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=1000',
      content: <SNFArticle />
    }
  },
  { 
    id: 'dme', 
    name: 'DME', 
    Icon: Armchair,
    description: 'Managing rental cycles, certificates of medical necessity, and HCPCS coding.',
    article: {
      title: 'DME RCM: Equipment and Compliance',
      image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80&w=1000',
      content: <DMEArticle />
    }
  },
  { 
    id: 'pharmacy', 
    name: 'Pharmacy', 
    Icon: Pill,
    description: 'J-code billing, NDC matching, and specialty drug reimbursement.',
    article: {
      title: 'Pharmacy & Infusion RCM',
      image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=1000',
      content: <PharmacyArticle />
    }
  },
];