import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import RcmCycle from './components/RcmCycle';
import Process from './components/Process';
import Services from './components/Services';
import Specialties from './components/Specialties';
import Learn from './components/Learn';
import Resources from './components/Resources';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import ArticleView from './components/ArticleView';
import TimelyFiling from './components/TimelyFiling';
import AiImageEditor from './components/AiImageEditor';
import { LearnItem, ServiceItem, SpecialtyItem, NavLink } from './types';
import { SERVICES, SPECIALTIES } from './data';

function App() {
  const [currentArticle, setCurrentArticle] = useState<LearnItem | null>(null);
  const [showTimelyFiling, setShowTimelyFiling] = useState(false);
  const [showImageEditor, setShowImageEditor] = useState(false);

  const handleArticleClick = (article: LearnItem) => {
    setCurrentArticle(article);
    setShowTimelyFiling(false);
    setShowImageEditor(false);
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
      setShowImageEditor(false);
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
      setShowImageEditor(false);
    }
  };

  const handleNavbarClick = (link: NavLink) => {
    // AI Image Editor Navigation
    if (link.href === '#ai-studio') {
      setShowImageEditor(true);
      setCurrentArticle(null);
      setShowTimelyFiling(false);
      window.scrollTo(0, 0);
      return;
    }

    // Timely Filing Navigation
    if (link.href === '#timely-filing') {
      setShowTimelyFiling(true);
      setCurrentArticle(null);
      setShowImageEditor(false);
      window.scrollTo(0, 0);
      return;
    }

    // Normal Navigation
    if (showTimelyFiling) setShowTimelyFiling(false);
    if (showImageEditor) setShowImageEditor(false);
    if (currentArticle) {
      setCurrentArticle(null);
      // Allow slight delay for re-render before scrolling if we were deep in a view
      if (link.href.startsWith('#')) {
        setTimeout(() => {
          const id = link.href.substring(1);
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
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
    setShowImageEditor(false);
    window.scrollTo(0, 0);
  };

  // View: AI Image Editor
  if (showImageEditor) {
    return (
      <div className="min-h-screen bg-dark-950 text-slate-100 font-sans selection:bg-brand-500 selection:text-white">
        <Navbar onNavClick={handleNavbarClick} />
        <AiImageEditor onBack={handleBackToHome} />
        <Footer onNavClick={handleNavbarClick} />
      </div>
    );
  }

  // View: Timely Filing
  if (showTimelyFiling) {
    return (
      <div className="min-h-screen bg-dark-950 text-slate-100 font-sans selection:bg-brand-500 selection:text-white">
        <Navbar onNavClick={handleNavbarClick} />
        <TimelyFiling onBack={handleBackToHome} />
        <Footer onNavClick={handleNavbarClick} />
      </div>
    );
  }

  // View: Article
  if (currentArticle) {
    return (
      <div className="min-h-screen bg-dark-950 text-slate-100 font-sans selection:bg-brand-500 selection:text-white">
        <Navbar onNavClick={handleNavbarClick} />
        <ArticleView article={currentArticle} onBack={handleBackToHome} />
        <Footer onNavClick={handleNavbarClick} />
      </div>
    );
  }

  // View: Main Landing Page
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
        <Learn onArticleClick={handleArticleClick} />
        <Resources />
        <FAQ />
        <Testimonials />
        <Contact />
      </main>
      <Footer onNavClick={handleNavbarClick} />
    </div>
  );
}

export default App;