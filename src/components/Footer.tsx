import React from 'react';
import { NexoraLogo } from './NexoraLogo';
import { MapPin, Phone, Clock, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <NexoraLogo variant="dark" size="md" subtitleText="QUALITY SYSTEMS WLL" />
            <p className="text-slate-400 leading-relaxed max-w-md">
              Empowering organizations across Bahrain and the GCC in achieving ISO certification excellence. Tailored quality management and pre-audit readiness solutions.
            </p>

            <div className="flex items-center space-x-3 text-amber-400 font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Accredited ISO Quality Systems Certification Partner</span>
            </div>
          </div>

          {/* Nav Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#standards" className="hover:text-amber-400 transition-colors">ISO Standards Portfolio</a></li>
              <li><a href="#process" className="hover:text-amber-400 transition-colors">3-Step Certification Process</a></li>
              <li><a href="#gap-calculator" className="hover:text-amber-400 transition-colors">ISO Gap Assessment Tool</a></li>
              <li><a href="#verification" className="hover:text-amber-400 transition-colors">Certificate Verification Portal</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">About Nexora Quality WLL</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact Manama Office</a></li>
            </ul>
          </div>

          {/* Manama HQ Info */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Bahrain Headquarters</h4>
            <div className="space-y-2 text-slate-300">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Office 519 | Building 57 Government Avenue Central Manama | Bahrain</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:+97333295090" className="text-amber-400 font-bold hover:underline">+973 33295090</a>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Hours: Sun - Thu (09:00 AM – 05:00 PM)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Nexora Quality Systems WLL. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <span>ISO 9001 • ISO 14001 • ISO 45001 • ISO 27001 • ISO 22000</span>
            <span>|</span>
            <span>Manama, Bahrain</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
