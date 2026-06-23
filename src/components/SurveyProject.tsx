import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  PhoneCall,
  FileCheck2,
  User,
  MapPin,
  ClipboardCheck,
  CircleDollarSign,
  CalendarDays,
  Hammer
} from 'lucide-react';
import { SurveyState } from '../types';
import { COMPANY_INFO } from '../data';

interface SurveyProjectProps {
  prefilledData: {
    jenisProyek: string;
    luasArea: string;
    lokasiProyek: string;
  } | null;
  onClearPrefilled: () => void;
}

const INITIAL_STATE: SurveyState = {
  step: 1,
  jenisProyek: '',
  luasArea: '',
  lokasiProyek: '',
  budget: '',
  targetMulai: '',
  nama: '',
  waNumber: '',
};

export default function SurveyProject({ prefilledData, onClearPrefilled }: SurveyProjectProps) {
  const [survey, setSurvey] = useState<SurveyState>(INITIAL_STATE);
  const [submitted, setSubmitted] = useState(false);

  // Apply pre-filled data from RAB Calculator
  useEffect(() => {
    if (prefilledData) {
      setSurvey((prev) => ({
        ...prev,
        jenisProyek: prefilledData.jenisProyek,
        luasArea: prefilledData.luasArea,
        lokasiProyek: prefilledData.lokasiProyek,
        // Start them on step 4 (Budget) so they don't have to repeat inputs!
        step: 4,
      }));
      // Smooth scroll to the survey section
      const surveyEl = document.getElementById('survey-proyek');
      if (surveyEl) {
        surveyEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [prefilledData]);

  const handleReset = () => {
    setSurvey(INITIAL_STATE);
    setSubmitted(false);
    onClearPrefilled();
  };

  const handleNext = () => {
    // Basic validation before going to next step
    if (survey.step === 1 && !survey.jenisProyek) return;
    if (survey.step === 2 && !survey.luasArea.trim()) return;
    if (survey.step === 3 && !survey.lokasiProyek.trim()) return;
    if (survey.step === 4 && !survey.budget) return;
    if (survey.step === 5 && !survey.targetMulai) return;
    if (survey.step === 6 && !survey.nama.trim()) return;
    if (survey.step === 7 && !survey.waNumber.trim()) return;

    if (survey.step < 7) {
      setSurvey((prev) => ({ ...prev, step: prev.step + 1 }));
    } else {
      setSubmitted(true);
    }
  };

  const handlePrev = () => {
    if (survey.step > 1) {
      setSurvey((prev) => ({ ...prev, step: prev.step - 1 }));
    }
  };

  const selectOption = (field: keyof SurveyState, value: string) => {
    setSurvey((prev) => ({ ...prev, [field]: value }));
  };

  // Compile WhatsApp link string
  const getWhatsAppLink = () => {
    const textMessage = `Halo AZ Sipil Interior,

Saya sudah mengisi survey proyek.

Nama:
${survey.nama}

Jenis Proyek:
${survey.jenisProyek}

Lokasi:
${survey.lokasiProyek}

Luas:
${survey.luasArea}

Budget:
${survey.budget}

Target Mulai:
${survey.targetMulai}

Hubungi saya di nomor WA: ${survey.waNumber}

Mohon konsultasi lebih lanjut.`;

    const encodedMessage = encodeURIComponent(textMessage);
    return `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodedMessage}`;
  };

  // Total steps definition
  const totalSteps = 7;
  const progressPercentage = Math.round((survey.step / totalSteps) * 100);

  // Step choices options
  const jenisProyekOptions = [
    'Rumah Baru',
    'Renovasi Rumah',
    'Interior Rumah',
    'Kantor',
    'Ruko',
    'Gudang',
    'Lainnya',
  ];

  const budgetOptions = [
    '< 100 Juta',
    '100 - 300 Juta',
    '300 - 500 Juta',
    '500 Juta - 1 Miliar',
    '> 1 Miliar',
  ];

  const targetMulaiOptions = [
    'Secepatnya',
    '1 Bulan',
    '3 Bulan',
    '6 Bulan',
  ];

  return (
    <section id="survey-proyek" className="py-20 md:py-28 bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2">
            <span className="w-8 h-[1px] bg-accent-gold"></span>
            <span className="text-accent-gold text-xs font-bold tracking-widest uppercase font-mono">Lead Qualification</span>
            <span className="w-8 h-[1px] bg-accent-gold"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-black tracking-tight text-brand-dark uppercase leading-tight">
            Survey Kualifikasi Proyek
          </h2>
          <p className="text-gray-500 font-sans text-sm md:text-base">
            Isi survey kualifikasi 7-langkah di bawah untuk mendapatkan kalkulasi matang arsitek kami secara gratis sebelum melanjutkan konsultasi langsung ke WhatsApp.
          </p>
        </div>

        {/* Survey Wizard Card */}
        <div className="bg-[#f8f9fa] border border-gray-200 p-6 md:p-10 rounded-sm shadow-xl relative min-h-[460px] flex flex-col justify-between">
          
          {!submitted ? (
            <>
              {/* Top Progress Indicators */}
              <div className="space-y-3 mb-8">
                <div className="flex justify-between items-center text-xs text-gray-400 font-mono">
                  <span className="uppercase tracking-widest font-bold text-accent-gold">Langkah {survey.step} dari {totalSteps}</span>
                  <span className="font-bold">{progressPercentage}% Selesai</span>
                </div>
                {/* Progress bar and dots */}
                <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full gold-gradient transition-all duration-300 ease-out"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
              </div>

              {/* Steps Body with Interactive Transition */}
              <div className="flex-1">
                <AnimatePresence mode="wait">
                  {survey.step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <h3 className="text-lg md:text-xl font-display font-bold text-brand-dark uppercase tracking-tight flex items-center space-x-2">
                        <Hammer className="h-5 w-5 text-accent-gold" />
                        <span>Langkah 1: Pilih Jenis Proyek Anda</span>
                      </h3>
                      <p className="text-xs text-gray-500 font-sans">
                        Sila pilih salah satu klasifikasi proyek yang paling mendekati deskripsi impian properti Anda.
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        {jenisProyekOptions.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => selectOption('jenisProyek', opt)}
                            className={`p-4 text-left font-semibold text-sm tracking-wide rounded-sm border uppercase transition-all flex items-center justify-between cursor-pointer ${
                              survey.jenisProyek === opt
                                ? 'bg-accent-gold text-brand-dark border-accent-gold shadow-md font-bold'
                                : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100'
                            }`}
                            style={{ minHeight: '52px' }}
                          >
                            <span>{opt}</span>
                            {survey.jenisProyek === opt && <CheckCircle className="h-5 w-5 text-brand-dark" />}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {survey.step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <h3 className="text-lg md:text-xl font-display font-bold text-brand-dark uppercase tracking-tight flex items-center space-x-2">
                        <ClipboardCheck className="h-5 w-5 text-accent-gold" />
                        <span>Langkah 2: Luas Estimasi Area (m²)</span>
                      </h3>
                      <p className="text-xs text-gray-500 font-sans">
                        Tulis perkiraan luas area yang akan dibangun, direnovasi, atau ditata interiornya.
                      </p>
                      
                      <div className="pt-4 max-w-md">
                        <div className="relative">
                          <input
                            type="text"
                            value={survey.luasArea}
                            onChange={(e) => selectOption('luasArea', e.target.value)}
                            placeholder="Contoh: 120 m² atau 12m x 10m"
                            className="w-full bg-white border border-gray-305 text-gray-700 px-4 py-4 rounded-sm focus:border-accent-gold focus:outline-none font-sans font-medium text-lg placeholder-gray-400"
                            style={{ minHeight: '52px' }}
                            required
                          />
                          <span className="absolute right-4 top-4 text-xs font-mono text-gray-400 font-bold uppercase">Luas</span>
                        </div>
                        <p className="text-[10px] text-gray-400 mt-2">
                          Silahkan gunakan satuan m² (meter persegi) demi memudahkan perhitungan awal.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {survey.step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <h3 className="text-lg md:text-xl font-display font-bold text-brand-dark uppercase tracking-tight flex items-center space-x-2">
                        <MapPin className="h-5 w-5 text-accent-gold" />
                        <span>Langkah 3: Lokasi Rencana Proyek</span>
                      </h3>
                      <p className="text-xs text-gray-500 font-sans">
                        Di kota, daerah, atau perumahan mana lokasi rencana pengerjaan fisik proyek Anda?
                      </p>
                      
                      <div className="pt-4 max-w-md">
                        <div className="relative">
                          <input
                            type="text"
                            value={survey.lokasiProyek}
                            onChange={(e) => selectOption('lokasiProyek', e.target.value)}
                            placeholder="Contoh: Jl Raya Puri Indah, Jakarta Barat"
                            className="w-full bg-white border border-gray-305 text-gray-700 px-4 py-4 rounded-sm focus:border-accent-gold focus:outline-none font-sans font-medium text-base placeholder-gray-400"
                            style={{ minHeight: '52px' }}
                            required
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {survey.step === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <h3 className="text-lg md:text-xl font-display font-bold text-brand-dark uppercase tracking-tight flex items-center space-x-2">
                        <CircleDollarSign className="h-5 w-5 text-accent-gold" />
                        <span>Langkah 4: Berapa Alokasi Budget Proyek?</span>
                      </h3>
                      <p className="text-xs text-gray-500 font-sans">
                        Kami menjunjung tinggi azas kejujuran anggaran guna menyesuaikan tingkat material serta efisiensi rancangan arsitek.
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        {budgetOptions.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => selectOption('budget', opt)}
                            className={`p-4 text-left font-semibold text-sm tracking-wide rounded-sm border uppercase transition-all flex items-center justify-between cursor-pointer ${
                              survey.budget === opt
                                ? 'bg-accent-gold text-brand-dark border-accent-gold shadow-md font-bold'
                                : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100'
                            }`}
                            style={{ minHeight: '52px' }}
                          >
                            <span>{opt}</span>
                            {survey.budget === opt && <CheckCircle className="h-5 w-5 text-brand-dark" />}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {survey.step === 5 && (
                    <motion.div
                      key="step5"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <h3 className="text-lg md:text-xl font-display font-bold text-brand-dark uppercase tracking-tight flex items-center space-x-2">
                        <CalendarDays className="h-5 w-5 text-accent-gold" />
                        <span>Langkah 5: Kapan Target Mulai Pengerjaan?</span>
                      </h3>
                      <p className="text-xs text-gray-500 font-sans">
                        Informasi linimasa pengerjaan akan kami korelasi ke ketersediaan kru konstruksi serta durasi persetujuan IMB/PBG.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-3 pt-2">
                        {targetMulaiOptions.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => selectOption('targetMulai', opt)}
                            className={`p-4 text-center font-semibold text-xs sm:text-sm tracking-widest rounded-sm border uppercase transition-all flex flex-col justify-center cursor-pointer ${
                              survey.targetMulai === opt
                                ? 'bg-accent-gold text-brand-dark border-accent-gold shadow-md font-bold'
                                : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100'
                            }`}
                            style={{ minHeight: '52px' }}
                          >
                            <span>{opt}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {survey.step === 6 && (
                    <motion.div
                      key="step6"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <h3 className="text-lg md:text-xl font-display font-bold text-brand-dark uppercase tracking-tight flex items-center space-x-2">
                        <User className="h-5 w-5 text-accent-gold" />
                        <span>Langkah 6: Siapa Nama Anda?</span>
                      </h3>
                      <p className="text-xs text-gray-500 font-sans">
                        Guna menyapa secara sopan dan mempersonalisasikan draf proposal penawaran resmi kami.
                      </p>
                      
                      <div className="pt-4 max-w-md">
                        <div className="relative">
                          <input
                            type="text"
                            value={survey.nama}
                            onChange={(e) => selectOption('nama', e.target.value)}
                            placeholder="Contoh: Pak Rahmad Wijaya"
                            className="w-full bg-white border border-gray-305 text-gray-700 px-4 py-4 rounded-sm focus:border-accent-gold focus:outline-none font-sans font-medium text-base"
                            style={{ minHeight: '52px' }}
                            required
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {survey.step === 7 && (
                    <motion.div
                      key="step7"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <h3 className="text-lg md:text-xl font-display font-bold text-brand-dark uppercase tracking-tight flex items-center space-x-2">
                        <PhoneCall className="h-5 w-5 text-accent-gold" />
                        <span>Langkah 7: Nomor WhatsApp Aktif</span>
                      </h3>
                      <p className="text-xs text-gray-500 font-sans">
                        Nomor ini digunakan untuk mengirimkan kesimpulan kualifikasi arsitek, dan mengirim rangkuman kalkulasi RAB.
                      </p>
                      
                      <div className="pt-4 max-w-md">
                        <div className="relative">
                          <input
                            type="tel"
                            value={survey.waNumber}
                            onChange={(e) => selectOption('waNumber', e.target.value)}
                            placeholder="Contoh: 08129279XXXX"
                            className="w-full bg-white border border-gray-305 text-gray-700 px-4 py-4 rounded-sm focus:border-accent-gold focus:outline-none font-mono font-medium text-base"
                            style={{ minHeight: '52px' }}
                            required
                          />
                        </div>
                        <p className="text-[10px] text-gray-400 mt-2 font-mono">
                          Format: Mulai dengan angka 0 atau kode negara +62.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Steps navigation footer */}
              <div className="flex justify-between items-center pt-8 border-t border-gray-200 mt-8">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={survey.step === 1}
                  className={`px-5 py-3 border rounded-sm font-semibold text-xs uppercase tracking-widest flex items-center space-x-2 transition-all ${
                    survey.step === 1
                      ? 'text-gray-300 border-gray-200 cursor-not-allowed'
                      : 'text-gray-700 border-gray-300 hover:bg-gray-100 cursor-pointer'
                  }`}
                  style={{ minHeight: '44px' }}
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>KEMBALI</span>
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-3 bg-brand-dark text-white hover:bg-accent-gold hover:text-brand-dark font-extrabold text-xs uppercase tracking-widest flex items-center space-x-2 transition-all cursor-pointer"
                  style={{ minHeight: '44px' }}
                >
                  <span>{survey.step === 7 ? 'LIHAT RINGKASAN & KIRIM' : 'LANJUT'}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </>
          ) : (
            /* Submission Summary Section with High Conversion WhatsApp trigger */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="text-center space-y-6 flex flex-col justify-between h-full py-2"
            >
              <div className="space-y-3">
                <div className="h-16 w-16 bg-accent-gold/15 border border-accent-gold/30 rounded-full flex items-center justify-center mx-auto mb-2">
                  <FileCheck2 className="h-8 w-8 text-accent-gold shrink-0" />
                </div>
                <h3 className="text-2xl font-display font-black text-brand-dark uppercase tracking-tight">
                  Kualifikasi Survey Selesai!
                </h3>
                <p className="text-gray-500 text-sm max-w-lg mx-auto leading-relaxed">
                  Terima kasih, <strong className="text-brand-dark">{survey.nama}</strong>. Data Anda telah terekam di sistem AZ Sipil Interior untuk diverifikasi oleh tim penaksir biaya (estimator) kami.
                </p>
              </div>

              {/* Structured Specifications Summary Table */}
              <div className="max-w-md mx-auto w-full bg-white border border-gray-200 rounded-sm p-5 space-y-3 text-left shadow-inner">
                <h4 className="text-xs uppercase tracking-widest font-bold text-gray-400 font-mono border-b border-gray-150 pb-2 mb-2">
                  Rangkuman Spesifikasi Anda:
                </h4>
                <div className="grid grid-cols-2 gap-y-2 text-xs">
                  <span className="text-gray-500 font-mono">Nama Pemohon:</span>
                  <span className="font-bold text-brand-dark text-right">{survey.nama}</span>

                  <span className="text-gray-500 font-mono">Jenis Proyek:</span>
                  <span className="font-bold text-brand-dark text-right uppercase">{survey.jenisProyek}</span>

                  <span className="text-gray-500 font-mono">Rencana Lokasi:</span>
                  <span className="font-bold text-brand-dark text-right">{survey.lokasiProyek}</span>

                  <span className="text-gray-500 font-mono">Estimasi Luas Area:</span>
                  <span className="font-bold text-brand-dark text-right font-mono">{survey.luasArea}</span>

                  <span className="text-gray-500 font-mono">Alokasi Budget:</span>
                  <span className="font-bold text-accent-gold text-right uppercase">{survey.budget}</span>

                  <span className="text-gray-500 font-mono">Target Konstruksi:</span>
                  <span className="font-bold text-brand-dark text-right uppercase">{survey.targetMulai}</span>
                </div>
              </div>

              {/* The final submit action to WhatsApp */}
              <div className="space-y-4 max-w-md mx-auto w-full">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-4 bg-[#25D366] text-white hover:bg-green-600 font-extrabold tracking-widest uppercase text-sm rounded-sm transition-all shadow-lg flex items-center justify-center space-x-3 cursor-pointer"
                  style={{ minHeight: '52px' }}
                >
                  <PhoneCall className="h-5 w-5 fill-white shrink-0" />
                  <span>KIRIM KE WHATSAPP KONSULTAN</span>
                </a>

                <div className="flex justify-center space-x-3">
                  <button
                    onClick={handleReset}
                    className="text-[11px] font-bold text-gray-500 hover:text-brand-dark underline uppercase tracking-wider font-mono cursor-pointer"
                  >
                    Ulangi Survey
                  </button>
                  <span className="text-gray-300">|</span>
                  <span className="text-[11px] font-mono text-gray-400 uppercase">Akurasi Valid</span>
                </div>
              </div>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
}
