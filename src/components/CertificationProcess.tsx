import React, { useState } from 'react';
import { CERTIFICATION_PROCESS_STEPS } from '../data/isoStandards';
import { FileSearch, Search, Award, CheckCircle, ArrowRight, ShieldAlert, Sparkles, FileText } from 'lucide-react';

interface CertificationProcessProps {
  onOpenQuoteModal: () => void;
}

export const CertificationProcess: React.FC<CertificationProcessProps> = ({ onOpenQuoteModal }) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const getStepIcon = (stepNum: number) => {
    switch (stepNum) {
      case 1:
        return <FileSearch className="w-8 h-8 text-amber-400" />;
      case 2:
        return <Search className="w-8 h-8 text-amber-400" />;
      case 3:
        return <Award className="w-8 h-8 text-amber-400" />;
      default:
        return <CheckCircle className="w-8 h-8 text-amber-400" />;
    }
  };

  return (
    <section id="process" className="py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Proven ISO Certification Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Seamless 3-Step Path to <span className="text-amber-400">ISO Certification</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Nexora Quality Systems WLL guides your organization through every phase—from initial application review to final accredited certificate issuance.
          </p>
        </div>

        {/* 3 Step Cards Grid (Matching and elevating website screenshot!) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mb-12">
          
          {CERTIFICATION_PROCESS_STEPS.map((step) => {
            const isActive = activeStep === step.stepNumber;

            return (
              <div
                key={step.stepNumber}
                onClick={() => setActiveStep(step.stepNumber)}
                className={`relative cursor-pointer rounded-2xl p-8 transition-all duration-300 flex flex-col justify-between border ${
                  isActive
                    ? 'bg-slate-900 border-amber-400 shadow-xl shadow-amber-400/10 scale-[1.02]'
                    : 'bg-slate-900/60 hover:bg-slate-900/90 border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Number Watermark */}
                <span className="absolute top-4 right-6 text-5xl font-black text-slate-800/80 pointer-events-none select-none">
                  0{step.stepNumber}
                </span>

                <div>
                  {/* Step Header Badge & Icon */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-amber-400/30 flex items-center justify-center shadow-inner shrink-0">
                      {getStepIcon(step.stepNumber)}
                    </div>
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-[11px] font-bold border border-amber-400/30 mb-1">
                        {step.badgeText}
                      </span>
                      <h3 className="text-lg font-bold text-white leading-snug">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description from actual client website text! */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Key Tasks List */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-800">
                    <p className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                      Key Deliverables:
                    </p>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {step.keyTasks.map((task, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <CheckCircle className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer Step Indicator */}
                <div className="mt-8 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-bold">
                  <span className={isActive ? 'text-amber-400' : 'text-slate-500'}>
                    Phase {step.stepNumber} of 3
                  </span>
                  <span className="text-amber-400 inline-flex items-center hover:underline">
                    Learn More <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </span>
                </div>
              </div>
            );
          })}

        </div>

        {/* Process Guarantee Callout Bar */}
        <div className="bg-slate-900 rounded-2xl p-6 md:p-8 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Need ISO Pre-audit Readiness Check?</h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Identify non-conformities before external auditors arrive with our preliminary gap analysis team in Manama.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenQuoteModal}
            className="shrink-0 px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center space-x-2"
          >
            <FileText className="w-4 h-4" />
            <span>Apply for Certification Now</span>
          </button>
        </div>

      </div>
    </section>
  );
};
