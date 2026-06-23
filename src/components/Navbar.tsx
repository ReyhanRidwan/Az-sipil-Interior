import { useState, useEffect } from 'react';
import { Menu, X, Phone, ShieldCheck, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../data';

interface NavbarProps {
  onOpenSurvey: () => void;
  onScrollToSection: (id: string) => void;
}

export default function Navbar({ onOpenSurvey, onScrollToSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Simple active tab highlight on scroll
      const sections = ['home', 'tentang-kami', 'layanan', 'portfolio', 'kalkulator-rab', 'survey-proyek', 'kontak'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveTab(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'Tentang Kami', id: 'tentang-kami' },
    { label: 'Layanan', id: 'layanan' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Kalkulator RAB', id: 'kalkulator-rab' },
    { label: 'Survey Proyek', id: 'survey-proyek' },
    { label: 'Kontak', id: 'kontak' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    onScrollToSection(id);
    setIsOpen(false);
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#121212]/95 border-b border-white/10 py-3 md:py-4 shadow-xl backdrop-blur-md'
          : 'bg-gradient-to-b from-[#121212]/80 via-[#121212]/40 to-transparent py-5 md:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleNavClick('home')}>
            <div className="relative h-10 w-10 flex items-center justify-center bg-accent-gold/20 rounded-md border border-accent-gold/40">
              <span className="text-white font-display font-extrabold text-xl tracking-tight">AZ</span>
              <div className="absolute -bottom-1 -right-1 h-3.5 w-3.5 bg-accent-gold rounded-full flex items-center justify-center border border-brand-dark">
                <ShieldCheck className="h-2 w-2 text-[#121212]" strokeWidth={3} />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-display font-bold text-lg md:text-xl tracking-tight leading-none">
                AZ SIPIL
              </span>
              <span className="text-accent-gold font-sans font-medium text-[10px] tracking-widest uppercase mt-0.5">
                INTERIOR
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors uppercase cursor-pointer rounded-sm ${
                  activeTab === item.id
                    ? 'text-accent-gold border-b-2 border-accent-gold font-semibold'
                    : 'text-white/80 hover:text-white'
                }`}
                style={{ contentVisibility: 'auto' }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center space-x-4">
            <button
              onClick={onOpenSurvey}
              className="gold-gradient text-white text-xs md:text-sm font-semibold tracking-wide px-5 py-2.5 rounded-sm hover:scale-[1.02] active:scale-95 transition-all duration-200 uppercase flex items-center space-x-2 hover:shadow-[0_4px_15px_rgba(197,168,128,0.4)] cursor-pointer"
            >
              <span>Konsultasi Gratis</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none transition-colors border border-white/10"
              aria-label="Toggle menu"
              style={{ minWidth: '44px', minHeight: '44px' }}
            >
              {isOpen ? <X className="h-6 w-6 text-accent-gold" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed top-[72px] right-0 w-full max-w-sm h-[calc(100vh-72px)] bg-brand-charcoal/98 border-l border-white/5 shadow-2xl z-40 transition-all duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full justify-between p-6 overflow-y-auto">
          <div className="space-y-4">
            <div className="border-b border-white/5 pb-4 mb-4">
              <span className="text-white/40 text-xs tracking-widest uppercase font-mono">Navigasi Menu</span>
            </div>
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left py-3 px-4 rounded-sm flex items-center justify-between text-base uppercase font-display tracking-widest transition-all ${
                  activeTab === item.id
                    ? 'text-brand-dark bg-accent-gold font-bold'
                    : 'text-white/80 hover:bg-white/5 hover:text-white'
                }`}
                style={{ contentVisibility: 'auto' }}
              >
                <span>{item.label}</span>
                <ChevronRight className={`h-4 w-4 ${activeTab === item.id ? 'text-brand-dark' : 'text-[#c5a880]'}`} />
              </button>
            ))}
          </div>

          <div className="border-t border-white/5 pt-6 mt-12 space-y-4">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenSurvey();
              }}
              className="w-full text-center py-4 bg-accent-gold text-brand-dark font-bold rounded-sm tracking-widest uppercase flex items-center justify-center space-x-2"
              style={{ minHeight: '44px' }}
            >
              <Phone className="h-4 w-4" />
              <span>MULAI SURVEY SEKARANG</span>
            </button>
            <div className="text-center">
              <p className="text-white/40 text-[10px] uppercase tracking-widest font-mono">Hubungi Layanan Sipil</p>
              <p className="text-accent-gold text-sm font-semibold mt-1 font-mono">{COMPANY_INFO.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
