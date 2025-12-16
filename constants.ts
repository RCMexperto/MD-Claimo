import React from 'react';
import { 
  HeartPulse, 
  Brain, 
  Baby, 
  Bone, 
  Eye,
  Stethoscope, 
  Activity
} from 'lucide-react';
import { SpecialtyItem, LearnItem, NavLink, TestimonialItem } from './types';
import { 
  ICD10UpdateArticle, 
  Modifier25Article, 
  TelehealthArticle, 
  SDOHArticle, 
  IncidentToArticle, 
  MedicalNecessityArticle 
} from './components/BlogContent';

export const NAV_LINKS: NavLink[] = [
  { 
    label: 'Services', 
    href: '#services',
    children: [
      { label: 'Patient Scheduling', href: '#services', id: 'scheduling', type: 'service' },
      { label: 'Advance eligibility and VOB', href: '#services', id: 'eligibility', type: 'service' },
      { label: 'Provider contracting and credentialing', href: '#services', id: 'credentialing', type: 'service' },
      { label: 'Medical Billing & Coding', href: '#services', id: 'billing', type: 'service' },
      { label: 'AR follow and Denial management', href: '#services', id: 'ar_denial', type: 'service' },
      { label: 'Auditing and Reporting', href: '#services', id: 'audit', type: 'service' }
    ]
  },
  { 
    label: 'Specialties', 
    href: '#specialties',
    children: [
      { label: 'Cardiology', href: '#specialties', id: 'cardiology', type: 'specialty' },
      { label: 'Psychiatry', href: '#specialties', id: 'psychiatry', type: 'specialty' },
      { label: 'Pediatrics', href: '#specialties', id: 'pediatrics', type: 'specialty' },
      { label: 'Orthopedics', href: '#specialties', id: 'orthopedics', type: 'specialty' },
      { label: 'Internal Medicine', href: '#specialties', id: 'internal_med', type: 'specialty' },
      { label: 'Pain Management', href: '#specialties', id: 'pain_mgmt', type: 'specialty' },
      { label: 'OB/GYN', href: '#specialties', id: 'obgyn', type: 'specialty' },
      { label: 'Dermatology', href: '#specialties', id: 'dermatology', type: 'specialty' },
      { label: 'Gastroenterology', href: '#specialties', id: 'gastro', type: 'specialty' },
      { label: 'Nephrology', href: '#specialties', id: 'nephrology', type: 'specialty' },
      { label: 'Urgent Care', href: '#specialties', id: 'urgent_care', type: 'specialty' },
      { label: 'SNF', href: '#specialties', id: 'snf', type: 'specialty' },
      { label: 'DME', href: '#specialties', id: 'dme', type: 'specialty' },
      { label: 'Pharmacy', href: '#specialties', id: 'pharmacy', type: 'specialty' }
    ]
  },
  { label: 'FAQ', href: '#faq' },
];

export const FAQS = [
  {
    question: "How quickly can you start billing for my practice?",
    answer: "We can typically start processing claims within 1-2 weeks for existing practices. For new practices, we prioritize credentialing to ensure you are ready to bill as soon as your contracts are active."
  },
  {
    question: "Do I need to switch my EHR software?",
    answer: "No. MD Claimo is platform-agnostic. We integrate seamlessly with over 50 major EHRs including Epic, Cerner, eClinicalWorks, Kareo, AdvancedMD, DrChrono, and Athenahealth. We adapt to your workflow, not the other way around."
  },
  {
    question: "Who handles patient billing inquiries?",
    answer: "We act as an extension of your practice. Our US-based, bilingual patient support team handles all incoming calls regarding statements, EOB explanations, and payment plans. This frees your front desk to focus on patient care, not financial disputes."
  },
  {
    question: "How do you charge for your services?",
    answer: "We operate on a transparent, performance-based model, charging a competitive percentage of net collections. We only get paid when you get paid. There are no hidden startup fees or postage costs."
  },
  {
    question: "Will I have access to my data?",
    answer: "Yes. You maintain 100% ownership and visibility. We provide a real-time executive dashboard where you can view charges entered, claims submitted, and payments posted 24/7. Transparency is one of our core pillars."
  },
  {
    question: "How do you handle the 'No Surprises Act' compliance?",
    answer: "We ensure full compliance by generating Good Faith Estimates (GFE) for self-pay patients and managing the dispute resolution process if necessary. Our compliance team updates our protocols weekly based on the latest CMS rulings."
  },
  {
    question: "What happens to my old Accounts Receivable (A/R)?",
    answer: "We offer a dedicated Old A/R Recovery service. Our SWAT team audits your aging buckets and aggressively pursues unpaid claims from the last 12 months (or your state's timely filing limit) to recover 'lost' revenue."
  },
  {
    question: "Do you require a long-term contract?",
    answer: "We believe in earning your business every month. While we offer annual agreements with rate incentives, we also provide flexible month-to-month options. We want you to stay because of our results, not a signature."
  },
  {
    question: "How do you handle denial management?",
    answer: "We don't just appeal; we prevent. Our system flags claim errors before submission (scrubbing). If a denial occurs, a specialized denial manager reviews it within 48 hours to correct the coding or attach medical records for a rapid appeal."
  },
  {
    question: "Is my patient data secure?",
    answer: "Absolutely. We are fully HIPAA compliant, SOC 2 Type II certified, and utilize 256-bit encrypted data transmission. Our staff undergoes quarterly compliance training to ensure PHI is protected at every touchpoint."
  }
];

export const LEARN_ARTICLES: LearnItem[] = [
  // 1. ICD-10 Updates
  {
    id: '1',
    title: '2025 ICD-10-CM Updates: The Codes You Can\'t Ignore',
    category: 'Coding Updates',
    excerpt: 'From new hypoglycemia codes to expanded eating disorder classifications, here is your cheat sheet for the October 1st updates. Don\'t let deleted codes trigger denials.',
    date: 'March 15, 2025',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=1000',
    content: React.createElement(ICD10UpdateArticle)
  },
  // 2. Modifier 25
  {
    id: '2',
    title: 'Modifier 25: The "Audit Magnet" Explained',
    category: 'Compliance',
    excerpt: 'It\'s the most misused modifier in medicine. Learn the "Significant, Separately Identifiable" rule in plain English to get paid for both the visit and the procedure without inviting an audit.',
    date: 'March 10, 2025',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000',
    content: React.createElement(Modifier25Article)
  },
  // 3. Telehealth Rules
  {
    id: '3',
    title: 'Telehealth Billing 2025: POS 02 vs. POS 10',
    category: 'Telemedicine',
    excerpt: 'The Public Health Emergency is over, but the confusion remains. Using the wrong Place of Service (POS) code can cut your reimbursement by 20%. Here is the definitive guide.',
    date: 'Feb 28, 2025',
    image: 'https://images.unsplash.com/photo-1576091160550-217358c7db81?auto=format&fit=crop&q=80&w=1000',
    content: React.createElement(TelehealthArticle)
  },
  // 4. SDOH Coding
  {
    id: '4',
    title: 'SDOH Z-Codes: Why Your Patient\'s Zip Code Matters',
    category: 'Risk Adjustment',
    excerpt: 'Housing instability and food insecurity affect health outcomes. Capturing these Z-codes (Z55-Z65) improves risk scores and supports medical necessity for complex care.',
    date: 'Feb 15, 2025',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=1000',
    content: React.createElement(SDOHArticle)
  },
  // 5. Incident-To
  {
    id: '5',
    title: 'The "Incident-To" Compliance Trap for NPs & PAs',
    category: 'Practice Management',
    excerpt: 'Billing 100% for a Nurse Practitioner? Ensure the physician was in the suite. We break down the Direct Supervision requirement vs. General Supervision rules.',
    date: 'Feb 01, 2025',
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=1000',
    content: React.createElement(IncidentToArticle)
  },
  // 6. Medical Necessity
  {
    id: '6',
    title: 'Writing Your Way to Payment: Medical Necessity 101',
    category: 'Documentation',
    excerpt: 'Payers don\'t care about how long you spent; they care about why. Learn to connect the diagnosis to the treatment plan to bulletproof your notes against "cloning" audits.',
    date: 'Jan 20, 2025',
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=1000',
    content: React.createElement(MedicalNecessityArticle)
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    name: 'Dr. Sarah Mitchell',
    role: 'Medical Director',
    practice: 'Metro Heart Institute', // Generic Name
    quote: 'MD Claimo has completely transformed our revenue cycle. Our denials dropped by 40% in the first three months, and cash flow has never been better.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea86b48e?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    id: '2',
    name: 'James Wilson',
    role: 'Practice Administrator',
    practice: 'Oak Healthcare Partners', // Generic Name
    quote: 'The transparency and reporting tools are a game changer. I finally know exactly where every dollar is. Highly recommended for any growing practice.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    id: '3',
    name: 'Dr. Emily Chen',
    role: 'Pediatrician',
    practice: 'Bright Future Pediatrics', // Generic Name
    quote: 'We were drowning in paperwork before MD Claimo. Now, my staff can focus on patients instead of fighting with insurance companies.',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    id: '4',
    name: 'Dr. Marcus Reynolds',
    role: 'Chief Surgeon',
    practice: 'Apex Ortho & Sports Med', // Generic Name
    quote: 'Orthopedic billing is notoriously complex with global periods and implants. MD Claimo cleaned up our backlog and increased our surgical reimbursements by 18% in year one.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    id: '5',
    name: 'Jennifer Lewis',
    role: 'Practice Manager',
    practice: 'Downtown Derm Associates', // Generic Name
    quote: 'Balancing cosmetic and medical billing was a nightmare for us. MD Claimo’s team understood the nuance immediately. Their reporting helps me run this practice like a true business.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    id: '6',
    name: 'Dr. Anika Patel',
    role: 'Owner',
    practice: 'Westside Pediatric Group', // Generic Name - Replaced "Prime"
    quote: 'As a solo practitioner, I cannot afford denials. Their team handles my vaccine inventory billing perfectly. I have peace of mind knowing my revenue is safe.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200&h=200'
  },
  // NEW TESTIMONIAL 1
  {
    id: '7',
    name: 'Thomas Clarke, MBA',
    role: 'CFO',
    practice: 'Unified Surgical Associates', // Generic Name
    quote: 'We audited three different billing companies before choosing MD Claimo. Their ability to integrate with our existing EHR and provide real-time KPI dashboards made them the clear choice.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200'
  },
  // NEW TESTIMONIAL 2
  {
    id: '8',
    name: 'Dr. Robert Vance',
    role: 'Neurologist',
    practice: 'Center for Advanced Neurology', // Generic Name
    quote: 'Pre-authorizations for MRI and infusion therapies were killing our admin time. MD Claimo took over the entire auth process, and our approval turnaround time dropped from 7 days to 24 hours.',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=200&h=200'
  },
  // NEW TESTIMONIAL 3
  {
    id: '9',
    name: 'Amanda Richardson',
    role: 'Operations Director',
    practice: 'Valley Gastro Specialists', // Generic Name
    quote: 'Transitioning to MD Claimo was seamless. They identified $40k in unbilled pathology charges from the previous year during their initial audit. They pay for themselves.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200'
  }
];