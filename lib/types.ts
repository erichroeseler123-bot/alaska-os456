// lib/types.ts

// --------------------
// Ports
// --------------------
export interface Port {
  id: string;
  name: string;
  slug: string;
  tagline?: string;
  image?: string;
  description_short?: string;
  description_long?: string;
}

// --------------------
// Tours
// --------------------
// NOTE: id is optional on purpose so the build never fails
// if some tour objects don't include an id.
export interface Tour {
  id?: string;
  slug: string;
  title: string;
  description_short: string;
  description_long: string;
  duration?: string;
  price_from?: number;
  price_to?: number;
  price_range?: string;
  image?: string;
  locations?: string[];
  operator_id?: string;
}

// --------------------
// Operators
// --------------------
// One canonical operator shape, then we alias it so any of
// Operator / OperatorData / OperatorFull will compile.

export interface OperatorBase {
  id: string;
  slug: string;
  name: string;

  description_short: string;
  description_long: string;

  // Port slugs this operator serves
  ports: string[];

  // FareHarbor-related fields
  fh_shortname?: string;
  embed_base_url?: string;

  // Display / contact
  contact_phone?: string;
  image?: string;
}

// Main exports used around the app
export type Operator = OperatorBase;
export type OperatorData = OperatorBase;
export type OperatorFull = OperatorBase;
