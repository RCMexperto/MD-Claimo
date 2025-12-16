import React, { useState, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Upload, Sparkles, Image as ImageIcon, Loader2, AlertCircle, ArrowLeft, Download, Wand2 } from 'lucide-react';

interface AiImageEditorProps {
  onBack: () => void;
}

const AiImageEditor: React.FC<AiImageEditorProps> = ({ onBack }) => {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setResultImage(null);
      setError(null);
    }
  };

  const handleGenerate = async () => {
    if (!image || !prompt) return;
    setLoading(true);
    setError(null);

    try {
       // Using the securely injected API key
       const apiKey = (typeof process !== 'undefined' && process.env?.API_KEY) ? process.env.API_KEY : '';
       if (!apiKey) throw new Error("API Key is missing. Please check your configuration.");

       const ai = new GoogleGenAI({ apiKey });
       
       // Convert file to base64
       const base64Data = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => {
             const result = reader.result as string;
             // Remove data URL prefix (e.g., "data:image/png;base64,")
             const base64 = result.split(',')[1];
             resolve(base64);
          };
          reader.onerror = reject;
          reader.readAsDataURL(image);
       });

       const response = await ai.models.generateContent({
         model: 'gemini-2.5-flash-image',
         contents: {
           parts: [
             { 
               inlineData: { 
                 mimeType: image.type, 
                 data: base64Data 
               } 
             },
             { text: prompt }
           ]
         }
       });

       // Extract image from response parts
       let foundImage = null;
       const parts = response.candidates?.[0]?.content?.parts || [];
       
       for (const part of parts) {
         if (part.inlineData) {
            foundImage = `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
            break;
         }
       }

       if (foundImage) {
         setResultImage(foundImage);
       } else {
         setError("The model did not return an image. It might have refused the request due to safety policies.");
       }

    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to generate image. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 pb-20 px-4 md:px-8 max-w-6xl mx-auto min-h-screen">
       <button 
          onClick={onBack}
          className="flex items-center gap-2 text-brand-400 hover:text-white transition-colors group mb-8 font-medium"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Dashboard
        </button>

        <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-bold uppercase tracking-wider mb-4">
               <Wand2 className="w-3 h-3" />
               Beta Feature
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              AI Image Studio
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Enhance medical diagrams, clean up scanned documents, or visualize concepts using Gemini 2.5 Flash.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="bg-dark-900/50 rounded-2xl p-8 border border-white/10 h-fit">
                <div 
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${preview ? 'border-brand-500/30 bg-brand-500/5' : 'border-white/10 hover:border-brand-500/30 hover:bg-white/5'}`}
                >
                    <input 
                        type="file" 
                        ref={fileInputRef}
                        className="hidden" 
                        accept="image/*"
                        onChange={handleImageUpload}
                    />
                    
                    {preview ? (
                        <div className="relative">
                            <img src={preview} alt="Upload" className="max-h-64 mx-auto rounded-lg shadow-lg" />
                            <div className="mt-4 text-sm text-brand-400 font-medium">Click to change image</div>
                        </div>
                    ) : (
                        <div className="py-8">
                            <div className="w-16 h-16 bg-brand-500/10 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-400">
                                <Upload className="w-8 h-8" />
                            </div>
                            <h3 className="text-white font-bold mb-2">Upload Source Image</h3>
                            <p className="text-gray-500 text-sm">JPG, PNG up to 10MB</p>
                        </div>
                    )}
                </div>

                <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Editing Instruction</label>
                    <div className="relative">
                        <textarea
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder="E.g., 'Enhance the contrast of this document', 'Highlight the fracture in red', 'Turn this into a medical illustration style'"
                            className="w-full bg-dark-950 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-brand-500 min-h-[120px]"
                        />
                        <Sparkles className="absolute right-4 bottom-4 w-4 h-4 text-brand-400 opacity-50" />
                    </div>
                </div>

                <button
                    onClick={handleGenerate}
                    disabled={!image || !prompt || loading}
                    className="w-full mt-6 bg-gradient-to-r from-brand-600 to-blue-600 hover:from-brand-500 hover:to-blue-500 text-white py-4 rounded-xl font-bold transition-all shadow-lg shadow-brand-900/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {loading ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Processing with Gemini 2.5...
                        </>
                    ) : (
                        <>
                            <Wand2 className="w-5 h-5" />
                            Generate Edit
                        </>
                    )}
                </button>

                {error && (
                    <div className="mt-4 p-4 bg-red-900/20 border border-red-500/20 rounded-xl flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                        <p className="text-red-300 text-sm">{error}</p>
                    </div>
                )}
            </div>

            {/* Output Section */}
            <div className="bg-dark-900/50 rounded-2xl p-8 border border-white/10 flex flex-col items-center justify-center min-h-[400px]">
                {resultImage ? (
                    <div className="w-full animation-in fade-in duration-700">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-white font-bold flex items-center gap-2">
                                <Sparkles className="w-4 h-4 text-brand-400" />
                                AI Result
                            </h3>
                            <a 
                                href={resultImage} 
                                download="md-claimo-edit.png"
                                className="text-xs font-bold text-brand-400 hover:text-white flex items-center gap-1 bg-brand-500/10 hover:bg-brand-500/20 px-3 py-1.5 rounded-lg transition-colors"
                            >
                                <Download className="w-3 h-3" /> Save Image
                            </a>
                        </div>
                        <img 
                            src={resultImage} 
                            alt="AI Generated" 
                            className="w-full rounded-xl shadow-2xl border border-white/10" 
                        />
                    </div>
                ) : (
                    <div className="text-center text-gray-500">
                        <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <ImageIcon className="w-10 h-10 opacity-20" />
                        </div>
                        <p className="max-w-xs mx-auto">
                            {loading ? "AI is processing your image. This may take up to 20 seconds..." : "The generated image will appear here."}
                        </p>
                    </div>
                )}
            </div>
        </div>
    </div>
  );
};

export default AiImageEditor;