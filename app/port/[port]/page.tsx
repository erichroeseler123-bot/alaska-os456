// app/port/[port]/page.tsx
// FINAL VERSION — uses the REAL paths from your repo

import { notFound } from "next/navigation";

// These are the ACTUAL paths in your repo (checked on GitHub)
import PortHero from "@/components/port/PortHero";
import TourGrid from "@/components/tours/TourGrid";
import CallToBook from "@/components/common/CallToBook";

import portsRaw from "@/data/ports.json";
import toursRaw from "@/data/tours.json";

function getPortById(id: string) {
  const p = portsRaw.find((p: any) => p.id === id);
  if (!p) return null;
  return {
    ...p,
    slug: p.slug ?? p.id,
    image: p.image ?? "/img/default-port.jpg",
    tagline: p.tagline ?? "",
    description: p.description ?? "",
  };
}

function getToursForPort(portId: string) {
  return toursRaw
    .filter((t: any) => t.locations?.includes(portId))
    .map((t: any) => ({
      ...t,
      id: t.id ?? `\( {t.slug}- \){portId}`,
      image: t.image ?? "/img/default-tour.jpg",
    }));
}

interface Props {
  params: { port: string };
}

export default function PortPage({ params }: Props) {
  const portId = params.port;
  const port = getPortById(portId);
  if (!port) return notFound();

  const tours = getToursForPort(portId);

  return (
    <>
      <PortHero port={port} />
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Top Tours & Activities in {port.name}
        </h2>
        {tours.length > 0 ? (
          <TourGrid tours={tours} />
        ) : (
          <p className="text-center text-gray-600 text-lg">
            No tours available yet for {port.name}. Check back soon!
          </p>
        )}
        <div className="mt-16">
          <CallToBook portName={port.name} />
        </div>
      </section>
    </>
  );
}

export async function generateMetadata({ params }: Props) {
  const port = getPortById(params.port);
  if (!port) return { title: "Port Not Found" };
  return {
    title: `${port.name} Alaska Tours & Excursions`,
    description: port.description || `Best tours in ${port.name}, Alaska`,
  };
}