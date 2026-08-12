import React from 'react';
import { Target, ShieldCheck, Users, Award, MapPin, Building, Clock, CheckCircle } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/30 text-xs font-bold uppercase tracking-wider">
              <Building className="w-3.5 h-3.5" />
              <span>About Nexora Quality Systems WLL</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Pioneering Quality & <span className="text-amber-400">ISO Excellence</span> in Bahrain
            </h2>

            {/* Mission Statement Callout Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-900/80 border-l-4 border-amber-400 border-slate-800 space-y-2">
              <span className="text-xs font-extrabold text-amber-400 uppercase tracking-widest block">
                Our Core Mission Statement
              </span>
              <p className="text-base sm:text-lg text-slate-200 font-medium italic leading-relaxed">
                "At Nexora Quality Services WLL, our mission is to empower organizations in achieving ISO certification excellence. We strive to deliver tailored solutions that enhance quality management and operational efficiency."
              </p>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Operating from our central office on Government Avenue in Manama, Nexora Quality Systems WLL provides comprehensive ISO auditing, gap analysis, and accreditation support. We partner with companies across manufacturing, construction, finance, health, food safety, and IT to build resilient quality management systems.
            </p>

            {/* Core Values Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-amber-400/10 flex items-center justify-center text-amber-400">
                  <Target className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-white">Precision & Rigor</h3>
                <p className="text-xs text-slate-400">
                  Thorough audit criteria ensuring 100% compliance with international standards.
                </p>
              </div>

              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-amber-400/10 flex items-center justify-center text-amber-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-white">Integrity</h3>
                <p className="text-xs text-slate-400">
                  Uncompromising objectivity, transparency, and ethical certification practices.
                </p>
              </div>

              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-amber-400/10 flex items-center justify-center text-amber-400">
                  <Users className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-white">Tailored Solutions</h3>
                <p className="text-xs text-slate-400">
                  Customized gap analysis adapted specifically to your operational reality.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column Location & Credentials Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-6">
              <div className="flex items-center space-x-3 pb-4 border-b border-slate-800">
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 font-bold">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Bahrain Headquarters</h3>
                  <p className="text-xs text-slate-400">Central Business District</p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start space-x-3 text-slate-300">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Official Address:</span>
                    <span>Office 519 | Building 57 Government Avenue Central Manama | Bahrain</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-slate-300">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Operating Hours:</span>
                    <span>Sun – Thu: 09:00 am – 05:00 pm</span>
                    <span className="block text-[11px] text-emerald-400 font-semibold mt-0.5">Open Today</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-slate-300">
                  <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Regional Accreditation:</span>
                    <span>Full IAF & GCC Accreditation Council Compliance Standards</span>
                  </div>
                </div>
              </div>

              {/* Direct Office Action */}
              <div className="pt-4 border-t border-slate-800">
                <a
                  href="tel:+97333295090"
                  className="block text-center w-full py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl shadow-md transition-all"
                >
                  Contact Office Direct (+973 33295090)
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
