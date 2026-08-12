import React from 'react';
import { Award, ShieldCheck, CheckCircle2, ArrowRight, FileText, Phone, MessageSquare, Building2, MapPin } from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden flex items-center">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>

      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Accreditation Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Accredited ISO Certification Partner • Manama, Bahrain</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Empowering Organizations in Achieving{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
                ISO Certification
              </span>{' '}
              Excellence
            </h1>

            {/* Mission / Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              At <strong className="text-white font-semibold">Nexora Quality Systems WLL</strong>, our mission is to deliver tailored solutions that enhance quality management, operational efficiency, and global compliance for businesses in Bahrain and the GCC.
            </p>

            {/* Core Value Props Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-200">
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Application & Contract Review</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Pre-audit Readiness & Gap Analysis</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Issuing Accredited ISO Certificates</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Government Avenue HQ, Manama</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm rounded-xl shadow-lg shadow-amber-400/20 hover:shadow-amber-400/30 transition-all transform active:scale-95"
              >
                <FileText className="w-4 h-4" />
                <span>Get Free Proposal & Assessment</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <a
                href="#gap-calculator"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold text-sm rounded-xl border border-slate-700/80 hover:border-slate-600 transition-all"
              >
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Calculate ISO Readiness</span>
              </a>

              <a
                href="https://wa.me/97333295090?text=Hello%20Nexora%20Quality%20Systems,%20I%20would%20like%20to%20inquire%20about%20ISO%20certification."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-4 py-3.5 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 font-bold text-sm rounded-xl border border-emerald-500/40 transition-all"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Location & Phone Bar */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-slate-400">
              <div className="flex items-center space-x-1.5">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Office 519, Building 57, Central Manama, Bahrain</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Phone className="w-4 h-4 text-amber-400" />
                <a href="tel:+97333295090" className="text-amber-400 hover:underline font-bold">+973 33295090</a>
              </div>
            </div>

          </div>

          {/* Right Column Visual Executive Card */}
          <div className="lg:col-span-5">
            <div className="relative bg-slate-900/90 rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-6 overflow-hidden">
              {/* Subtle gold ribbon top border */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500"></div>

              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 font-black">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Nexora Quality Systems WLL</h3>
                    <p className="text-xs text-slate-400">Certified Auditing & Quality Advisory</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-300 text-[11px] font-bold border border-amber-400/30">
                  ISO Official
                </span>
              </div>

              {/* Supported Standards Grid Tags */}
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Core Accredited ISO Standards
                </p>
                <div className="grid grid-cols-2 gap-2.5 text-xs">
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 hover:border-amber-400/50 transition-colors">
                    <span className="font-bold text-amber-400 block text-sm">ISO 9001</span>
                    <span className="text-slate-300 text-[11px]">Quality Management</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 hover:border-amber-400/50 transition-colors">
                    <span className="font-bold text-amber-400 block text-sm">ISO 14001</span>
                    <span className="text-slate-300 text-[11px]">Environmental EMS</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 hover:border-amber-400/50 transition-colors">
                    <span className="font-bold text-amber-400 block text-sm">ISO 45001</span>
                    <span className="text-slate-300 text-[11px]">Occupational Safety</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 hover:border-amber-400/50 transition-colors">
                    <span className="font-bold text-amber-400 block text-sm">ISO 27001</span>
                    <span className="text-slate-300 text-[11px]">Information Security</span>
                  </div>
                </div>
              </div>

              {/* Instant Verification Quick Box */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span className="font-medium text-slate-400">Certification Process:</span>
                  <span className="text-emerald-400 font-bold">Fast-Track 3-Step</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-amber-400 h-full w-3/4 rounded-full"></div>
                </div>
                <div className="flex justify-between text-[11px] text-slate-400 pt-1">
                  <span>Application</span>
                  <span>Pre-Audit Gap</span>
                  <span className="text-amber-400 font-bold">Issued Cert</span>
                </div>
              </div>

              {/* Call to Action Inside Card */}
              <a
                href="#process"
                className="block text-center w-full py-3 bg-slate-800 hover:bg-slate-700 text-amber-400 font-bold text-xs rounded-xl border border-amber-400/30 transition-all"
              >
                Explore the 3-Step Certification Process →
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
