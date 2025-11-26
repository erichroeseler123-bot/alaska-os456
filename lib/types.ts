// ============================
// PORTS
// ============================
export interface Port {
  id: string;
  name: string;
  slug: string;
  tagline?: string;
  image: string;
  description?: string;
}


// ============================
// TOURS
// ============================
// Matches real JSON. ALL optional except slug + title.
export interface Tour {
  id?: string;
  slug: string;
  title: string;

  // 🔥 Required fix — optional because many tours have no price_range
  price_range?: string;

  duration?: string;
  description_short?: string;
  description_long?: string;
  image?: string;
  locations?: string[];
  operator?: string;
}


// ============================
// OPERATORS — MATCHES YOUR REAL DATA
// ============================
export interface OperatorData {
  id: string;
  name: string;
  description: string;
  ports: string[];

  // Optional in JSON
  fh_shortname?: string;
  embed_base_url?: string;

  // Optional fields — previously broke build
  contact_phone?: string;
  image?: string;
}
