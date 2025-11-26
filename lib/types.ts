// ==============================
// PORT TYPE
// ==============================
export interface Port {
  id: string;            // "juneau"
  name: string;          // "Juneau"
  slug: string;          // "juneau"
  tagline?: string;      // optional tagline for hero section
  image: string;         // hero image
  description?: string;  // longer descriptive text
}

// ==============================
// OPERATOR TYPE
// ==============================
export interface Operator {
  id: string;            // "juneau_adventure_tours"
  name: string;          // "Juneau Adventure Tours"
  slug: string;          // "juneau-adventure-tours"
  description: string;   // text description about the operator
  image: string;         // operator logo/photo
  ports: string[];       // list of port slugs where they operate
}

// ==============================
// TOUR TYPE
// ==============================
export interface Tour {
  slug: string;                 // "mendenhall-glacier-hike"
  title: string;                // "Mendenhall Glacier Ice Adventure"
  description_short: string;    // short summary
  description_long: string;     // long detailed description
  duration: string;             // "3 hours", "Full Day", etc
  price_min: number;            // minimum price
  price_max: number;            // maximum price
  rating: number;               // 4.9, 4.7, etc
  image: string;                // hero image or primary photo
  operator_id: string;          // which operator runs this tour
  locations: string[];          // list of locations/stops
}
