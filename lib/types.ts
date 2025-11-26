// =========================
// Alaska OS — Global Types
// =========================

// ---- PORT ----
export interface Port {
  id: string;
  name: string;
  slug: string;
  tagline?: string;      // short marketing tagline
  image: string;         // hero image
  description?: string;  // long description
}

// ---- TOUR ----
export interface Tour {
  id: string;
  slug: string;
  title: string;
  description_short: string;
  description_long: string;
  duration: string;
  price_range: string;

  // Optional stuff
  image?: string;
  locations?: string[];
  operator?: string;        // operator_id reference
}

// ---- OPERATOR ----
export interface Operator {
  id: string;               // unique ID
  name: string;             // "Juneau Adventure Tours"
  description: string;      // operator description
  image: string;            // hero image
  ports: string[];          // supported ports slugs

  fh_shortname: string;     // fareharbor shortname
  embed_base_url: string;   // embed base url

  contact_phone: string;    // displayed in CallToBook
}

