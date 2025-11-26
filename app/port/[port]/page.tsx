// app/port/[port]/page.tsx

import { notFound } from "next/navigation";
import { getPortById, getToursForPort } from "@/lib/dataLoader";
import PortHero from "@/components/PortHero";
import TourGrid from "@/components/TourGrid";
import CallToBook from "@/components/CallToBook";

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

// Optional: Generate dynamic metadata
export async function generateMetadata({ params }: Props) {
  const port = getPortById(params.port);
  if (!port) return { title: "Port Not Found" };

  return {
    title: `${port.name} Alaska Tours & Excursions | Best Shore Activities`,
    description: port.description || `Discover the best tours and shore excursions in ${port.name}, Alaska.`,
  };
}