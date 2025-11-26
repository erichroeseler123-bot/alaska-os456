// lib/types.ts

export interface Operator {
  id: string;
  name: string;
  phone?: string;
  email?: string;
  website?: string;
  logo?: string;
  description?: string;
  ports_served?: string[];
}

export interface Port {
  id: string;          // "juneau", "skagway", etc.
  name: string;        // "Juneau", "Skagway", etc.
  description?: string;
  heroImage?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}
