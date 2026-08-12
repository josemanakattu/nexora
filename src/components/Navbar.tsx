import React, { useState, useEffect } from 'react';
import { NexoraLogo } from './NexoraLogo';
import { Phone, MapPin, Clock, Menu, X, FileCheck, ArrowRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services & Standards', href: '#standards' },
    { name: '3-Step Process', href: '#process' },
    { name: 'GAP Assessment', href: '#gap-calculator' },
    { name: 'Verify Certificate', href: '#verification' },
    { name: 'About Nexora', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Header */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a
              href="tel:+97333295090"
              className="flex items-center space-x-2 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-semibold text-white">+973 33295090</span>
            </a>

            <div className="flex items-center space-x-2">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Office 519, Bldg 57, Government Avenue, Central Manama, Bahrain</span>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Hours: Sun - Thu (09:00 AM – 05:00 PM)</span>
            </div>
            
            <div className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-1.5"></span>
              Office Open Now
            </div>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/95 backdrop-blur-md shadow-xl border-b border-slate-800/80 py-3'
            : 'bg-slate-950/80 backdrop-blur-sm border-b border-slate-800/40 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center shrink-0 group">
            <NexoraLogo variant="dark" size="md" subtitleText="QUALITY SYSTEMS WLL" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center justify-center space-x-4 xl:space-x-6 2xl:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs xl:text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors py-1.5 whitespace-nowrap relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center space-x-2.5 shrink-0 pl-2 border-l border-slate-800/80 lg:border-l-0">
            <a
              href="#verification"
              className="inline-flex items-center space-x-1.5 px-3 py-2 text-xs font-semibold text-slate-300 bg-slate-800/80 hover:bg-slate-800 hover:text-white rounded-lg border border-slate-700/80 transition-all whitespace-nowrap"
            >
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Verify Cert</span>
            </a>

            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center space-x-2 px-3.5 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-md hover:shadow-amber-400/20 transition-all transform active:scale-95 whitespace-nowrap"
            >
              <FileCheck className="w-4 h-4" />
              <span>Request ISO Proposal</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-400 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
          <div className="py-2 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-amber-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800 space-y-2">
            <a
              href="tel:+97333295090"
              className="flex items-center justify-center space-x-2 w-full py-2.5 px-4 bg-slate-900 rounded-lg text-sm font-semibold text-slate-200 border border-slate-800"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call +973 33295090</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="flex items-center justify-center space-x-2 w-full py-3 px-4 bg-amber-400 rounded-lg text-sm font-bold text-slate-950 shadow-md"
            >
              <FileCheck className="w-4 h-4" />
              <span>Request ISO Proposal</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
