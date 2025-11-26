// lib/dataLoader.ts

import portsRaw from "../data/ports.json";
import toursRaw from "../data/tours.json";
import operatorsRaw from "../data/operators.json";

import type { Port, Tour, OperatorData } from "./types";

// ————————————————————————
// PORTS
// ————————————————————————
export function getAllPorts(): Port[] {
  return portsRaw.map((p: any) => ({
    id: p.id,
    name: p.name,
    slug: p.slug ?? p.id,
    image: p.image ?? "/img/default-port.jpg",
    tagline: p.tagline ?? undefined,
    description: p.description ?? undefined,
  }));
}

export function getPortById(id: string): Port | null {
  const p = portsRaw.find((x: any) => x.id === id);
  if (!p) return null;

  return {
    id: p.id,
    name: p.name,
    slug: p.slug ?? p.id,
    image: p.image ?? "/img/default-port.jpg",
    tagline: p.tagline ?? undefined,
    description: p.description ?? undefined,
  };
}

// ————————————————————————
// TOURS
// ————————————————————————
export function getToursForPort(portId: string): Tour[] {
  return toursRaw
    .filter((t: any) => t.locations?.includes(portId))
    .map((t: any) => ({
      id: t.id ?? `\( {t.slug}- \){portId}`,
      slug: t.slug,
      title: t.title,
      price_range: t.price_range ?? undefined,
      duration: t.duration ?? undefined,
      description_short: t.description_short ?? undefined,
      description_long: t.description_long ?? undefined,
      image: t.image ?? "/img/default-tour.jpg",
      locations: t.locations ?? [],
      operator: t.operator ?? undefined,
    }));
}

export function getAllTours(): Tour[] {
  return toursRaw.map((t: any) => ({
    id: t.id ?? t.slug,
    slug: t.slug,
    title: t.title,
    price_range: t.price_range ?? undefined,
    duration: t.duration ?? undefined,
    description_short: t.description_short ?? undefined,
    description_long: t.description_long ?? undefined,
    image: t.image ?? "/img/default-tour.jpg",
    locations: t.locations ?? [],
    operator: t.operator ?? undefined,
  }));
}

export function getTourBySlug(slug: string): Tour | null {
  const t = toursRaw.find((x: any) => x.slug === slug);
  if (!t) return null;

  return {
    id: t.id ?? t.slug,
    slug: t.slug,
    title: t.title,
    price_range: t.price_range ?? undefined,
    duration: t.duration ?? undefined,
    description_short: t.description_short ?? undefined,
    description_long: t.description_long ?? undefined,
    image: t.image ?? "/img/default-tour.jpg",
    locations: t.locations ?? [],
    operator: t.operator ?? undefined,
  };
}

export function getRelatedTours(tour: Tour, limit = 4): Tour[] {
  if (!tour.locations || tour.locations.length === 0) return [];

  return toursRaw
    .filter(
      (t: any) =>
        t.slug !== tour.slug &&
        t.locations?.some((loc: string) => tour.locations?.includes(loc))
    )
    .slice(0, limit)
    .map((t: any) => ({
      id: t.id ?? t.slug,
      slug: t.slug,
      title: t.title,
      price_range: t.price_range ?? undefined,
      duration: t.duration ?? undefined,
      description_short: t.description_short ?? undefined,
      description_long: t.description_long ?? undefined,
      image: t.image ?? "/img/default-tour.jpg",
      locations: t.locations ?? [],
      operator: t.operator ?? undefined,
    }));
}

// ————————————————————————
// OPERATORS
// ————————————————————————
export function getOperatorById(id: string): OperatorData | null {
  const op = operatorsRaw.find((o: any) => o.id === id);
  if (!op) return null;

  return {
    id: op.id,
    name: op.name,
    description: op.description ?? "",
    ports: op.ports ?? [],
    fh_shortname: op.fh_shortname ?? undefined,
    embed_base_url: op.embed_base_url ?? undefined,
    contact_phone: op.contact_phone ?? undefined,
    image: op.image ?? "/img/default-operator.jpg",
  };
}

export function getToursForOperator(operatorId: string): Tour[] {
  return toursRaw
    .filter((t: any) => t.operator === operatorId)
    .map((t: any) => ({
      id: t.id ?? t.slug,
      slug: t.slug,
      title: t.title,
      price_range: t.price_range ?? undefined,
      duration: t.duration ?? undefined,
      description_short: t.description_short ?? undefined,
      description_long: t.description_long ?? undefined,
      image: t.image ?? "/img/default-tour.jpg",
      locations: t.locations ?? [],
      operator: t.operator ?? undefined,
    }));
}

// ————————————————————————
// MISSING FUNCTIONS (THESE WERE KILLING YOUR BUILD)
// ————————————————————————
export function generateSchema(tour: Tour, operator?: OperatorData | null) {
  if (!tour) return null;

  const base = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: tour.title,
    description: tour.description_long || tour.description_short || tour.title,
    url: `https://aktours.alaska-os.com/tour/${tour.slug}`, // change if your domain is different
  };

  if (operator) {
    return {
      ...base,
      provider: {
        "@type": "Organization",
        name: operator.name,
      },
    };
  }
  return base;
}

export function buildEmbedUrl(operator: OperatorData | null) {
  if (!operator?.embed_base_url) return null;
  return `${operator.embed_base_url}?full-items=yes&flow=calendar`;
}