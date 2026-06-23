import { useState, useEffect } from 'react';
import { Calculator, Hammer, ShieldAlert, ArrowRight, Layers, MapPin, Building2 } from 'lucide-react';
import { ProjectType, RABInput, RABResult } from '../types';

interface CalculatorRABProps {
  onContinueToSurvey: (prefilledData: {
    jenisProyek: string;
    luasArea: string;
    lokasiProyek: string;
  }) => void;
}

export default function CalculatorRAB({ onContinueToSurvey }: CalculatorRABProps) {
  const [projectType, setProjectType] = useState<ProjectType>('baru');
  const [luasBangunan, setLuasBangunan] = useState<number>(100);
  const [jumlahLantai, setJumlahLantai] = useState<number>(1);
  const [kualitasMaterial, setKualitasMaterial] = useState<RABInput['kualitasMaterial']>('medium');
  const [lokasiProyek, setLokasiProyek] = useState<string>('Jakarta');

  const [result, setResult] = useState<RABResult>({
    minCost: 0,
    maxCost: 0,
    durationMin: 0,
    durationMax: 0,
    costPerMeter: 0,
  });

  // Calculate live estimates based on input parameters
  useEffect(() => {
    // Base cost per square meter based on standard Indonesian construction indexes
    let baseMin = 4000000;
    let baseMax = 4800000;

    if (projectType === 'renovasi') {
      baseMin = 2200000;
      baseMax = 2800000;
    }

    // Material Quality multipliers
    let qualityMultiplier = 1.0;
    if (kualitasMaterial === 'standar') {
      qualityMultiplier = 0.9;
    } else if (kualitasMaterial === 'medium') {
      qualityMultiplier = 1.25; // around 5M - 6M
    } else if (kualitasMaterial === 'premium') {
      qualityMultiplier = 1.65; // around 6.5M - 8M
    } else if (kualitasMaterial === 'ultra_premium') {
      qualityMultiplier = 2.2; // around 9M - 11M
    }

    // Floor complexity multiplier
    // Additional floors require heavier reinforcement, deep footings
    let floorMultiplier = 1.0;
    if (jumlahLantai > 1) {
      floorMultiplier = 1.0 + (jumlahLantai - 1) * 0.12; // +12% cost per extra floor
    }

    const calculatedCostPerMeterMin = Math.round(baseMin * qualityMultiplier * floorMultiplier);
    const calculatedCostPerMeterMax = Math.round(baseMax * qualityMultiplier * floorMultiplier);

    const minCost = calculatedCostPerMeterMin * luasBangunan;
    const maxCost = calculatedCostPerMeterMax * luasBangunan;

    // Output duration calculations in months
    let durMin = 3;
    let durMax = 4;

    if (projectType === 'baru') {
      if (luasBangunan < 120) {
        durMin = 3;
        durMax = 5;
      } else if (luasBangunan < 250) {
        durMin = 5;
        durMax = 7;
      } else if (luasBangunan < 500) {
        durMin = 8;
        durMax = 11;
      } else {
        durMin = 12;
        durMax = 18;
      }
      // Add extra month per additional floor
      durMin += jumlahLantai - 1;
      durMax += jumlahLantai - 1;
    } else {
      // Renovations are generally faster
      if (luasBangunan < 100) {
        durMin = 1.5;
        durMax = 3;
      } else if (luasBangunan < 250) {
        durMin = 3;
        durMax = 5;
      } else {
        durMin = 5;
        durMax = 8;
      }
      durMin += (jumlahLantai - 1) * 0.5;
      durMax += (jumlahLantai - 1) * 0.5;
    }

    setResult({
      minCost,
      maxCost,
      durationMin: Math.max(1, durMin),
      durationMax: Math.max(2, durMax),
      costPerMeter: Math.round((calculatedCostPerMeterMin + calculatedCostPerMeterMax) / 2),
    });
  }, [projectType, luasBangunan, jumlahLantai, kualitasMaterial]);

  // Format money to Indonesian Rupiah (IDR)
  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(num);
  };

  const handleCreateLeadTransition = () => {
    // Scroll and Prefill Survey
    let IndonesianProjectType = '';
    if (projectType === 'baru') {
      IndonesianProjectType = 'Rumah Baru';
    } else {
      IndonesianProjectType = 'Renovasi Rumah';
    }
    
    onContinueToSurvey({
      jenisProyek: IndonesianProjectType,
      luasArea: `${luasBangunan} m²`,
      lokasiProyek: lokasiProyek,
    });
  };

  return (
    <section id="kalkulator-rab" className="py-20 md:py-28 bg-brand-charcoal text-white relative overflow-hidden">
      {/* Decorative Blueprint styling grids in background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#c5a880 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2">
            <span className="w-8 h-[1px] bg-accent-gold"></span>
            <span className="text-accent-gold text-xs font-bold tracking-widest uppercase font-mono">Simulasi Budget</span>
            <span className="w-8 h-[1px] bg-accent-gold"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-black tracking-tight uppercase leading-tight">
            Kalkulator RAB Mandiri
          </h2>
          <p className="text-white/60 text-sm md:text-base font-sans">
            Hitung estimasi awal kebutuhan renovasi atau pembangunan dari nol secara transparan sesuai harga material terkini tahun 2026.
          </p>
        </div>

        {/* Calculator Interactive Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Inputs Section (7 columns on desktop) */}
          <div className="lg:col-span-7 bg-brand-dark/90 border border-white/10 p-6 md:p-8 rounded-sm space-y-6 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-display font-bold uppercase tracking-widest text-accent-gold border-b border-white/5 pb-3 mb-6 flex items-center space-x-2">
                <Calculator className="h-5 w-5 text-accent-gold" />
                <span>Rincian Spesifikasi Proyek</span>
              </h3>

              <div className="space-y-6">
                {/* Jenis Proyek */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-3 font-mono">
                    Jenis Proyek
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setProjectType('baru')}
                      className={`py-3.5 px-4 rounded-sm border font-bold text-sm tracking-widest uppercase transition-all flex items-center justify-center space-x-2 cursor-pointer ${
                        projectType === 'baru'
                          ? 'bg-accent-gold text-brand-dark border-accent-gold'
                          : 'bg-transparent text-white/70 border-white/15 hover:bg-white/5'
                      }`}
                      style={{ minHeight: '44px' }}
                    >
                      <Building2 className="h-4 w-4" />
                      <span>Bangun Baru</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setProjectType('renovasi')}
                      className={`py-3.5 px-4 rounded-sm border font-bold text-sm tracking-widest uppercase transition-all flex items-center justify-center space-x-2 cursor-pointer ${
                        projectType === 'renovasi'
                          ? 'bg-accent-gold text-brand-dark border-accent-gold'
                          : 'bg-transparent text-white/70 border-white/15 hover:bg-white/5'
                      }`}
                      style={{ minHeight: '44px' }}
                    >
                      <Hammer className="h-4 w-4" />
                      <span>Renovasi</span>
                    </button>
                  </div>
                </div>

                {/* Luas Bangunan Slider & Input */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/50 font-mono">
                      Luas Bangunan (m²)
                    </label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="number"
                        min="20"
                        max="2000"
                        value={luasBangunan}
                        onChange={(e) => setLuasBangunan(Math.max(1, parseInt(e.target.value) || 0))}
                        className="bg-brand-charcoal text-white font-mono text-sm font-bold border border-white/10 px-3 py-1.5 rounded-sm w-24 text-right focus:border-accent-gold focus:outline-none"
                      />
                      <span className="text-xs font-mono text-white/40">m²</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="1000"
                    value={luasBangunan > 1000 ? 1000 : luasBangunan}
                    onChange={(e) => setLuasBangunan(parseInt(e.target.value))}
                    className="w-full accent-accent-gold h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-white/40 font-mono mt-1">
                    <span>20 m²</span>
                    <span>500 m²</span>
                    <span>1.000 m² +</span>
                  </div>
                </div>

                {/* Jumlah Lantai & Lokasi Proyek Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Jumlah Lantai */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-2 font-mono">
                      Jumlah Lantai
                    </label>
                    <div className="relative">
                      <select
                        value={jumlahLantai}
                        onChange={(e) => setJumlahLantai(parseInt(e.target.value))}
                        className="w-full bg-brand-charcoal border border-white/10 p-3 text-sm text-white rounded-sm focus:border-accent-gold focus:outline-none focus:ring-1 focus:ring-accent-gold"
                        style={{ minHeight: '44px' }}
                      >
                        <option value={1}>1 Lantai (Standar rumah / ruko)</option>
                        <option value={2}>2 Lantai (Mulai beton bertulang)</option>
                        <option value={3}>3 Lantai (Struktur kokoh medium)</option>
                        <option value={4}>4 Lantai (Struktur kokoh berat)</option>
                      </select>
                      <Layers className="absolute right-3 top-3 h-4 w-4 text-white/40 pointer-events-none" />
                    </div>
                  </div>

                  {/* Lokasi Proyek */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-2 font-mono">
                      Lokasi Proyek
                    </label>
                    <div className="relative">
                      <select
                        value={lokasiProyek}
                        onChange={(e) => setLokasiProyek(e.target.value)}
                        className="w-full bg-brand-charcoal border border-white/10 p-3 text-sm text-white rounded-sm focus:border-accent-gold focus:outline-none focus:ring-1 focus:ring-accent-gold"
                        style={{ minHeight: '44px' }}
                      >
                        <option value="Jakarta Jakarta">DKI Jakarta</option>
                        <option value="Tangerang">Tangerang / BSD</option>
                        <option value="Bekasi">Bekasi</option>
                        <option value="Depok">Depok</option>
                        <option value="Bogor">Bogor</option>
                        <option value="Luar Jabodetabek">Luar Jabodetabek</option>
                      </select>
                      <MapPin className="absolute right-3 top-3 h-4 w-4 text-white/40 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Kualitas Material */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-3 font-mono">
                    Grup Kategori Material
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { key: 'standar', label: 'Standar', cost: 'Rp 4jt+' },
                      { key: 'medium', label: 'Medium', cost: 'Rp 5jt+' },
                      { key: 'premium', label: 'Premium', cost: 'Rp 6jt+' },
                      { key: 'ultra_premium', label: 'Ultra', cost: 'Rp 8jt+' },
                    ].map((mat) => (
                      <button
                        key={mat.key}
                        type="button"
                        onClick={() => setKualitasMaterial(mat.key as RABInput['kualitasMaterial'])}
                        className={`p-3 rounded-sm border transition-all text-center flex flex-col justify-center cursor-pointer ${
                          kualitasMaterial === mat.key
                            ? 'bg-accent-gold/20 text-accent-gold border-accent-gold'
                            : 'bg-brand-charcoal text-white/60 border-white/5 hover:bg-white/5'
                        }`}
                        style={{ minHeight: '44px' }}
                      >
                        <span className="text-xs uppercase font-bold tracking-wider">{mat.label}</span>
                        <span className="text-[10px] font-mono opacity-60 mt-0.5">{mat.cost}/m²</span>
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-8 bg-brand-charcoal border border-white/5 p-4 rounded-sm flex items-start space-x-3 text-xs text-white/60">
              <ShieldAlert className="h-5 w-5 text-accent-gold shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong className="text-white">DISCLAIMER:</strong> Hasil kalkulasi ini didasarkan pada patokan indeks biaya rata-rata material dan upah kerja Sipil AZ per Q1-Q2 2026. Angka ini hanya merupakan estimasi awal. Survey lapangan fisik serta konsultasi gambar kerja mandiri bersifat wajib untuk menghasilkan RAB Final termutakhir.
              </p>
            </div>
          </div>

          {/* Outputs Section (5 columns on desktop) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-brand-charcoal to-brand-dark border border-accent-gold/30 p-6 md:p-8 rounded-sm rounded-r-lg flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="space-y-6">
              <div className="text-center sm:text-left">
                <span className="text-accent-gold uppercase font-mono text-[10px] tracking-widest font-extrabold bg-accent-gold/10 px-2.5 py-1 rounded-sm">
                  Hasil Estimasi Awal
                </span>
                <h3 className="text-xl font-display font-black uppercase tracking-tight text-white mt-3">
                  Pagu Estimasi RAB Anda
                </h3>
              </div>

              {/* Min Max Cost display card */}
              <div className="bg-brand-dark/80 p-5 rounded-sm border border-white/5 space-y-4 shadow-inner">
                <div>
                  <span className="text-white/40 uppercase font-mono text-[10px] tracking-widest block">Rerata Per Meter</span>
                  <span className="text-white font-mono text-lg font-bold">
                    {formatRupiah(result.costPerMeter)} <span className="text-xs text-white/40">/ m²</span>
                  </span>
                </div>
                
                <div className="border-t border-white/5 pt-4 space-y-2">
                  <span className="text-white/40 uppercase font-mono text-[10px] tracking-widest block">Total Kisaran Investasi</span>
                  <div className="space-y-1">
                    <div className="text-white font-mono text-[11px] uppercase tracking-wider flex justify-between">
                      <span>Estimasi Minimum:</span>
                      <span className="font-bold text-white/90">{formatRupiah(result.minCost)}</span>
                    </div>
                    <div className="text-accent-gold font-mono text-[11px] uppercase tracking-wider flex justify-between">
                      <span>Estimasi Maksimum:</span>
                      <span className="font-extrabold text-accent-gold">{formatRupiah(result.maxCost)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Estimate Duration */}
              <div className="bg-brand-dark/80 p-5 rounded-sm border border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-white/40 uppercase font-mono text-[10px] tracking-widest block">Estimasi Durasi Kerja</span>
                  <span className="text-white font-display text-xl sm:text-2xl font-black mt-1 uppercase">
                    {result.durationMin} s/d {result.durationMax} BULAN
                  </span>
                </div>
                <div className="h-10 w-10 bg-accent-gold/10 rounded-sm border border-accent-gold/20 flex items-center justify-center font-mono font-bold text-accent-gold text-sm">
                  {Math.round((result.durationMin + result.durationMax) * 15)}d
                </div>
              </div>

              {/* Highlight of included perks */}
              <div className="space-y-2">
                <span className="text-white/40 uppercase font-mono text-[10px] tracking-widest block">Paket Sudah Termasuk:</span>
                <div className="grid grid-cols-2 gap-2 text-xs text-white/70">
                  <span>✓ Upah Tukang Ahli</span>
                  <span>✓ Material Struktur</span>
                  <span>✓ Pengawasan Arsitek</span>
                  <span>✓ Garansi Pemeliharaan</span>
                </div>
              </div>
            </div>

            {/* High Conversion CTA to unlock final survey */}
            <div className="mt-8 pt-6 border-t border-white/5">
              <p className="text-xs text-white/50 text-center mb-4">
                Sudah sesuai budget? Kunci penawaran harga ini &amp; jadwalkan survey gratis.
              </p>
              <button
                onClick={handleCreateLeadTransition}
                className="w-full text-center py-4 bg-accent-gold text-brand-dark hover:bg-white hover:text-brand-dark font-extrabold tracking-widest uppercase text-xs sm:text-sm rounded-sm transition-all gold-glow flex items-center justify-center space-x-2 cursor-pointer"
                style={{ minHeight: '48px' }}
              >
                <span>Lanjutkan Survey Proyek</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
