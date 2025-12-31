import React, { useState } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import RcmCycle from './components/RcmCycle.tsx';
import Process from './components/Process.tsx';
import Services from './components/Services.tsx';
import Specialties from './components/Specialties.tsx';
import Learn from './components/Learn.tsx';
import Resources from './components/Resources.tsx';
import FAQ from './components/FAQ.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import Testimonials from './components/Testimonials.tsx';
import ArticleView from './components/ArticleView.tsx';
import TimelyFiling from './components/TimelyFiling.tsx';
import KnowledgeCenter from './components/KnowledgeCenter.tsx';
import { LearnItem, ServiceItem, SpecialtyItem, NavLink } from './types.ts';
import { SERVICES, SPECIALTIES } from './data.tsx';

function App() {
  const [currentArticle, setCurrentArticle] = useState<LearnItem | null>(null);
  const [showTimelyFiling, setShowTimelyFiling] = useState(false);
  const [showKnowledgeCenter, setShowKnowledgeCenter] = useState(false);

  const handleArticleClick = (article: LearnItem) => {
    setCurrentArticle(article);
    setShowTimelyFiling(false);
    setShowKnowledgeCenter(false);
    window.scrollTo(0, 0);
  };

  const handleServiceArticleClick = (service: ServiceItem) => {
    if (service.article) {
      setCurrentArticle({
        id: service.id,
        title: service.article.title,
        category: 'Service Strategy',
        excerpt: service.description,
        date: 'Strategies for 2025',
        image: service.article.image,
        content: service.article.content
      });
      setShowTimelyFiling(false);
      setShowKnowledgeCenter(false);
      window.scrollTo(0, 0);
    }
  };

  const handleSpecialtyClick = (specialty: SpecialtyItem) => {
    if (specialty.article) {
      setCurrentArticle({
        id: specialty.id,
        title: specialty.article.title,
        category: 'Specialty Focus',
        excerpt: specialty.description || 'Specialized billing strategy.',
        date: 'Specialty Insights',
        image: specialty.article.image,
        content: specialty.article.content
      });
      setShowTimelyFiling(false);
      setShowKnowledgeCenter(false);
      window.scrollTo(0, 0);
    }
  };

  const handleNavbarClick = (link: NavLink) => {
    if (link.href === '/knowledge-center') {
      setShowKnowledgeCenter(true);
      setShowTimelyFiling(false);
      setCurrentArticle(null);
      window.scrollTo(0, 0);
      return;
    }

    if (link.href === '#timely-filing') {
      setShowTimelyFiling(true);
      setShowKnowledgeCenter(false);
      setCurrentArticle(null);
      window.scrollTo(0, 0);
      return;
    }

    // Default: Reset pages and handle anchors
    setShowKnowledgeCenter(false);
    setShowTimelyFiling(false);
    
    if (currentArticle) {
      setCurrentArticle(null);
    }

    if (link.href.startsWith('#')) {
      setTimeout(() => {
        const id = link.href.substring(1);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }

    if (link.type === 'service' && link.id) {
      const service = SERVICES.find(s => s.id === link.id);
      if (service) handleServiceArticleClick(service);
    } else if (link.type === 'specialty' && link.id) {
      const specialty = SPECIALTIES.find(s => s.id === link.id);
      if (specialty) handleSpecialtyClick(specialty);
    }
  };

  const handleBackToHome = () => {
    setCurrentArticle(null);
    setShowTimelyFiling(false);
    setShowKnowledgeCenter(false);
    window.scrollTo(0, 0);
  };

  if (showKnowledgeCenter) {
    return (
      <div className="min-h-screen bg-dark-950 text-slate-100 font-sans selection:bg-brand-500 selection:text-white">
        <Navbar onNavClick={handleNavbarClick} />
        <KnowledgeCenter onBack={handleBackToHome} onArticleClick={handleArticleClick} />
        <Footer onNavClick={handleNavbarClick} />
      </div>
    );
  }

  if (showTimelyFiling) {
    return (
      <div className="min-h-screen bg-dark-950 text-slate-100 font-sans selection:bg-brand-500 selection:text-white">
        <Navbar onNavClick={handleNavbarClick} />
        <TimelyFiling onBack={handleBackToHome} />
        <Footer onNavClick={handleNavbarClick} />
      </div>
    );
  }

  if (currentArticle) {
    return (
      <div className="min-h-screen bg-dark-950 text-slate-100 font-sans selection:bg-brand-500 selection:text-white">
        <Navbar onNavClick={handleNavbarClick} />
        <ArticleView article={currentArticle} onBack={handleBackToHome} />
        <Footer onNavClick={handleNavbarClick} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 font-sans selection:bg-brand-500 selection:text-white">
      <Navbar onNavClick={handleNavbarClick} />
      <main className="flex flex-col">
        <Hero />
        <About />
        <RcmCycle />
        <Process />
        <Services onServiceArticleClick={handleServiceArticleClick} />
        <Specialties onSpecialtyClick={handleSpecialtyClick} />
        <Testimonials />
        <Learn onArticleClick={handleArticleClick} />
        <Resources />
        <FAQ />
        <Contact />
      </main>
      <Footer onNavClick={handleNavbarClick} />
    </div>
  );
}

export default App;