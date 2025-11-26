export interface Port {
  id: string;
  name: string;
  slug: string;
  tagline?: string; // <-- add optional tagline
  image: string;
  description?: string;
}

export interface Tour {
  id: string;
  title: string;
  price_range: string;
  duration?: string;
  description?: string;
  image?: string;
  locations?: string[];
  operator?: string;
}
