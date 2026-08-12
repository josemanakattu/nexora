import React, { useState } from 'react';
import { ISO_STANDARDS } from '../data/isoStandards';
import { Calculator, CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck, Download, RefreshCw, FileText } from 'lucide-react';

interface GapAnalysisToolProps {
  onOpenQuoteModal: (selectedStandard?: string) => void;
}

export const GapAnalysisTool: React.FC<GapAnalysisToolProps> = ({ onOpenQuoteModal }) => {
  const [selectedStandard, setSelectedStandard] = useState<string>('ISO 9001:2015');
  const [answers, setAnswers] = useState<{ [key: string]: 'yes' | 'partial' | 'no' }>({
    q1: 'partial',
    q2: 'no',
    q3: 'no',
    q4: 'no',
    q5: 'partial',
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const questions = [
    {
      id: 'q1',
      title: 'Formal Policy & Management Commitments',
      question: 'Does your organization have a documented Quality/EMS/OH&S Policy signed by top management and communicated to staff?'
    },
    {
      id: 'q2',
      title: 'Process Mapping & Standard Operating Procedures (SOPs)',
      question: 'Are key operational processes, roles, and standard work procedures documented and implemented?'
    },
    {
      id: 'q3',
      title: 'Risk Assessment & Context Evaluation',
      question: 'Have you conducted a formal risk and opportunity assessment identifying internal and external compliance factors?'
    },
    {
      id: 'q4',
      title: 'Internal Audits & Management Reviews',
      question: 'Has a formal internal audit and top management review session been conducted within the past 12 months?'
    },
    {
      id: 'q5',
      title: 'Corrective Action & Non-conformity Tracking',
      question: 'Is there a systematic process to record, investigate, and correct operational non-conformities?'
    }
  ];

  const calculateScore = () => {
    let total = 0;
    Object.values(answers).forEach((val) => {
      if (val === 'yes') total += 20;
      if (val === 'partial') total += 10;
    });
    return total;
  };

  const handleAnswerChange = (qId: string, value: 'yes' | 'partial' | 'no') => {
    setAnswers(prev => ({ ...prev, [qId]: value }));
  };

  const score = calculateScore();

  const getReadinessGrade = (scoreVal: number) => {
    if (scoreVal >= 80) {
      return {
        label: 'High ISO Audit Readiness',
        color: 'text-emerald-400',
        bgColor: 'bg-emerald-500/10 border-emerald-500/30',
        desc: 'Your organization possesses strong baseline documentation. You are well-positioned for Stage 2 External Certification Audit with Nexora.'
      };
    } else if (scoreVal >= 50) {
      return {
        label: 'Moderate Readiness — Minor Gap Bridge Needed',
        color: 'text-amber-400',
        bgColor: 'bg-amber-500/10 border-amber-500/30',
        desc: 'Key processes exist but require formal standardization and pre-audit gap analysis before external certification.'
      };
    } else {
      return {
        label: 'Preliminary Stage — Consulting & Gap Remediation Recommended',
        color: 'text-rose-400',
        bgColor: 'bg-rose-500/10 border-rose-500/30',
        desc: 'Your documentation framework requires structured setup. Nexora Quality Systems WLL can assist in establishing your ISO management framework.'
      };
    }
  };

  const grade = getReadinessGrade(score);

  return (
    <section id="gap-calculator" className="py-20 bg-slate-950 text-white relative border-t border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/30 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Self-Assessment</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white">
            ISO Readiness & <span className="text-amber-400">Gap Assessment Calculator</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Evaluate your organization's current compliance standing in 2 minutes and receive a preliminary readiness index.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 md:p-8 shadow-2xl space-y-8">
          
          {/* Step 1: Select Standard */}
          <div className="space-y-3 pb-6 border-b border-slate-800">
            <label className="block text-xs font-bold uppercase tracking-wider text-amber-400">
              1. Select Target ISO Standard for Assessment:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {ISO_STANDARDS.map((std) => (
                <button
                  key={std.id}
                  onClick={() => setSelectedStandard(std.code)}
                  className={`p-3 rounded-xl text-xs font-bold transition-all text-center border ${
                    selectedStandard === std.code
                      ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-md scale-102'
                      : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {std.code}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Assessment Questions */}
          <div className="space-y-6">
            <label className="block text-xs font-bold uppercase tracking-wider text-amber-400">
              2. Answer Core ISO Compliance Criteria ({selectedStandard}):
            </label>

            <div className="space-y-4">
              {questions.map((q, idx) => (
                <div key={q.id} className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-xs font-bold text-slate-400">
                      0{idx + 1}. {q.title}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 font-medium">
                    {q.question}
                  </p>

                  <div className="grid grid-cols-3 gap-2 pt-1">
                    <button
                      onClick={() => handleAnswerChange(q.id, 'yes')}
                      className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all flex items-center justify-center space-x-1 ${
                        answers[q.id] === 'yes'
                          ? 'bg-emerald-600/30 text-emerald-300 border-emerald-500'
                          : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Fully Implemented (Yes)</span>
                    </button>

                    <button
                      onClick={() => handleAnswerChange(q.id, 'partial')}
                      className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all flex items-center justify-center space-x-1 ${
                        answers[q.id] === 'partial'
                          ? 'bg-amber-500/30 text-amber-300 border-amber-500'
                          : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                      }`}
                    >
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>In Progress (Partial)</span>
                    </button>

                    <button
                      onClick={() => handleAnswerChange(q.id, 'no')}
                      className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all flex items-center justify-center space-x-1 ${
                        answers[q.id] === 'no'
                          ? 'bg-rose-500/30 text-rose-300 border-rose-500'
                          : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                      }`}
                    >
                      <span>Not Established (No)</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Results Box */}
          <div className={`p-6 rounded-2xl border ${grade.bgColor} space-y-4`}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">
                  Estimated Readiness Score:
                </span>
                <div className="flex items-baseline space-x-3">
                  <span className={`text-4xl font-black ${grade.color}`}>
                    {score}%
                  </span>
                  <span className={`text-base font-bold ${grade.color}`}>
                    {grade.label}
                  </span>
                </div>
              </div>

              <div className="w-32 bg-slate-950 h-3 rounded-full overflow-hidden border border-slate-800">
                <div
                  className={`h-full transition-all duration-500 ${
                    score >= 80 ? 'bg-emerald-400' : score >= 50 ? 'bg-amber-400' : 'bg-rose-400'
                  }`}
                  style={{ width: `${score}%` }}
                ></div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2 border-t border-slate-800/80">
              {grade.desc}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onOpenQuoteModal(selectedStandard)}
                className="flex-1 py-3 px-5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center justify-center space-x-2"
              >
                <FileText className="w-4 h-4" />
                <span>Request Pre-Audit Gap Analysis Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:+97333295090"
                className="py-3 px-5 bg-slate-950 hover:bg-slate-800 text-slate-200 font-bold text-xs rounded-xl border border-slate-800 transition-all flex items-center justify-center space-x-2"
              >
                <span>Call Auditor (+973 33295090)</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
