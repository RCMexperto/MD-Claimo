import React from 'react';
import { 
  HeartPulse, 
  Brain, 
  Baby, 
  Bone, 
  Eye,
  Stethoscope, 
  Activity,
  FileText,
  ShieldCheck,
  BookOpen,
  FileSearch,
  HardDrive
} from 'lucide-react';
import { SpecialtyItem, LearnItem, NavLink, ResourceItem } from './types';
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
      { label: 'Auditing and Reporting', href: '#services', id: 'audit', type: 'service' },
      { label: 'Medical Transcription', href: '#services', id: 'medical_transcription', type: 'service' },
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
  { label: 'Knowledge Center', href: '/knowledge-center', type: 'page' },
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
  }
];

// DATA CLEARED FOR MANUAL ENTRY
export const LEARN_ARTICLES: LearnItem[] = [];

// DATA CLEARED FOR MANUAL ENTRY
export const MANUALS_AND_GUIDES: ResourceItem[] = [];

export const TESTIMONIALS = [
  {
    id: '1',
    quote: "MD Claimo transformed our billing. Denials are down, collections are up, and our staff is finally free to focus on patient care.",
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: 'Dr. Emily Chen',
    role: 'Practice Owner',
    practice: 'ClearPath Cardiology'
  },
  {
    id: '2',
    quote: "We struggled with complex psychiatric billing for years. MD Claimo came in, streamlined everything, and increased our revenue by 20%.",
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    name: 'Sarah Miller, LCSW',
    role: 'Clinic Manager',
    practice: 'MindWell Behavioral Health'
  }
];