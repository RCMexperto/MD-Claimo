import { LucideIcon } from 'lucide-react';
import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  article?: {
    title: string;
    content: React.ReactNode;
    image?: string;
  };
}

export interface SpecialtyItem {
  id: string;
  name: string;
  Icon: LucideIcon;
  description?: string;
  article?: {
    title: string;
    content: React.ReactNode;
    image?: string;
  };
}

export interface LearnItem {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  link?: string;
  image?: string;
  content?: React.ReactNode;
}

export interface ResourceItem {
  id: string;
  title: string;
  type: 'Manual' | 'Guide' | 'Whitepaper' | 'Case Study';
  description: string;
  downloadUrl?: string;
  icon: LucideIcon;
  tags: string[];
}

export interface NavLink {
  label: string;
  href: string;
  id?: string;
  type?: 'service' | 'specialty' | 'page';
  children?: NavLink[];
}