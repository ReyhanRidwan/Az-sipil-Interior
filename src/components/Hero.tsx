import { motion } from 'motion/react';
import { Calculator, ClipboardCheck, Award, ThumbsUp, Sparkles, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data';

interface HeroProps {
  onScrollToRAB: () => void;
  onScrollToSurvey: () => void;
}

export default function Hero({ onScrollToRAB, onScrollToSurvey }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-[#121212] overflow-hidden pt-20">
      {/* Background Image with Rich Premium Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/az_hero_banner_1782216173445.jpg"
          alt="Premium Architecture Facade by AZ Sipil Interior"
          className="w-full h-full object-cover opacity-65 scale-105 transition-transform duration-10000 filter brightness-90 animate-subtle-zoom"
          referrerPolicy="no-referrer"
        />
        {/* Dynamic Multi-layered Vignette gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-[#121212]/30 z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col justify-center h-full">
        {/* Top Mini Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-accent-gold/20 border border-accent-gold/40 px-3 py-1.5 rounded-full mb-6 w-fit"
        >
          <Sparkles className="h-4 w-4 text-accent-gold animate-pulse" />
          <span className="text-white text-xs md:text-sm font-semibold tracking-widest uppercase font-display">
            {COMPANY_INFO.slogan}
          </span>
        </motion.div>

        {/* Hero Title and Description */}
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight uppercase"
          >
            Bangun & Renovasi <br />
            <span className="text-gold-gradient text-glow">Properti Anda</span> <br />
            Dengan <span className="underline decoration-accent-gold decoration-4 decoration-skip-ink">Tim Profesional</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-white/85 text-base md:text-lg lg:text-xl font-light leading-relaxed font-sans"
          >
            {COMPANY_INFO.description}
          </motion.p>
        </div>

        {/* Core CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-md sm:max-w-none"
        >
          <button
            onClick={onScrollToRAB}
            className="gold-gradient text-white font-bold tracking-widest uppercase px-8 py-4 rounded-sm shadow-lg hover:shadow-accent-gold/20 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center space-x-3 cursor-pointer"
            style={{ minHeight: '48px' }}
          >
            <Calculator className="h-5 w-5" />
            <span>Hitung Estimasi RAB</span>
          </button>

          <button
            onClick={onScrollToSurvey}
            className="bg-transparent text-white border border-white/30 hover:border-accent-gold/80 hover:bg-white/5 font-bold tracking-widest uppercase px-8 py-4 rounded-sm transition-all duration-300 flex items-center justify-center space-x-3 cursor-pointer"
            style={{ minHeight: '48px' }}
          >
            <ClipboardCheck className="h-5 w-5 text-accent-gold" />
            <span>Survey Proyek Gratis</span>
          </button>
        </motion.div>

        {/* Elite Trust Badges / Stats Panel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 border-t border-white/15 pt-8 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="flex items-start space-x-3">
            <div className="bg-accent-gold/10 p-2.5 rounded-sm border border-accent-gold/30">
              <Award className="h-6 w-6 text-accent-gold" />
            </div>
            <div>
              <p className="text-white font-mono text-2xl font-extrabold tracking-tight">120+</p>
              <p className="text-white/60 text-xs uppercase tracking-wider font-sans mt-0.5">Kompleks Proyek Selesai</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="bg-accent-gold/10 p-2.5 rounded-sm border border-accent-gold/30">
              <ThumbsUp className="h-6 w-6 text-accent-gold" />
            </div>
            <div>
              <p className="text-white font-mono text-2xl font-extrabold tracking-tight">100%</p>
              <p className="text-white/60 text-xs uppercase tracking-wider font-sans mt-0.5">Ketepatan Waktu Kerja</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="bg-accent-gold/10 p-2.5 rounded-sm border border-accent-gold/30">
              <Calculator className="h-6 w-6 text-accent-gold" />
            </div>
            <div>
              <p className="text-white font-mono text-2xl font-extrabold tracking-tight">Rp 0</p>
              <p className="text-white/60 text-xs uppercase tracking-wider font-sans mt-0.5">Biaya Siluman / Hidden Fees</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="bg-accent-gold/10 p-2.5 rounded-sm border border-accent-gold/30">
              <MapPin className="h-6 w-6 text-accent-gold" />
            </div>
            <div>
              <p className="text-white font-mono text-2xl font-extrabold tracking-tight">Jakarta</p>
              <p className="text-white/60 text-xs uppercase tracking-wider font-sans mt-0.5">Berbasis & Area Operasi</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative vertical construction line */}
      <div className="hidden lg:block absolute bottom-0 right-12 w-[1px] h-40 bg-gradient-to-t from-accent-gold to-transparent z-10 opacity-60" />
    </section>
  );
}
