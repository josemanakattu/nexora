import React, { useState } from 'react';
import { Phone, MapPin, Clock, Mail, Send, CheckCircle2, ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'ISO Certification Inquiry',
    message: ''
  });

  const faqs = [
    {
      q: 'How long does the ISO certification process take with Nexora?',
      a: 'The typical timeline ranges between 2 to 4 months depending on your organization’s size, existing documentation maturity, and selected standard. Fast-track options are available after our initial Stage 1 application review.'
    },
    {
      q: 'What is involved in the Stage 2 Pre-audit Gap Analysis?',
      a: 'During Stage 2, our ISO lead auditors evaluate your processes and documentation against ISO criteria. We identify non-conformities and provide an advisory report so you can correct gaps prior to formal external certification.'
    },
    {
      q: 'Are certificates issued by Nexora internationally recognized?',
      a: 'Yes. Nexora Quality Systems WLL issues accredited ISO certificates under IAF (International Accreditation Forum) frameworks, making your certification recognized by government entities, tenders, and multinational clients worldwide.'
    },
    {
      q: 'Can an organization certify multiple ISO standards simultaneously?',
      a: 'Yes! We frequently deliver Integrated Management System (IMS) audits combining ISO 9001 (Quality), ISO 14001 (Environment), and ISO 45001 (OH&S), saving significant audit time and expenditure.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/30 text-xs font-bold uppercase tracking-wider">
            Manama Office & Direct Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Get in Touch with Our <span className="text-amber-400">Lead ISO Auditors</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Visit our Government Avenue office in Central Manama or send an online inquiry for immediate assistance.
          </p>
        </div>

        {/* Top Contact Info & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Side: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="p-6 bg-slate-950 rounded-2xl border border-slate-800 space-y-4 shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Office Location</h3>
                  <p className="text-xs text-slate-400">Central Business District</p>
                </div>
              </div>

              <div className="text-xs text-slate-300 space-y-1 pl-1">
                <p className="font-semibold text-white">Nexora Quality Services WLL</p>
                <p>Office 519 | Building 57</p>
                <p>Government Avenue, Central Manama</p>
                <p className="text-amber-400 font-bold">Kingdom of Bahrain</p>
              </div>
            </div>

            {/* Direct Phone & Hours Card */}
            <div className="p-6 bg-slate-950 rounded-2xl border border-slate-800 space-y-4 shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Direct Telephone & WhatsApp</h3>
                  <a href="tel:+97333295090" className="text-sm font-extrabold text-amber-400 hover:underline">
                    +973 33295090
                  </a>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-900 flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2 text-slate-300">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>Hours: Sun - Thu (09:00 AM – 05:00 PM)</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                  Open Today
                </span>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <a
              href="https://wa.me/97333295090?text=Hello%20Nexora%20Quality%20Systems,%20I%20have%20an%20ISO%20inquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 rounded-2xl flex items-center justify-between text-emerald-300 transition-all font-bold text-xs"
            >
              <div className="flex items-center space-x-3">
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                <span>Instant WhatsApp Inquiry (+973 33295090)</span>
              </div>
              <span>Connect →</span>
            </a>

          </div>

          {/* Right Side: Quick Contact Form */}
          <div className="lg:col-span-7 bg-slate-950 rounded-2xl border border-slate-800 p-6 md:p-8 shadow-xl">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-white mb-2">Send Us a Direct Message</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-slate-300">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={e => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl py-2.5 px-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-slate-300">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={e => setContactForm({ ...contactForm, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl py-2.5 px-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-slate-300">Phone Number</label>
                    <input
                      type="tel"
                      value={contactForm.phone}
                      onChange={e => setContactForm({ ...contactForm, phone: e.target.value })}
                      placeholder="+973 33295090"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl py-2.5 px-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-slate-300">Subject / ISO Topic</label>
                    <input
                      type="text"
                      value={contactForm.subject}
                      onChange={e => setContactForm({ ...contactForm, subject: e.target.value })}
                      placeholder="e.g. ISO 9001 Audit Request"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl py-2.5 px-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-slate-300">Your Message *</label>
                  <textarea
                    rows={4}
                    required
                    value={contactForm.message}
                    onChange={e => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="Describe your quality management or ISO certification requirements..."
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry to Nexora</span>
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white">Message Sent Successfully!</h4>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  Thank you <strong className="text-white">{contactForm.name}</strong>. Our Manama office team will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 bg-slate-800 text-xs font-semibold text-amber-400 rounded-lg hover:bg-slate-700"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>

        </div>

        {/* FAQ Accordion Section */}
        <div className="pt-8 border-t border-slate-800 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl font-bold text-white">Frequently Asked Questions</h3>
            <p className="text-xs text-slate-400">Everything you need to know about ISO certification in Bahrain.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 text-left font-semibold text-xs sm:text-sm text-white flex items-center justify-between hover:bg-slate-900 transition-colors"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-amber-400 shrink-0 ml-2" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-500 shrink-0 ml-2" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="p-4 pt-0 text-xs text-slate-300 leading-relaxed border-t border-slate-900 bg-slate-900/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
