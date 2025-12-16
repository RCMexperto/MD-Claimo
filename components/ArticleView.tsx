import React, { useEffect, useState } from 'react';
import { ArrowLeft, Calendar, Sparkles, Loader2 } from 'lucide-react';
import { LearnItem } from '../types';
import { GoogleGenAI } from "@google/genai";

interface ArticleViewProps {
  article: LearnItem;
  onBack: () => void;
}

const ArticleView: React.FC<ArticleViewProps> = ({ article, onBack }) => {
  const [summary, setSummary] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleGenerateSummary = async () => {
    setError(null);
    try {
      setIsGenerating(true);
      
      // Safety check: Ensure process is defined and API Key exists to prevent crash
      // Use logical OR to fallback to empty string if undefined
      const apiKey = (typeof process !== 'undefined' && process.env?.API_KEY) ? process.env.API_KEY : '';
      
      if (!apiKey) {
        throw new Error("API Key is not configured. Please add your API_KEY to the environment variables.");
      }

      const ai = new GoogleGenAI({ apiKey });
      
      let contentToSummarize = "";
      
      if (article.content) {
         contentToSummarize = `Full Article Title: ${article.title}. Summary of topic: ${article.excerpt}.`;
      } else {
        contentToSummarize = `Title: ${article.title}. Excerpt: ${article.excerpt}. Category: ${article.category}.`;
      }

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `You are an expert medical billing consultant. Summarize the following article topic into 3 concise, high-impact bullet points for a busy doctor. Focus on value and action.
        
        Article Topic: ${contentToSummarize}`,
      });

      setSummary(response.text);
    } catch (err: any) {
      console.error("Error generating summary:", err);
      // Simplify error message for user
      setError("AI Summary unavailable. Please verify API key configuration.");
    } finally {
      setIsGenerating(false);
    }
  };

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

        {!summary && (
          <button
            onClick={handleGenerateSummary}
            disabled={isGenerating}
            className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-4 py-2 rounded-lg font-medium text-sm transition-all shadow-lg shadow-purple-900/20 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isGenerating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
            {isGenerating ? "Analyzing..." : "Summarize with AI"}
          </button>
        )}
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-red-200 text-sm">
          {error}
        </div>
      )}

      <div className="mb-8">
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
          <span className="bg-brand-500/20 text-brand-300 px-3 py-1 rounded-full border border-brand-500/20">{article.category}</span>
          <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {article.date}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8 leading-tight">{article.title}</h1>
        
        {/* AI Summary Box */}
        {summary && (
          <div className="mb-10 bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-xl p-6 relative overflow-hidden animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Sparkles className="w-24 h-24 text-white" />
            </div>
            <div className="relative z-10">
              <h3 className="text-purple-300 font-bold mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> AI Key Takeaways
              </h3>
              <div className="text-gray-200 leading-relaxed space-y-2 text-sm md:text-base">
                 {summary.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                 ))}
              </div>
            </div>
          </div>
        )}

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