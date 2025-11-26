import ports from '../data/ports.json';
import operators from '../data/operators.json';
import tours from '../data/tours.json';

export function getPorts() { return ports; }
export function getOperators() { return operators; }
export function getTours() { return tours; }

export function getPortById(id: string) {
  return ports.find((p: any) => p.id === id);
}

export function getOperatorById(id: string) {
  return operators.find((o: any) => o.id === id);
}

export function getTourBySlug(slug: string) {
  return tours.find((t: any) => t.slug === slug);
}

export function getToursForPort(portId: string) {
  return tours.filter((t: any) => t.port === portId);
}

export function getToursForOperator(opId: string) {
  return tours.filter((t: any) => t.operator_id === opId);
}

export function getAllPortIds() {
  return ports.map((p: any) => p.id);
}

export function getAllOperatorIds() {
  return operators.map((o: any) => o.id);
}

export function getAllTourSlugs() {
  return tours.map((t: any) => t.slug);
}