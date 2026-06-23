/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  features: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
  specs: {
    luas: string;
    durasi: string;
    biaya: string;
  };
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  projectType: string;
  comment: string;
  rating: number;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// RAB Calculator Types
export type ProjectType = 'baru' | 'renovasi';

export interface RABInput {
  projectType: ProjectType;
  luasBangunan: number;
  jumlahLantai: number;
  kualitasMaterial: 'standar' | 'medium' | 'premium' | 'ultra_premium';
  lokasiProyek: string;
}

export interface RABResult {
  minCost: number;
  maxCost: number;
  durationMin: number;
  durationMax: number;
  costPerMeter: number;
}

// Survey Lead Filter Types
export interface SurveyState {
  step: number;
  jenisProyek: string;
  luasArea: string;
  lokasiProyek: string;
  budget: string;
  targetMulai: string;
  nama: string;
  waNumber: string;
}
