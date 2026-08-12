import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CertificationProcess } from './components/CertificationProcess';
import { ISOStandardsSection } from './components/ISOStandardsSection';
import { GapAnalysisTool } from './components/GapAnalysisTool';
import { CertificateVerification } from './components/CertificateVerification';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [preselectedStandard, setPreselectedStandard] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = (standardCode?: string) => {
    setPreselectedStandard(standardCode);
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Fixed Top Header */}
      <Navbar
        onOpenQuoteModal={() => handleOpenQuoteModal()}
        activeSection=""
      />

      {/* Page Sections */}
      <main>
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />
        <CertificationProcess onOpenQuoteModal={() => handleOpenQuoteModal()} />
        <ISOStandardsSection onOpenQuoteModal={handleOpenQuoteModal} />
        <GapAnalysisTool onOpenQuoteModal={handleOpenQuoteModal} />
        <CertificateVerification />
        <AboutSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Proposal Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        preselectedStandard={preselectedStandard}
      />
    </div>
  );
}
