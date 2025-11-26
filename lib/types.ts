// ======================================
// TYPES FOR ALASKA OS — FULL + FINAL SET
// ======================================

// --------------------------
// PORT TYPE
// --------------------------
export interface Port {
  id: string;               // unique ID
  name: string;             // "Juneau"
  slug: string;             // "juneau"
  tagline?: string;         // optional tagline for hero
  image: string;            // hero image URL
  description?: string;     // optional longer description
}

// --------------------------
// TOUR TYPE
// --------------------------
export interface Tour {
  id: string;
  title: string;
  price_range: string;
  duration?: string;
  description?: string;
  image?: string;
  locations?: string[];
  operator?: string;        // operator slug
}

// --------------------------
// OPERATOR TYPE — FINAL VERSION
// Matching EXACTLY what the build error showed
// --------------------------
export interface Operator {
  id: string;               // "juneau_adventure_tours"
  name: string;             // "Juneau Adventure Tours"
  slug: string;             // "juneau-adventure-tours"
  description: string;      // long description
  image: string;            // operator main image/logo
  ports: string[];          // array of supported ports

  // Required for FareHarbor integrations:
  fh_shortname: string;     // FareHarbor company shortname
  embed_base_url: string;   // embed URL prefix for tours

  // For "Call To Book" component
  contact_phone: string;    // "(907) 555-1234"
}
