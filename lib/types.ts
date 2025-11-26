// lib/types.ts

// ============================
// PORTS
// ============================
export interface Port {
  id: string;
  name: string;
  slug: string;        // required – we generate it if missing
  tagline?: string;
  image: string;       // required – we provide default in dataLoader
  description?: string;
}

// ============================
// TOURS
// ============================
export interface Tour {
  id?: string;
  slug: string;
  title: string;
  price_range?: string;     // ← this was killing your build before
  duration?: string;
  description_short?: string;
  description_long?: string;
  image?: string;
  locations?: string[];
  operator?: string;
}

// ============================
// OPERATORS
// ============================
export interface OperatorData {
  id: string;
  name: string;
  description: string;
  ports: string[];
  fh_shortname?: string;
  embed_base_url?: string;
  contact_phone?: string;
  image?: string;
}