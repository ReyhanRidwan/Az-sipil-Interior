import { useState } from 'react';
import { PORTFOLIOS } from '../data';
import { Eye, MapPin, Ruler, Calendar, ArrowRight } from 'lucide-react';

interface PortfolioProps {
  onScrollToSurvey: () => void;
}

export default function Portfolio({ onScrollToSurvey }: PortfolioProps) {
  const [filter, setFilter] = useState('all');

  const categories = [
    { label: 'Semua Proyek', id: 'all' },
    { label: 'Sipil / Konstruksi', id: 'Konstruksi Bangunan' },
    { label: 'Renovasi', id: 'Renovasi & Remodeling' },
    { label: 'Interior Design', id: 'Desain Interior' }
  ];

  const filteredPortfolios = filter === 'all'
    ? PORTFOLIOS
    : PORTFOLIOS.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-[#f8f9fa] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center space-x-2">
              <span className="w-10 h-[1.5px] bg-[#c5a880]"></span>
              <span className="text-[#a78a63] text-xs font-semibold tracking-widest uppercase font-mono">Galeri Portofolio</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-black tracking-tight text-brand-dark uppercase">
              Karya Konstruksi &amp; Seni Tata Ruang
            </h2>
            <p className="text-gray-500 font-sans text-sm md:text-base">
              Menampilkan portofolio terseleksi kami yang mencerminkan integrasi matang teknik sipil kokoh dan keindahan detail interior.
            </p>
          </div>

          {/* Filtering buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 text-xs md:text-sm font-semibold uppercase tracking-wider rounded-sm transition-all cursor-pointer ${
                  filter === cat.id
                    ? 'bg-brand-dark text-white shadow-md'
                    : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200'
                }`}
                style={{ contentVisibility: 'auto' }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolios Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredPortfolios.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200/80 rounded-sm overflow-hidden group hover:shadow-xl transition-all duration-300"
              style={{ contentVisibility: 'auto' }}
            >
              
              {/* Photo representation */}
              <div className="relative h-64 sm:h-76 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                {/* Floating Location and Category indicators */}
                <div className="absolute top-4 left-4 bg-accent-gold text-brand-dark font-mono text-[10px] font-bold tracking-widest px-2.5 py-1 uppercase rounded-sm z-10 shadow-sm">
                  {item.category}
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 text-white z-10 flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-accent-gold" />
                  <span className="text-xs uppercase font-semibold font-mono tracking-wider">{item.location}</span>
                </div>
              </div>

              {/* Specs and Details */}
              <div className="p-6 md:p-8 space-y-4">
                <h3 className="text-xl md:text-2xl font-display font-bold text-[#1c1c1c] uppercase tracking-tight group-hover:text-accent-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Compact Technical Specs Table */}
                <div className="grid grid-cols-3 gap-2 bg-[#f8f9fa] p-3 rounded-sm border border-gray-100">
                  <div className="text-center border-r border-gray-200">
                    <span className="text-[10px] text-gray-400 block uppercase tracking-wider font-mono">Luas Area</span>
                    <span className="text-xs font-bold text-gray-800 flex items-center justify-center space-x-1 mt-1 font-mono">
                      <Ruler className="h-3 w-3 text-accent-gold" />
                      <span>{item.specs.luas}</span>
                    </span>
                  </div>
                  <div className="text-center border-r border-gray-200">
                    <span className="text-[10px] text-gray-400 block uppercase tracking-wider font-mono">Durasi</span>
                    <span className="text-xs font-bold text-gray-800 flex items-center justify-center space-x-1 mt-1 font-mono">
                      <Calendar className="h-3 w-3 text-accent-gold" />
                      <span>{item.specs.durasi}</span>
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="text-[10px] text-gray-400 block uppercase tracking-wider font-mono">Spesifikasi</span>
                    <span className="text-xs font-bold text-accent-gold block uppercase tracking-wider font-mono truncate mt-1">
                      {item.specs.biaya}
                    </span>
                  </div>
                </div>

                {/* CTA click indicator */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={onScrollToSurvey}
                    className="text-xs font-bold text-[#a78a63] group-hover:text-amber-700 tracking-wider uppercase flex items-center space-x-1 cursor-pointer"
                  >
                    <span>Ajukan Konsultasi Seperti Ini</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-[10px] font-mono text-gray-400">ID: AZ-{item.id.toUpperCase()}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Global Portfolio Call to action */}
        <div className="mt-16 bg-[#1c1c1c] p-6 sm:p-8 rounded-sm text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 border-l-4 border-accent-gold">
          <div>
            <h4 className="text-xl font-display font-bold text-white uppercase tracking-tight">
              Ingin Mewujudkan Bangunan Impian Anda?
            </h4>
            <p className="text-white/60 text-xs sm:text-sm mt-1 max-w-xl font-sans">
              Mari berkolaborasi bersama tim arsitek dan insinyur kami untuk merancang RAB yang akurat dan desain 3D gratis untuk proyek Anda.
            </p>
          </div>
          <button
            onClick={onScrollToSurvey}
            className="w-full sm:w-auto gold-gradient text-white text-xs md:text-sm font-bold tracking-widest px-6 py-3.5 rounded-sm uppercase cursor-pointer"
          >
            Mulai Hitung RAB &amp; Survey
          </button>
        </div>

      </div>
    </section>
  );
}
