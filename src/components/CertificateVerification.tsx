import React, { useState } from 'react';
import { MOCK_CERTIFICATES } from '../data/isoStandards';
import { VerifiedCertificate } from '../types';
import { ShieldCheck, Search, Award, CheckCircle2, XCircle, FileText, Globe, Building, Calendar, Download, AlertCircle } from 'lucide-react';

export const CertificateVerification: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searched, setSearched] = useState<boolean>(false);
  const [foundCert, setFoundCert] = useState<VerifiedCertificate | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const query = searchQuery.trim().toLowerCase();
    const result = MOCK_CERTIFICATES.find(
      c => c.certificateId.toLowerCase().includes(query) || c.clientName.toLowerCase().includes(query)
    );

    setFoundCert(result || null);
    setSearched(true);
  };

  const handleSampleClick = (certId: string) => {
    setSearchQuery(certId);
    const result = MOCK_CERTIFICATES.find(c => c.certificateId === certId);
    setFoundCert(result || null);
    setSearched(true);
  };

  return (
    <section id="verification" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/30 text-xs font-bold uppercase tracking-wider inline-flex items-center space-x-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Official Authenticity Verification Portal</span>
          </span>
          <h2 className="text-3xl font-extrabold text-white">
            Verify ISO <span className="text-amber-400">Certificate Authenticity</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Search our central accreditation registry to validate ISO certificates issued by Nexora Quality Systems WLL.
          </p>
        </div>

        {/* Search Input Box */}
        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-xl mb-8 space-y-4">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter Certificate Number (e.g. NEX-9001-2025-0104) or Company Name..."
                className="w-full bg-slate-900 border border-slate-800 rounded-xl py-3.5 left-10 pl-11 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>
            <button
              type="submit"
              className="py-3.5 px-6 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl transition-all shadow-md flex items-center justify-center space-x-2 shrink-0"
            >
              <Search className="w-4 h-4" />
              <span>Verify Certificate</span>
            </button>
          </form>

          {/* Sample Certificate Badges */}
          <div className="flex flex-wrap items-center gap-2 pt-2 text-xs text-slate-400">
            <span className="font-semibold text-slate-500">Quick Test Samples:</span>
            {MOCK_CERTIFICATES.slice(0, 3).map((cert) => (
              <button
                key={cert.certificateId}
                type="button"
                onClick={() => handleSampleClick(cert.certificateId)}
                className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-amber-400 border border-slate-800 font-mono text-[11px] transition-colors"
              >
                {cert.certificateId}
              </button>
            ))}
          </div>
        </div>

        {/* Verification Result Display */}
        {searched && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            {foundCert ? (
              <div className="bg-slate-950 rounded-2xl border border-amber-400/50 p-6 md:p-8 space-y-6 relative overflow-hidden shadow-2xl">
                {/* Top Green Active Banner */}
                <div className="bg-emerald-500/10 border border-emerald-500/30 p-3 rounded-xl flex items-center justify-between text-xs text-emerald-400 font-bold">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>AUTHENTIC & VALID CERTIFICATE REGISTERED IN NEXORA SYSTEM</span>
                  </div>
                  <span className="bg-emerald-500/20 px-2.5 py-0.5 rounded text-[10px] uppercase tracking-wider">
                    {foundCert.status}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left Column Details */}
                  <div className="space-y-4 text-xs">
                    <div>
                      <span className="text-slate-500 uppercase font-bold block mb-1">Certified Client Organization:</span>
                      <p className="text-base font-bold text-white flex items-center space-x-2">
                        <Building className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>{foundCert.clientName}</span>
                      </p>
                    </div>

                    <div>
                      <span className="text-slate-500 uppercase font-bold block mb-1">Standard Certified:</span>
                      <p className="text-sm font-extrabold text-amber-400">
                        {foundCert.standard}
                      </p>
                    </div>

                    <div>
                      <span className="text-slate-500 uppercase font-bold block mb-1">Certificate Registration ID:</span>
                      <p className="font-mono text-sm text-slate-200 bg-slate-900 p-2 rounded border border-slate-800 inline-block">
                        {foundCert.certificateId}
                      </p>
                    </div>

                    <div>
                      <span className="text-slate-500 uppercase font-bold block mb-1">Country Jurisdiction:</span>
                      <p className="text-slate-300 font-medium flex items-center space-x-1.5">
                        <Globe className="w-3.5 h-3.5 text-amber-400" />
                        <span>{foundCert.country}</span>
                      </p>
                    </div>
                  </div>

                  {/* Right Column Dates & Scope */}
                  <div className="space-y-4 text-xs">
                    <div>
                      <span className="text-slate-500 uppercase font-bold block mb-1">Certification Scope:</span>
                      <p className="text-slate-300 bg-slate-900 p-3 rounded-xl border border-slate-800 leading-relaxed font-medium">
                        "{foundCert.scope}"
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                        <span className="text-slate-500 block mb-1 font-semibold">Initial Issue Date:</span>
                        <span className="font-bold text-slate-200 flex items-center space-x-1">
                          <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                          <span>{foundCert.issueDate}</span>
                        </span>
                      </div>

                      <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                        <span className="text-slate-500 block mb-1 font-semibold">Valid Until:</span>
                        <span className="font-bold text-amber-400 flex items-center space-x-1">
                          <Calendar className="w-3.5 h-3.5 text-amber-400" />
                          <span>{foundCert.expiryDate}</span>
                        </span>
                      </div>
                    </div>

                    <div>
                      <span className="text-slate-500 uppercase font-bold block mb-1">Accreditation Body:</span>
                      <span className="text-slate-300 font-semibold">{foundCert.accreditationBody}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Download Mock */}
                <div className="pt-4 border-t border-slate-800 flex justify-end">
                  <button
                    onClick={() => alert(`Certificate Verification Document for ${foundCert.certificateId} downloaded.`)}
                    className="py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-amber-400 text-xs font-bold rounded-lg border border-slate-700 transition-all flex items-center space-x-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Official Verification Extract (PDF)</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-slate-950 rounded-2xl border border-rose-500/30 p-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mx-auto">
                  <XCircle className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">No Matching Certificate Record Found</h3>
                <p className="text-xs text-slate-400 max-w-md mx-auto">
                  We could not locate a certificate matching "<strong className="text-white">{searchQuery}</strong>". Please verify the Certificate ID printed on the document or contact our central verification registry in Manama.
                </p>
                <a
                  href="tel:+97333295090"
                  className="inline-block pt-2 text-xs font-bold text-amber-400 hover:underline"
                >
                  Contact Nexora Audit Registrar (+973 33295090)
                </a>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};
