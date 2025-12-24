import React, { useEffect } from 'react';
import { ArrowLeft, Calendar } from 'lucide-react';
import { LearnItem } from '../types';

interface ArticleViewProps {
  article: LearnItem;
  onBack: () => void;
}

const ArticleView: React.FC<ArticleViewProps> = ({ article, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderContent = () => {
    if (article.content) {
      return (
        <div className="animate-in fade-in duration-700">
          {article.content}
        </div>
      );
    }

    return (
      <div className="text-gray-400 p-8 border border-white/10 rounded-xl bg-white/5">
        <p>Full content for this article is currently being updated. Please check back soon.</p>
      </div>
    );
  };

  return (
    <div className="pt-24 pb-20 px-4 md:px-8 max-w-4xl mx-auto min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-brand-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Articles
        </button>
      </div>

      <div className="mb-8">
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
          <span className="bg-brand-500/20 text-brand-300 px-3 py-1 rounded-full border border-brand-500/20">{article.category}</span>
          <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {article.date}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8 leading-tight">{article.title}</h1>
        
        {article.image && (
          <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-12 relative shadow-2xl border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950 to-transparent opacity-40"></div>
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-full object-cover" 
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000";
                e.currentTarget.onerror = null; // Prevent infinite loop
              }}
            />
          </div>
        )}
      </div>

      <div className="prose prose-invert prose-lg max-w-none">
        {renderContent()}
      </div>
    </div>
  );
};

export default ArticleView;