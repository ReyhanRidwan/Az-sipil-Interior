import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Globe, Github, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data';

export default function ContactFooter() {
  const [inquiry, setInquiry] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setInquiry({ name: '', email: '', phone: '', message: '' });
    }, 2000);
  };

  // Structured Data Schema for SEO Local Business
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': COMPANY_INFO.name,
    'image': 'https://ais-pre-xuhhe6zq3ijgxgdmk6auua-447463601872.asia-southeast1.run.app/src/assets/images/az_hero_banner_1782216173445.jpg',
    'telephone': COMPANY_INFO.phone,
    'email': COMPANY_INFO.email,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Jl Duri Kosambi No W 11-12',
      'addressLocality': 'Jakarta',
      'addressRegion': 'Daerah Khusus Ibukota Jakarta',
      'postalCode': '15211',
      'addressCountry': 'ID'
    },
    'slogan': COMPANY_INFO.slogan,
    'priceRange': '$$$$',
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      'opens': '08:00',
      'closes': '17:00'
    }
  };

  return (
    <footer id="kontak" className="bg-[#f8f9fa] text-brand-dark pt-20 border-t border-gray-200 overflow-hidden">
      
      {/* Inject Local Business Schema into document body for crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        
        {/* Main contact rows */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-16">
          
          {/* Column 1: Info coordinates (5 columns) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="w-10 h-[1.5px] bg-[#c5a880]"></span>
                <span className="text-[#a78a63] text-xs font-semibold tracking-widest uppercase font-mono">Hubungi Kami</span>
              </div>
              <h2 className="text-3xl font-display font-black tracking-tight text-brand-dark uppercase">
                Kantor Pusat &amp; Workshop
              </h2>
              <p className="text-gray-500 font-sans text-sm leading-relaxed">
                Silahkan berkunjung langsung untuk berkonsultasi, melihat opsi-opsi material premium di panel sample, atau berdiskusi dengan tim insinyur sipil kami.
              </p>
            </div>

            {/* Coordinates points */}
            <div className="space-y-5">
              <div className="flex items-start space-x-4">
                <div className="h-10 w-10 bg-brand-charcoal text-white rounded-sm flex items-center justify-center shrink-0 border border-white/5">
                  <MapPin className="h-5 w-5 text-accent-gold" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-gray-400 font-mono">Alamat Resmi</h4>
                  <p className="text-gray-700 text-sm mt-1 leading-relaxed font-sans font-medium">
                    {COMPANY_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="h-10 w-10 bg-brand-charcoal text-white rounded-sm flex items-center justify-center shrink-0 border border-white/5">
                  <Phone className="h-5 w-5 text-accent-gold" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-gray-400 font-mono">Hotline WhatsApp</h4>
                  <p className="text-gray-700 text-sm mt-1 font-mono font-bold">
                    <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-amber-700 transition-colors">
                      {COMPANY_INFO.phone}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="h-10 w-10 bg-brand-charcoal text-white rounded-sm flex items-center justify-center shrink-0 border border-white/5">
                  <Mail className="h-5 w-5 text-accent-gold" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-gray-400 font-mono">Surat Elektronik</h4>
                  <p className="text-gray-700 text-sm mt-1 font-mono hover:text-amber-700 transition-colors">
                    <a href={`mailto:${COMPANY_INFO.email}`}>
                      {COMPANY_INFO.email}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="h-10 w-10 bg-brand-charcoal text-white rounded-sm flex items-center justify-center shrink-0 border border-white/5">
                  <Clock className="h-5 w-5 text-accent-gold" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-gray-400 font-mono">Jam Operasional</h4>
                  <p className="text-gray-700 text-sm mt-1 leading-relaxed font-sans font-medium">
                    Senin - Sabtu: 08:00 - 17:00 <br />
                    <span className="text-xs text-gray-400 font-mono">(Minggu &amp; Libur Nasional tutup)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Interactive message sender (7 columns) */}
          <div className="lg:col-span-7 bg-white border border-gray-200/80 p-6 md:p-8 rounded-sm shadow-sm flex flex-col justify-between">
            <h3 className="text-lg font-display font-bold uppercase tracking-widest text-[#1c1c1c] border-b border-gray-150 pb-3 mb-6">
              Kirim Pesan Instan
            </h3>

            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-scaleUp">
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto border border-green-200">
                  <ShieldCheck className="h-8 w-8 text-green-600 shrink-0" />
                </div>
                <h4 className="text-xl font-display font-bold text-brand-dark uppercase">Pesan Terkirim!</h4>
                <p className="text-gray-500 text-sm max-w-sm mx-auto">
                  Terima kasih, tim administrasi kami akan segera menghubungi balik alamat email Anda dalam kurun waktu 1x24 jam kerja.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 font-mono mb-2">Nama Lengkap</label>
                    <input
                      type="text"
                      className="w-full bg-[#f8f9fa] border border-gray-250 px-4 py-3 rounded-sm text-sm focus:border-accent-gold focus:outline-none"
                      placeholder="Contoh: Pak Robert"
                      value={inquiry.name}
                      onChange={(e) => setInquiry({ ...inquiry, name: e.target.value })}
                      style={{ minHeight: '44px' }}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 font-mono mb-2">Alamat Email</label>
                    <input
                      type="email"
                      className="w-full bg-[#f8f9fa] border border-gray-250 px-4 py-3 rounded-sm text-sm focus:border-accent-gold focus:outline-none"
                      placeholder="robert@mail.com"
                      value={inquiry.email}
                      onChange={(e) => setInquiry({ ...inquiry, email: e.target.value })}
                      style={{ minHeight: '44px' }}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 font-mono mb-2">Nomor Telepon</label>
                  <input
                    type="tel"
                    className="w-full bg-[#f8f9fa] border border-gray-250 px-4 py-3 rounded-sm text-sm focus:border-accent-gold focus:outline-none"
                    placeholder="0812XXXXXXXX"
                    value={inquiry.phone}
                    onChange={(e) => setInquiry({ ...inquiry, phone: e.target.value })}
                    style={{ minHeight: '44px' }}
                    required
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 font-mono mb-2">Isi Pesan / Kebutuhan Struktur</label>
                  <textarea
                    rows={4}
                    className="w-full bg-[#f8f9fa] border border-gray-250 px-4 py-3 rounded-sm text-sm focus:border-accent-gold focus:outline-none"
                    placeholder="Saya berencana merenovasi lantai 2 toko saya..."
                    value={inquiry.message}
                    onChange={(e) => setInquiry({ ...inquiry, message: e.target.value })}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#121212] text-white hover:bg-accent-gold hover:text-brand-dark transition-all font-bold text-xs uppercase tracking-widest rounded-sm flex items-center justify-center space-x-2 cursor-pointer"
                  style={{ minHeight: '44px' }}
                >
                  <Send className="h-4 w-4 shrink-0" />
                  <span>Kirim Pesan</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Dynamic Map Illustration block */}
        <div className="bg-[#121212] py-8 px-6 rounded-sm text-white flex flex-col md:flex-row items-center justify-between border border-white/5 gap-6 mb-16">
          <div className="flex items-center space-x-3 text-left">
            <div className="h-10 w-10 bg-accent-gold/20 border border-accent-gold/30 rounded-sm flex items-center justify-center shrink-0">
              <MapPin className="h-5 w-5 text-accent-gold" />
            </div>
            <div>
              <p className="text-xs uppercase font-mono tracking-widest text-white/50">Cakupan Wilayah Operasional</p>
              <p className="text-sm font-semibold text-white">Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi)</p>
            </div>
          </div>
          <span className="text-[11px] font-mono whitespace-nowrap text-accent-gold border border-accent-gold/20 py-1.5 px-3 rounded-sm uppercase tracking-wider">
            Sipil Pasifik Indonesia • Verified Google Place
          </span>
        </div>

        {/* Footer legalities and copyright bar */}
        <div className="border-t border-gray-200 pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-400">
          <div className="flex items-center space-x-2">
            <div className="h-6 w-6 flex items-center justify-center bg-accent-gold/10 border border-accent-gold/20 rounded-md">
              <span className="font-display font-black text-brand-dark text-xs">AZ</span>
            </div>
            <p className="font-sans font-medium text-gray-500">
              © {new Date().getFullYear()} AZ Sipil Interior. All rights reserved. Indonesia.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-gray-400 font-mono text-[10px] uppercase tracking-wider">
            <span>Slogan: {COMPANY_INFO.slogan}</span>
            <span>•</span>
            <span>Build with Quality</span>
            <span>•</span>
            <span>Design with Passion</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
