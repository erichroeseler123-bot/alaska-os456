// app/port/[port]/page.tsx
// NO IMPORT FROM "@/lib/dataloader" → NO POSSIBLE TYPO → BUILD WILL PASS

import { notFound } from "next/navigation";
import PortHero from "@/components/PortHero";
import TourGrid from "@/components/TourGrid";
import CallToBook from "@/components/CallToBook";

import portsRaw from "@/data/ports.json";
import toursRaw from "@/data/tours.json";

// Helper inside the file — no external import needed
function getPortById(id: string) {
  return portsRaw.find((p: any) => p.id === id) || null;
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

  // Add missing fields that your components expect
  const fullPort = {
    ...port,
    slug: port.slug ?? port.id,
    image: port.image ?? "/img/default-port.jpg",
    tagline: port.tagline ?? "",
    description: port.description ?? "",
  };

  const tours = getToursForPort(portId);

  return (
    <>
      <PortHero port={fullPort} />

      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Top Tours & Activities in {fullPort.name}
        </h2>

        {tours.length > 0 ? (
          <TourGrid tours={tours} />
        ) : (
          <p className="text-center text-gray-600 text-lg">
            No tours available yet for {fullPort.name}. Check back soon!
          </p>
        )}

        <div className="mt-16">
          <CallToBook portName={fullPort.name} />
        </div>
      </section>
    </>
  );
}

export async function generateMetadata({ params }: Props) {
  const port = getPortById(params.port);
  if (!port) return { title: "Port Not Found" };

  return {
    title: `${port.name} Alaska Tours & Excursions | Best Shore Activities`,
    description:
      port.description || `Discover the best tours in ${port.name}, Alaska.`,
  };
}