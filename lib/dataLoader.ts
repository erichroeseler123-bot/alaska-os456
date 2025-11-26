import { getPorts, getOperators, getTours,
  getPortById, getOperatorById, getTourBySlug,
  getToursForPort, getToursForOperator,
  getAllPortIds, getAllOperatorIds, getAllTourSlugs } from './dataLoaderHelpers';

export {
  getPorts, getOperators, getTours,
  getPortById, getOperatorById, getTourBySlug,
  getToursForPort, getToursForOperator,
  getAllPortIds, getAllOperatorIds, getAllTourSlugs
};

export function generateSchema(type: string, data: any) {
  return {
    "@context": "https://schema.org",
    "@type": type === "tour" ? "TouristTrip" :
             type === "port" ? "City" :
             "LocalBusiness",
    "name": data.name || data.title,
    "description": data.description || data.tagline || ""
  };
}

export function getRelatedTours(slug: string, category: string, port: string) {
  return getTours().filter((t: any) =>
    t.slug !== slug &&
    (t.category === category || t.port === port)
  ).slice(0, 4);
}

export function buildEmbedUrl(operator: any, tour?: any) {
  if (!operator?.embed_base_url) return null;
  return tour?.fh_item_id
    ? `${operator.embed_base_url}/items/${tour.fh_item_id}/?full-items=yes`
    : operator.embed_base_url;
}