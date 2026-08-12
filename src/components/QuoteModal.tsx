import React, { useState, useEffect } from 'react';
import { ISO_STANDARDS } from '../data/isoStandards';
import { X, CheckCircle2, Send, FileText, Phone, MessageSquare, Building2, User, Mail, Globe } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedStandard?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, preselectedStandard }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '+973 ',
    selectedStandards: preselectedStandard ? [preselectedStandard] : ['ISO 9001:2015'],
    employeeCount: '20-50 employees',
    industry: 'Manufacturing',
    locationsCount: 1,
    additionalNotes: ''
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (preselectedStandard) {
      setFormData(prev => ({
        ...prev,
        selectedStandards: prev.selectedStandards.includes(preselectedStandard)
          ? prev.selectedStandards
          : [...prev.selectedStandards, preselectedStandard]
      }));
    }
  }, [preselectedStandard]);

  if (!isOpen) return null;

  const handleStandardToggle = (stdCode: string) => {
    setFormData(prev => {
      const exists = prev.selectedStandards.includes(stdCode);
      if (exists) {
        if (prev.selectedStandards.length === 1) return prev; // Keep at least 1
        return { ...prev, selectedStandards: prev.selectedStandards.filter(s => s !== stdCode) };
      } else {
        return { ...prev, selectedStandards: [...prev.selectedStandards, stdCode] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Nexora Quality Systems WLL,\n\nI would like to request an ISO Certification Proposal:\n- Company: ${formData.companyName}\n- Contact: ${formData.contactPerson}\n- Standards: ${formData.selectedStandards.join(', ')}\n- Employees: ${formData.employeeCount}\n- Industry: ${formData.industry}\n- Phone: ${formData.phone}`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full p-6 md:p-8 relative max-h-[90vh] overflow-y-auto text-white shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Header */}
            <div className="space-y-1">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider inline-flex items-center space-x-1">
                <FileText className="w-3.5 h-3.5" />
                <span>Official ISO Audit Proposal Request</span>
              </span>
              <h3 className="text-2xl font-black text-white">
                Request Tailored Certification Proposal
              </h3>
              <p className="text-xs text-slate-300">
                Provide your company details below. Our Manama lead auditor team will contact you within 24 hours.
              </p>
            </div>

            {/* Standard Selection */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                Select ISO Certification Standard(s):
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {ISO_STANDARDS.map((std) => {
                  const isSelected = formData.selectedStandards.includes(std.code);
                  return (
                    <button
                      key={std.id}
                      type="button"
                      onClick={() => handleStandardToggle(std.code)}
                      className={`p-2.5 rounded-lg text-xs font-bold border transition-all text-center ${
                        isSelected
                          ? 'bg-amber-400 text-slate-950 border-amber-300'
                          : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                      }`}
                    >
                      {std.code}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Form Fields Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="space-y-1">
                <label className="block text-xs font-semibold text-slate-300">
                  Company / Organization Name *
                </label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Gulf Tech WLL"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 left-8 pl-9 pr-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-semibold text-slate-300">
                  Contact Person & Designation *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={formData.contactPerson}
                    onChange={e => setFormData({ ...formData, contactPerson: e.target.value })}
                    placeholder="e.g. Ali Ahmed, Quality Manager"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 left-8 pl-9 pr-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-semibold text-slate-300">
                  Business Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.bh"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 left-8 pl-9 pr-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-semibold text-slate-300">
                  Phone / Mobile Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+973 3300 0000"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 left-8 pl-9 pr-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-semibold text-slate-300">
                  Total Employee Scale
                </label>
                <select
                  value={formData.employeeCount}
                  onChange={e => setFormData({ ...formData, employeeCount: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-3 text-xs text-white focus:outline-none focus:border-amber-400"
                >
                  <option value="1-19 employees">1 - 19 employees</option>
                  <option value="20-50 employees">20 - 50 employees</option>
                  <option value="51-200 employees">51 - 200 employees</option>
                  <option value="201+ employees">201+ employees</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-semibold text-slate-300">
                  Industry Sector
                </label>
                <select
                  value={formData.industry}
                  onChange={e => setFormData({ ...formData, industry: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-3 text-xs text-white focus:outline-none focus:border-amber-400"
                >
                  <option value="Manufacturing">Manufacturing & Industrial</option>
                  <option value="Construction & Engineering">Construction & Engineering</option>
                  <option value="Oil & Gas">Oil & Gas / Chemicals</option>
                  <option value="IT & Financial Services">IT, Banking & Financial Services</option>
                  <option value="Logistics & Warehousing">Logistics & Warehousing</option>
                  <option value="Healthcare & Medical">Healthcare & Medical Devices</option>
                  <option value="Food & Hospitality">Food Safety & Hospitality</option>
                </select>
              </div>

            </div>

            <div className="space-y-1">
              <label className="block text-xs font-semibold text-slate-300">
                Additional Audit Scope Notes (Optional)
              </label>
              <textarea
                rows={2}
                value={formData.additionalNotes}
                onChange={e => setFormData({ ...formData, additionalNotes: e.target.value })}
                placeholder="Mention any target audit deadlines or multi-site branch locations..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />
            </div>

            {/* Submit Action */}
            <div className="pt-2 flex items-center justify-end space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs shadow-md transition-all flex items-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Proposal Request</span>
              </button>
            </div>

          </form>
        ) : (
          <div className="py-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-black text-white">Proposal Request Received!</h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                Thank you <strong className="text-white">{formData.contactPerson}</strong>. Our lead auditor team at Nexora Quality Systems WLL will prepare your tailored proposal for <strong className="text-amber-400">{formData.selectedStandards.join(', ')}</strong>.
              </p>
            </div>

            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-left text-xs space-y-2 max-w-md mx-auto">
              <span className="font-bold text-amber-400 block uppercase tracking-wider">Fast-Track Direct Dispatch:</span>
              <p className="text-slate-300">You can also connect immediately with our Manama office via WhatsApp or Direct Call:</p>
              
              <div className="flex flex-col sm:flex-row gap-2 pt-2">
                <a
                  href={`https://wa.me/97333295090?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 bg-emerald-600/30 hover:bg-emerald-600/40 text-emerald-300 border border-emerald-500/40 rounded-lg font-bold text-center flex items-center justify-center space-x-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Send via WhatsApp</span>
                </a>

                <a
                  href="tel:+97333295090"
                  className="flex-1 py-2 px-3 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 rounded-lg font-bold text-center flex items-center justify-center space-x-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call +973 33295090</span>
                </a>
              </div>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2 bg-slate-800 text-slate-300 hover:text-white rounded-lg text-xs font-semibold"
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
