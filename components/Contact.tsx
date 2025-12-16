import React, { useState } from 'react';
import Section from './ui/Section';
import { Mail, Phone, MapPin, Send, Smartphone } from 'lucide-react';

// ==============================================================================
// 🔧 CONFIGURATION: UPDATED WITH YOUR SPECIFIC GOOGLE FORM DATA
// ==============================================================================
// 1. Your specific Form Action URL
const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeS6jv5sMg7u5fl4vxOcQru3N0Jbi5LG5ybDbMZIcxP5K4sBw/formResponse";

// 2. Your specific Entry IDs extracted from the provided HTML source
const GOOGLE_FORM_ENTRY_IDS = {
  name: "entry.2005620554",      // Name
  email: "entry.1045781291",     // Email
  phone: "entry.1166974658",     // Phone number
  practice: "entry.1065046570",  // Practice Name
  message: "entry.839337160",    // Comments (mapped to Message)
};
// ==============================================================================

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    practice: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);

    const formData = new FormData();
    formData.append(GOOGLE_FORM_ENTRY_IDS.name, formState.name);
    formData.append(GOOGLE_FORM_ENTRY_IDS.email, formState.email);
    formData.append(GOOGLE_FORM_ENTRY_IDS.phone, formState.phone);
    formData.append(GOOGLE_FORM_ENTRY_IDS.practice, formState.practice);
    formData.append(GOOGLE_FORM_ENTRY_IDS.message, formState.message);

    try {
      // Google Forms blocks standard AJAX requests due to CORS, but 'no-cors' mode 
      // allows the data to be sent successfully (response will be opaque/unreadable).
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
      });

      setSubmitted(true);
      setFormState({ name: '', email: '', phone: '', practice: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error("Form submission error:", err);
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Section id="contact" className="pb-32">
      <div className="bg-gradient-to-br from-brand-900/20 to-dark-950 border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-brand-400 font-semibold tracking-wide uppercase text-sm mb-3">Contact Us</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Ready to Optimize <br/>Your Revenue?
            </h3>
            <p className="text-gray-400 mb-8 text-lg">
              Schedule a free consultation today. Our experts will analyze your current billing health and propose a custom solution.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg">
                  <Mail className="w-6 h-6 text-brand-400" />
                </div>
                <div>
                  <div className="text-white font-medium">Email Us</div>
                  <div className="text-gray-400">info@mdclaimo.com</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg">
                  <Phone className="w-6 h-6 text-brand-400" />
                </div>
                <div>
                  <div className="text-white font-medium">Call Us</div>
                  <div className="text-gray-400">+1 (555) 123-4567</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg">
                  <MapPin className="w-6 h-6 text-brand-400" />
                </div>
                <div>
                  <div className="text-white font-medium">Visit Us</div>
                  <div className="text-gray-400">100 Innovation Blvd, Suite 200<br/>Tech City, ST 90210</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full bg-dark-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors"
                    placeholder="Dr. John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full bg-dark-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              {/* Row 2: Phone & Practice Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full bg-dark-950 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors"
                      placeholder="(555) 123-4567"
                    />
                    <Smartphone className="absolute left-3 top-3.5 w-4 h-4 text-gray-500" />
                  </div>
                </div>
                <div>
                  <label htmlFor="practice" className="block text-sm font-medium text-gray-300 mb-1">Practice Name</label>
                  <input
                    type="text"
                    id="practice"
                    name="practice"
                    value={formState.practice}
                    onChange={handleChange}
                    className="w-full bg-dark-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors"
                    placeholder="Doe Family Practice"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full bg-dark-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors"
                  placeholder="How can we help you?"
                />
              </div>

              {error && (
                <div className="text-red-400 text-sm bg-red-900/10 p-3 rounded-lg border border-red-500/20">
                  There was an error sending your message. Please verify your connection or try again.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className={`w-full py-4 rounded-lg font-bold text-white transition-all flex items-center justify-center gap-2 ${
                  submitted 
                    ? 'bg-green-600 hover:bg-green-700' 
                    : 'bg-brand-600 hover:bg-brand-500 hover:shadow-lg hover:shadow-brand-500/25'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending to MD Claimo...</span>
                ) : submitted ? (
                  <span>Message Sent Successfully!</span>
                ) : (
                  <>Send Message <Send className="w-4 h-4" /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;