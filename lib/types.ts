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

  // FareHarbor (if present)
  fh_product_id?: number;
  fh_shortname?: string;
}
