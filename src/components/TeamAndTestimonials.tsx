import { useState } from 'react';
import { FAQS, TESTIMONIALS } from '../data';
import { Star, MessageSquareQuote, ChevronDown, ChevronUp, Clock, HelpCircle } from 'lucide-react';

export default function TeamAndTestimonials() {
  const [openFaq, setOpenFaq] = useState<string | null>('f1');

  const toggleFaq = (id: string) => {
    if (openFaq === id) {
      setOpenFaq(null);
    } else {
      setOpenFaq(id);
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#121212] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Testimonials Block */}
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center space-x-2">
              <span className="w-8 h-[1px] bg-accent-gold"></span>
              <span className="text-accent-gold text-xs font-bold tracking-widest uppercase font-mono">Testimoni Klien</span>
              <span className="w-8 h-[1px] bg-accent-gold"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-black tracking-tight uppercase leading-tight">
              Suara Kepuasan Pemilik Properti
            </h2>
            <p className="text-white/60 font-sans text-sm md:text-base">
              Kisah nyata dari klien residensial, bisnis, dan institusional yang mempercayakan rancang bangun mereka kepada AZ Sipil Interior.
            </p>
          </div>

          {/* Testimonial Cards Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((item) => (
              <div
                key={item.id}
                className="bg-brand-charcoal border border-white/10 p-6 md:p-8 rounded-sm relative flex flex-col justify-between"
                style={{ contentVisibility: 'auto' }}
              >
                {/* Floating quote element */}
                <div className="absolute right-6 top-6 text-white/5">
                  <MessageSquareQuote className="h-16 w-16" />
                </div>

                <div className="space-y-4">
                  {/* Rating star icons */}
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-accent-gold fill-accent-gold" />
                    ))}
                  </div>

                  <p className="text-white/80 font-sans text-sm leading-relaxed italic">
                    "{item.comment}"
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-accent-gold flex items-center justify-center font-display font-bold text-brand-dark text-sm">
                    {item.avatar}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">{item.name}</h4>
                    <p className="text-white/50 text-[11px] uppercase tracking-widest font-mono mt-0.5">
                      {item.role} • <span className="text-accent-gold">{item.projectType}</span>
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* FAQs Accordion Block */}
        <div className="mt-28 border-t border-white/10 pt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1 info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="w-8 h-[1px] bg-accent-gold"></span>
              <span className="text-accent-gold text-xs font-bold tracking-widest uppercase font-mono">Dukungan Informasi</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-black tracking-tight uppercase leading-tight">
              Pertanyaan Umum <br />
              Sputar Konstruksi
            </h3>
            <p className="text-white/60 text-sm leading-relaxed font-sans">
              Kami merangkum poin-poin tanya jawab mendasar yang sering diajukan klien untuk mematangkan wawasan Anda terkait aturan regulasi konstruksi baru atau interior fit-out spesifik.
            </p>
            <div className="bg-brand-charcoal/50 border border-white/5 p-5 rounded-sm space-y-3 max-w-sm mt-6">
              <div className="flex items-center space-x-2 text-xs font-bold text-accent-gold font-mono uppercase">
                <Clock className="h-4 w-4" />
                <span>Konsultasi Cepat</span>
              </div>
              <p className="text-xs text-white/50 leading-relaxed font-sans">
                Butuh jawaban teknis di luar daftar ini? Silahkan hubungi estimator kami via fitur survey untuk tanggapan instan kurang dari 30 menit.
              </p>
            </div>
          </div>

          {/* Column 2 FAQ interactive rows */}
          <div className="lg:col-span-7 space-y-4">
            {FAQS.map((faq) => {
              const isOpened = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-brand-charcoal border border-white/10 rounded-sm overflow-hidden transition-all duration-300"
                  style={{ contentVisibility: 'auto' }}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left p-5 md:p-6 flex items-center justify-between text-base font-semibold uppercase tracking-tight text-white hover:text-accent-gold font-display transition-colors cursor-pointer"
                    style={{ minHeight: '44px' }}
                  >
                    <span className="flex items-start space-x-3">
                      <HelpCircle className="h-5 w-5 text-accent-gold shrink-0 mt-0.5" />
                      <span>{faq.question}</span>
                    </span>
                    {isOpened ? <ChevronUp className="h-4 w-4 text-accent-gold shrink-0 ml-4" /> : <ChevronDown className="h-4 w-4 text-white/40 shrink-0 ml-4" />}
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpened ? 'max-h-60' : 'max-h-0'
                    }`}
                  >
                    <div className="p-5 md:p-6 pt-0 border-t border-white/5 text-xs sm:text-sm text-white/75 leading-relaxed font-sans">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
