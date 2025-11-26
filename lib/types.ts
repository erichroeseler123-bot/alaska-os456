// ------------------------------------------------------
// PORT TYPE
// ------------------------------------------------------
export interface Port {
  id: string;
  name: string;
  slug: string;
  tagline?: string;
  image: string;
  description?: string;
}



// ------------------------------------------------------
// OPERATOR TYPE  (THIS WAS MISSING — FIXES YOUR ERROR)
// ------------------------------------------------------
export interface Operator {
  id: string;
  name: string;
  description: string;

  // Port relationships
  ports: string[];

  // FareHarbor fields
  fh_shortname: string;
  embed_base_url: string;

  // Contact
  contact_phone?: string;
}



// ------------------------------------------------------
// TOUR TYPE — MATCHES YOUR ALASKA MASTER DATA
// ------------------------------------------------------
export interface Tour {
  id: string;
  slug: string;
  title: string;

  // Text
  description_short: string;
  description_long: string;

  // Pricing
  price_from: number;
  price_to?: number;
  price_range?: string;

  // Metadata
  duration: string;
  rating?: number;
  reviews?: number;

  // Optional
  image?: string;
  locations?: string[];
  operator?: string;

  // FareHarbor
  fh_product_id?: number;
  fh_shortname?: string;
}
