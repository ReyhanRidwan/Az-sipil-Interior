import { motion } from 'motion/react';
import { Shield, Sparkles, Clock, Coins, Flame, CheckCircle, Eye } from 'lucide-react';
import { COMPANY_INFO, VISI, MISI, KEUNGGULAN } from '../data';

export default function About() {
  const icons = [
    <Shield className="h-6 w-6 text-accent-gold" />,
    <Clock className="h-6 w-6 text-accent-gold" />,
    <Coins className="h-6 w-6 text-accent-gold" />,
    <Flame className="h-6 w-6 text-accent-gold" />,
    <CheckCircle className="h-6 w-6 text-accent-gold" />,
    <Eye className="h-6 w-6 text-accent-gold" />,
  ];

  return (
    <section id="tentang-kami" className="py-20 md:py-28 bg-[#f8f9fa] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Profile Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Column 1: Intro Text with brand highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-2">
              <span className="w-10 h-[1.5px] bg-[#c5a880]"></span>
              <span className="text-[#a78a63] text-xs font-semibold tracking-widest uppercase font-mono">Profile Perusahaan</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-black tracking-tight text-[#1c1c1c] uppercase leading-tight">
              AZ SIPIL INTERIOR
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed font-sans">
              {COMPANY_INFO.description}
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              {COMPANY_INFO.detailedDescription}
            </p>

            {/* Visi Statement in a high-light block */}
            <div className="mt-8 bg-white border-l-4 border-accent-gold p-6 rounded-r-md shadow-sm border border-gray-100">
              <h4 className="text-xs uppercase tracking-widest font-bold text-accent-gold font-mono flex items-center space-x-2 mb-2">
                <Sparkles className="h-4 w-4" />
                <span>Visi Utama Kami</span>
              </h4>
              <p className="text-gray-800 font-medium italic text-base">
                "{VISI}"
              </p>
            </div>
          </div>

          {/* Column 2: Misi List in modern card layout */}
          <div className="lg:col-span-5 bg-brand-charcoal text-white p-8 rounded-sm shadow-xl border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent-gold/5 rounded-full blur-2xl"></div>
            
            <h3 className="text-xl font-display font-bold tracking-widest uppercase text-accent-gold border-b border-white/10 pb-4 mb-6">
              Misi Perusahaan
            </h3>
            
            <ul className="space-y-5">
              {MISI.map((item, index) => (
                <li key={index} className="flex items-start space-x-3" style={{ contentVisibility: 'auto' }}>
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-accent-gold/20 flex items-center justify-center border border-accent-gold/40 mt-1">
                    <span className="text-accent-gold font-mono text-xs font-bold">{index + 1}</span>
                  </div>
                  <p className="text-white/85 text-sm leading-relaxed font-sans font-light">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Keunggulan (Advantages) Grid Header */}
        <div className="mt-24 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2">
            <span className="w-6 h-[1px] bg-[#c5a880]"></span>
            <span className="text-accent-gold text-xs font-bold tracking-widest uppercase font-mono">Why AZ Sipil Interior</span>
            <span className="w-6 h-[1px] bg-[#c5a880]"></span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-black tracking-tight text-brand-dark uppercase">
            6 Pilar Keunggulan Utama Kami
          </h3>
          <p className="text-gray-500 font-sans text-sm md:text-base max-w-2xl mx-auto">
            Komitmen kami untuk memberikan kualitas terbaik di setiap jengkal ruang bangunan dengan transparansi terjamin.
          </p>
        </div>

        {/* Keunggulan Grid Panels */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {KEUNGGULAN.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-sm border border-gray-200/80 hover:border-accent-gold transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
              style={{ contentVisibility: 'auto' }}
            >
              <div>
                <div className="h-12 w-12 rounded-sm bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center mb-5">
                  {icons[idx] || <Shield className="h-6 w-6 text-accent-gold" />}
                </div>
                <h4 className="text-lg font-display font-bold text-brand-dark uppercase tracking-tight mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-accent-gold uppercase font-semibold font-mono tracking-wider">
                <span>Standar AZ</span>
                <span>Verified ✓</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
