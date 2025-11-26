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

