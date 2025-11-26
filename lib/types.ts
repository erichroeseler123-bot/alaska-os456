// PORTS
export interface Port {
  id: string;
  name: string;
  slug: string;
  tagline?: string;
  image: string;
  description?: string;
}

// TOURS
export interface Tour {
  id?: string;         // optional because your JSON often lacks it
  slug: string;
  title: string;
  price_range: string;
  duration?: string;
  description_short?: string;
  description_long?: string;
  image?: string;
  locations?: string[];
  operator?: string;
}

// OPERATORS — MATCHES YOUR REAL JSON EXACTLY
export interface OperatorData {
  id: string;
  name: string;
  description: string;
  ports: string[];

  // these two fields are REQUIRED in your current types — but optional in real data
  fh_shortname?: string;
  embed_base_url?: string;

  // 🔥 these were causing your error — make OPTIONAL
  contact_phone?: string;
  image?: string;
}
