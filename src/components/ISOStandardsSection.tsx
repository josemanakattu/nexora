import React, { useState } from 'react';
import { ISO_STANDARDS } from '../data/isoStandards';
import { ISOStandard } from '../types';
import {
  ShieldCheck, Leaf, HeartPulse, Lock, Utensils, Activity, Zap, RefreshCw,
  CheckCircle2, Clock, ArrowRight, X, ExternalLink, Download
} from 'lucide-react';

interface ISOStandardsSectionProps {
  onOpenQuoteModal: (preselectedStandard?: string) => void;
}

export const ISOStandardsSection: React.FC<ISOStandardsSectionProps> = ({ onOpenQuoteModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalStandard, setActiveModalStandard] = useState<ISOStandard | null>(null);

  const categories = ['All', 'Quality', 'Environment & Energy', 'Safety & Health', 'Information Security', 'Food & Medical'];

  const filteredStandards = selectedCategory === 'All'
    ? ISO_STANDARDS
    : ISO_STANDARDS.filter(s => s.category === selectedCategory);

  const getStandardIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-amber-400" />;
      case 'Leaf': return <Leaf className="w-6 h-6 text-emerald-400" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6 text-rose-400" />;
      case 'Lock': return <Lock className="w-6 h-6 text-cyan-400" />;
      case 'Utensils': return <Utensils className="w-6 h-6 text-orange-400" />;
      case 'Activity': return <Activity className="w-6 h-6 text-blue-400" />;
      case 'Zap': return <Zap className="w-6 h-6 text-yellow-400" />;
      case 'RefreshCw': return <RefreshCw className="w-6 h-6 text-indigo-400" />;
      default: return <ShieldCheck className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="standards" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/30 text-xs font-bold uppercase tracking-wider">
            Accredited Certification Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            ISO Standards We <span className="text-amber-400">Certify & Support</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Empower your business with internationally recognized ISO certifications tailored for industries in Manama, Bahrain & across the GCC region.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/10 scale-105'
                  : 'bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ISO Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStandards.map((std) => (
            <div
              key={std.id}
              className="bg-slate-950 rounded-2xl p-6 border border-slate-800 hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-amber-400/5"
            >
              <div>
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:bg-slate-800 transition-colors">
                    {getStandardIcon(std.iconName)}
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-slate-900 text-slate-400 text-[11px] font-semibold border border-slate-800">
                    {std.category}
                  </span>
                </div>

                {/* Standard Code & Title */}
                <h3 className="text-xl font-bold text-amber-400 mb-1 group-hover:text-amber-300 transition-colors">
                  {std.code}
                </h3>
                <h4 className="text-base font-semibold text-white mb-3">
                  {std.name}
                </h4>

                <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3">
                  {std.shortDesc}
                </p>

                {/* Target Industries */}
                <div className="mb-6 space-y-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Target Industries:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {std.targetIndustries.slice(0, 3).map((ind, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 text-[10px]">
                        {ind}
                      </span>
                    ))}
                    {std.targetIndustries.length > 3 && (
                      <span className="px-2 py-0.5 rounded bg-slate-900 text-slate-400 text-[10px]">
                        +{std.targetIndustries.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-slate-900 flex items-center justify-between gap-2">
                <button
                  onClick={() => setActiveModalStandard(std)}
                  className="text-xs font-semibold text-slate-400 hover:text-white transition-colors flex items-center space-x-1"
                >
                  <span>Details & Requirements</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenQuoteModal(std.code)}
                  className="px-3.5 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold transition-all shadow-sm flex items-center space-x-1"
                >
                  <span>Get Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* ISO Detail Modal */}
      {activeModalStandard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full p-6 md:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setActiveModalStandard(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center space-x-4">
              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
                {getStandardIcon(activeModalStandard.iconName)}
              </div>
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  {activeModalStandard.category} Standard
                </span>
                <h3 className="text-2xl font-black text-white">
                  {activeModalStandard.code}
                </h3>
                <p className="text-sm font-semibold text-slate-300">
                  {activeModalStandard.name}
                </p>
              </div>
            </div>

            {/* Overview */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Standard Overview
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800">
                {activeModalStandard.fullDesc}
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Key Organizational Benefits
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeModalStandard.keyBenefits.map((benefit, i) => (
                  <div key={i} className="flex items-start space-x-2 text-xs text-slate-200 bg-slate-950 p-3 rounded-lg border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Industries & Timeline */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-slate-950 rounded-xl border border-slate-800 gap-4">
              <div>
                <span className="text-xs text-slate-400 block mb-1 font-semibold">Typical Certification Duration:</span>
                <div className="flex items-center space-x-2 text-sm font-bold text-amber-400">
                  <Clock className="w-4 h-4" />
                  <span>{activeModalStandard.typicalDurationMonths} Months (Fast-Track Available)</span>
                </div>
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    const stdCode = activeModalStandard.code;
                    setActiveModalStandard(null);
                    onOpenQuoteModal(stdCode);
                  }}
                  className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl shadow-md transition-all"
                >
                  Request Proposal for {activeModalStandard.code}
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
