import { useState } from 'react';
import { ArrowUpRight, CheckCircle2, X } from 'lucide-react';
import { SERVICES } from '../data';
import { ServiceItem } from '../types';

interface ServicesProps {
  onScrollToSurvey: () => void;
}

export default function Services({ onScrollToSurvey }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="layanan" className="py-20 md:py-28 bg-[#121212] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2">
            <span className="w-8 h-[1px] bg-accent-gold"></span>
            <span className="text-accent-gold text-xs font-bold tracking-widest uppercase font-mono">Layanan Premium Kami</span>
            <span className="w-8 h-[1px] bg-accent-gold"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-black tracking-tight uppercase leading-tight">
            Solusi Arsitektur &amp; Konstruksi Terpadu
          </h2>
          <p className="text-white/60 font-sans text-sm md:text-base max-w-2xl mx-auto">
            Dari sekadar ide konsep gambar kerja hingga perampungan fisik konstruksi kokoh berskala masif, kami mendampingi jalan Anda.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group bg-brand-charcoal border border-white/10 hover:border-accent-gold/40 transition-all duration-300 rounded-sm overflow-hidden flex flex-col justify-between"
              style={{ contentVisibility: 'auto' }}
            >
              <div>
                {/* Photo container */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 brightness-95"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-black/30 z-10" />
                  <div className="absolute top-4 right-4 bg-brand-dark/80 border border-white/20 text-accent-gold font-mono text-[11px] font-bold px-2 py-1 rounded-sm uppercase z-20">
                    Opsi 0{index + 1}
                  </div>
                </div>

                {/* Content body */}
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold uppercase tracking-tight text-white mb-2 group-hover:text-[#c5a880] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/65 text-sm leading-relaxed mb-6 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 2).map((feat, i) => (
                      <li key={i} className="flex items-center space-x-2 text-xs text-white/50">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#c5a880] flex-shrink-0" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action footer */}
              <div className="pb-6 px-6 pt-0 border-t border-white/5 mt-auto flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs uppercase font-bold text-accent-gold tracking-widest flex items-center space-x-2 group-hover:underline cursor-pointer"
                >
                  <span>Detail cakupan</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
                <div className="h-1.5 w-1.5 rounded-full bg-accent-gold group-hover:scale-150 transition-transform" />
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Detail Drawer Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-[#121212]/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-brand-charcoal border border-white/10 rounded-sm max-w-lg w-full overflow-hidden shadow-2xl relative animate-fadeIn">
            {/* Image top banner */}
            <div className="relative h-48 w-full">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal to-transparent" />
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 bg-[#121212]/80 p-2 text-white/80 hover:text-white rounded-full border border-white/10"
                aria-label="Tutup modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content area */}
            <div className="p-6 md:p-8 space-y-5">
              <h3 className="text-2xl font-display font-bold uppercase tracking-tight text-accent-gold">
                {selectedService.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed font-sans">
                {selectedService.longDescription}
              </p>

              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-white/40 mb-3 font-mono">
                  Paket Cakupan Kerja Terintegrasi:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-white/70">
                      <CheckCircle2 className="h-4 w-4 text-accent-gold flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    setSelectedService(null);
                    onScrollToSurvey();
                  }}
                  className="flex-1 text-center py-3 bg-accent-gold text-brand-dark hover:bg-accent-gold/90 font-bold uppercase text-xs tracking-wider rounded-sm transition-all cursor-pointer"
                >
                  Ajukan Survey Layanan Ini
                </button>
                <button
                  onClick={() => setSelectedService(null)}
                  className="flex-1 text-center py-3 border border-white/20 hover:bg-white/5 font-medium uppercase text-xs tracking-wider rounded-sm transition-all cursor-pointer"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
