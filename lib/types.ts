// =====================
// PORT TYPE
// =====================
export interface Port {
  id: string;
  name: string;
  slug: string;
  tagline?: string;
  image: string;
  description?: string;
}



export interface Operator {
  id: string;
  name: string;
  description: string;
  ports: string[];
  fh_shortname: string;
  embed_base_url: string;
  contact_phone: string;
  image?: string;   // <-- FIXED: now optional
}




// =====================
// FULL TOUR TYPE (FINAL)
// Matches your dataset exactly
// =====================
export interface Tour {
  id: string;                    // internal uuid or slug
  slug: string;                  // URL slug
  title: string;                 // Name of the tour
  description_short: string;     // Short text
  description_long: string;      // Long text
  duration: string;              // e.g. "3 hours"
  price_from: number;            // minimum price
  price_max?: number;            // max price (optional)
  image?: string;                // URL
  locations?: string[];          // array of locations
  operator: string;              // operator slug
}
