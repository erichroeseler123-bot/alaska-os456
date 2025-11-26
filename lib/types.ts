// =========================
// Alaska OS — Global Types
// =========================

// ---- PORT ----
export interface Port {
  id: string;
  name: string;
  slug: string;
  tagline?: string;
  image: string;
  description?: string;
}

// ---- TOUR ----
export interface Tour {
  id: string;

  // REQUIRED BY UI + SEEN IN BUILD LOG
  slug: string;
  title: string;
  description_short: string;
  description_long: string;
  duration: string;
  price_range: string;

  // Optional image
  image?: string;

  // Optional extras
  locations?: string[];
  operator?: string; // operator id reference
}

// ---- OPERATOR ----
export interface Operator {
  id: string;
  name: string;
  description: string;

  // Optional, because your dataset rarely includes images
  image?: string;

  ports: string[];

  fh_shortname: string;
  embed_base_url: string;

  contact_phone: string;
}
