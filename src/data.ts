import { ServiceItem, PortfolioItem, TestimonialItem, FAQItem } from './types';

export const COMPANY_INFO = {
  name: 'AZ Sipil Interior',
  slogan: 'Build With Quality, Design With Passion.',
  description: 'AZ Sipil Interior adalah mitra terpercaya untuk konstruksi sipil berstandar SNI dan desain interior premium. Kami menghadirkan solusi ruang fungsional, aman, dan estetis dengan jaminan tepat waktu serta transparansi biaya mutlak.',
  detailedDescription: 'Dengan tim profesional berpengalaman di bidang teknik sipil, desain interior, dan manajemen proyek, AZ Sipil Interior hadir untuk menjadi mitra terpercaya dalam pembangunan dan penataan ruang — baik untuk kebutuhan residensial, komersial, maupun industri.',
  address: 'Jl Duri Kosambi No W 11-12, Jakarta, Daerah Khusus Ibukota Jakarta 15211',
  phone: '+62 812 9279 9527',
  phoneRaw: '6281292799527',
  email: 'info@azsipilinterior.com',
  social: {
    instagram: '@azsipilinterior',
    facebook: 'AZ Sipil Interior',
    linkedin: 'AZ Sipil Interior'
  }
};

export const VISI = 'Menjadi perusahaan konstruksi dan interior terkemuka di Indonesia yang dikenal karena kualitas, inovasi, dan integritas dalam setiap proyek.';

export const MISI = [
  'Menyediakan layanan konstruksi dan interior yang mengutamakan kualitas, keamanan, dan ketepatan waktu.',
  'Menghadirkan desain interior yang fungsional, estetik, dan sesuai karakter klien.',
  'Membangun hubungan jangka panjang dengan pelanggan melalui layanan profesional dan transparansi biaya.',
  'Menerapkan teknologi, material berstandar tinggi, dan tenaga ahli kompeten dalam setiap proyek.'
];

export const KEUNGGULAN = [
  {
    title: 'Tim Profesional',
    description: 'Dikelola oleh insinyur sipil bersertifikasi HAKI dan desainer interior lulusan universitas ternama.'
  },
  {
    title: 'Tepat Waktu',
    description: 'Garantor waktu pengerjaan terjadwal dengan sistem kurva S (S-curve tracking) yang transparan.'
  },
  {
    title: 'Transparansi Biaya',
    description: 'Rencana Anggaran Biaya (RAB) yang detail hingga satuan bahan, mencegah biaya membengkak (zero hidden fees).'
  },
  {
    title: 'Material Berkualitas',
    description: 'Bahan berserifikasi Standar Nasional Indonesia (SNI) dan ramah lingkungan berkualitas premium.'
  },
  {
    title: 'Garansi Pekerjaan',
    description: 'Jaminan pemeliharaan penuh pasca serah terima untuk memastikan kepuasan dan kedamaian pikiran Anda.'
  },
  {
    title: 'Pengawasan Ketat',
    description: 'Updates mingguan dalam bentuk aplikasi monitoring proyek yang dipimpin oleh tim quality control berpengalaman.'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'konstruksi',
    title: 'Konstruksi Bangunan',
    description: 'Pembangunan rumah mewah, ruko, kantor, dan fasilitas komersial dari nol dengan standar struktural SNI tertinggi.',
    longDescription: 'Dari pondasi dalam hingga atap beton, kami menangani proyek konstruksi sipil secara holistik. Setiap penulangan beton dan kualitas material diuji melalui pengawasan ahli teknik sipil kami.',
    image: '/src/assets/images/az_service_konstruksi_1782216194996.jpg',
    features: ['Struktur Beton Bertulang SNI', 'Sertifikat Kelayakan Struktur', 'Pekerjaan Pondasi Dalam/Slob', 'Dinding & Rangka Atap Baja Ringan']
  },
  {
    id: 'renovasi',
    title: 'Renovasi & Remodeling',
    description: 'Mengubah tampilan dan menaikkan nilai properti lama Anda dengan garansi perbaikan struktur modern.',
    longDescription: 'Solusi peremajaan bangunan komprehensif mulai dari perluasan denah, peninggian lantai, pengecoran dak baru, hingga penggantian tampak muka (facade remodeling).',
    image: '/src/assets/images/az_service_renovasi_1782216209139.jpg',
    features: ['Facade Modern Makeover', 'Pengecoran Lantai Dak Cor', 'Anti-Leakage & Waterproofing', 'Instalasi Elektrikal Terproteksi']
  },
  {
    id: 'interior',
    title: 'Desain Interior & Build',
    description: 'Layanan terintegrasi mulai dari perancangan 3D render realistis hingga pembuatan custom furniture workshop mandiri.',
    longDescription: 'Kami merancang ergonomi optimal dengan estetika tinggi. Workshop furnishing mandiri kami menjamin kualitas finishing HPL, Duco, dan detail sambungan kayu yang presisi.',
    image: '/src/assets/images/az_service_interior_1782216225618.jpg',
    features: ['Custom Kitchen Set & Backdrop', 'Visualisasi 3D Komprehensif', 'Furnitur Presisi Workshop Sendiri', 'Lighting Design & Mood Optimization']
  },
  {
    id: 'pengawasan',
    title: 'Pengawasan Proyek',
    description: 'Supervisi konstruksi independen untuk memantau kualitas material, ketepatan desain, dan deviasi biaya di lapangan.',
    longDescription: 'Tim pengawas kami mendeteksi dini kesalahan konstruksi di lapangan sehingga menjauhkan proyek Anda dari cacat struktural dan pemborosan belanja.',
    image: '/src/assets/images/az_service_supervision_1782216313463.jpg',
    features: ['Laporan Project Progress Regular', 'Audit Kualitas Bahan di Lapangan', 'Pengawasan K3 Konstruksi', 'Time Schedule S-Curve Verification']
  },
  {
    id: 'perencanaan',
    title: 'Perencanaan & Desain',
    description: 'Pembuatan dokumen perencanaan lengkap (DED), gambar arsitektur, gambar kerja struktur, dan blue print kelayakan.',
    longDescription: 'Menyediakan blueprint konstruksi, perhitungan kapasitas beban tanah, pemetaan tata cahaya, hingga persiapan dokumen untuk perizinan IMB / PBG.',
    image: '/src/assets/images/az_service_planning_1782216240263.jpg',
    features: ['Gambar Kerja DED Lengkap', 'Drafting IMB / PBG Kelayakan', 'Analisis Struktur & Beban Gempa', 'Site Plan & Layouting Zonasi']
  },
  {
    id: 'konsultasi',
    title: 'Konsultasi Teknik',
    description: 'Penyelesaian kendala teknis bangunan, audit struktur eksisting, rencana anggaran, dan optimasi efisiensi pengadaan bahan.',
    longDescription: 'Layanan konsultasi tatap muka langsung di kantor atau lokasi proyek bersama analis sipil kami untuk merumuskan solusi optimal sesuai budget (value engineering).',
    image: '/src/assets/images/az_service_consulting_1782216355215.jpg',
    features: ['Audit Crack & Defleksi Bangunan', 'Optimasi Alokasi Anggaran (VE)', 'Legalitas & Syarat Konstruksi', 'Mediasi Teknis & Solusi Lapangan']
  }
];

export const PORTFOLIOS: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Modern Architectural Villa',
    category: 'Konstruksi Bangunan',
    location: 'Sunter, Jakarta Utara',
    description: 'Pembangunan rumah tinggal bergaya modern-minimalis tropis dengan material eksklusif dan fasad beton ekspos premium.',
    image: '/src/assets/images/az_hero_banner_1782216173445.jpg', // Reuse hero banner since it's an ultra high-quality luxury building
    specs: {
      luas: '380 m²',
      durasi: '8 Bulan',
      biaya: 'Sesuai Budget Premium'
    }
  },
  {
    id: 'p2',
    title: 'Luxury Residence Living Room',
    category: 'Desain Interior',
    location: 'Pondok Indah, Jakarta Selatan',
    description: 'Transformasi ruang keluarga dengan custom furniture berbahan kayu jati, panel marmer Carrara, dan ambient lighting yang hangat.',
    image: '/src/assets/images/az_service_interior_1782216225618.jpg', // Beautiful living room asset
    specs: {
      luas: '85 m²',
      durasi: '2 Bulan',
      biaya: 'Desain & Build Kustom'
    }
  },
  {
    id: 'p3',
    title: 'Executive Corporate Office',
    category: 'Desain Interior',
    location: 'SCBD, Jakarta Selatan',
    description: 'Interior build bertema mewah dan fungsional untuk kantor pusat eksekutif, mengoptimalkan tata kerja hibrida modern.',
    image: '/src/assets/images/az_service_consulting_1782216355215.jpg', // High end office setup
    specs: {
      luas: '450 m²',
      durasi: '3.5 Bulan',
      biaya: 'Commercial Grade'
    }
  },
  {
    id: 'p4',
    title: 'Facasi Modern & Renovation',
    category: 'Renovasi & Remodeling',
    location: 'Menteng, Jakarta Pusat',
    description: 'Rekonstruksi fasad rumah kolonial menjadi hunian bertipe kontemporer industrial serta peninggian level lantai bebas banjir.',
    image: '/src/assets/images/az_service_renovasi_1782216209139.jpg', // Beautiful remodeling rendering
    specs: {
      luas: '220 m²',
      durasi: '4 Bulan',
      biaya: 'Struktur & Finishing'
    }
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Bpk. Hendra Wijaya',
    role: 'Pemilik Hunian',
    projectType: 'Konstruksi Baru (Villa)',
    comment: 'Sangat puas dengan transparansi biaya dari AZ Sipil Interior. Di kalkulator website sempat coba hitung dan setelah survey ternyata presisi sekali. Proyek rampung tepat waktu tanpa drama bengkak biaya.',
    rating: 5,
    avatar: 'HW'
  },
  {
    id: 't2',
    name: 'Ibu Listya Anggraini',
    role: 'Pengusaha FnB',
    projectType: 'Fit-out Cafe & Resto',
    comment: 'Desain interior yang dibuat tim AZ Sipil Interior sangat detail dan fungsional. Tim workshop-nya bekerja cepat dan rapi saat memasang cabinet dan panel marmer. Sangat direkomendasikan untuk properti komersial.',
    rating: 5,
    avatar: 'LA'
  },
  {
    id: 't3',
    name: 'Bpk. Aris Setiawan',
    role: 'Direktur Operasional',
    projectType: 'Renovasi Kantor',
    comment: 'Proses pengawasan proyek mereka luar biasa disiplin. Setiap minggu saya dapat laporan Kurva S lengkap beserta foto kualitas beton. Membantu kami memantau dari jauh tanpa ribet.',
    rating: 5,
    avatar: 'AS'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'f1',
    question: 'Berapa biaya per meter persegi untuk bangun baru di AZ Sipil Interior?',
    answer: 'Biaya bangun baru bervariasi mulai dari Rp 4.500.000 hingga Rp 8.500.000+ per meter persegi, tergantung dari spesifikasi kualitas material (Standar, Medium, Premium, hingga Ultra Premium) dan kesulitan struktur di lokasi.'
  },
  {
    id: 'f2',
    question: 'Apakah estimasi otomatis di Kalkulator RAB sudah akurat?',
    answer: 'Kalkulator RAB kami dirancang menggunakan database biaya terkini wilayah Jabodetabek dengan deviasi akurasi berkisar 10-15%. Hasil ini ditujukan sebagai acuan rancangan awal. Kami tetap menyarankan Anda melanjutkan survey fisik di lapangan (gratis) untuk menghasilkan RAB final.'
  },
  {
    id: 'f3',
    question: 'Mengapa saya harus mengisi Survey Proyek sebelum berkonsultasi di WhatsApp?',
    answer: 'Survey Proyek membantu arsitek dan insinyur kami mempelajari detail awal kebutuhan ruang, ketersediaan dana, serta lokasi lahan Anda terlebih dahulu. Dengan data matang ini, saat Anda terkoneksi ke WhatsApp, kami tidak lagi bertanya dari nol melainkan langsung menyajikan core solution draf konsep untuk Anda pautkan berkonsultasi.'
  },
  {
    id: 'f4',
    question: 'Apakah ada jaminan garansi retak rambut penyusutan setelah bangunan rampung?',
    answer: 'Tentu. AZ Sipil Interior memberikan garansi pemeliharaan struktural selama 90 hari setelah serah terima kunci (BAST) untuk meng-cover kendala rembesan air, keretakan minor, cat terkelupas, serta instalasi kelistrikan.'
  },
  {
    id: 'f5',
    question: 'Bagaimana sistem pembayaran proyek di AZ Sipil Interior?',
    answer: 'Kami menerapkan pembayaran bertahap (termin) sesuai dengan laporan kemajuan aktual proyek (physical milestone progress) di lapangan yang disepakati bersama dalam Surat Perjanjian Kerja (SPK). Umumnya dibagi menjadi 4-5 termin.'
  }
];
