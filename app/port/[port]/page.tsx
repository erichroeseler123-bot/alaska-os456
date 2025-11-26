// app/port/[port]/page.tsx

import { notFound } from "next/navigation";
import { getPortById, getToursForPort } from "@/lib/dataloader";
import PortHero from "@/components/PortHero";
import TourGrid from "@/components/TourGrid";
import CallToBook from "@/components/CallToBook";

interface Props {
  params: { port: string };
}

export default function PortPage({ params }: Props) {
  const portId = params.port;

  const portData = getPortById(portId);
  if (!portData) return notFound();

  const tours = getToursForPort(portId);

  return (
    <>
      <PortHero port={portData} />
      <section className="min-h-screen bg-slate-50 p-8">
        <h1 className="text-4xl font-bold mb-4">{portData.name}</h1>
        <TourGrid tours={tours} />
      </section>
      <CallToBook />
    </>
  );
}