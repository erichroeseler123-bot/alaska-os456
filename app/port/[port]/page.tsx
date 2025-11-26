import { notFound } from "next/navigation";
import { getPortById, getToursForPort, getOperatorById, generateSchema } from "../../../lib/dataLoader";
import PortHero from "../../../components/PortHero";
import TourCard from "../../../components/TourCard";

export default async function PortPage({ params }) {
  const { port } = await params;

  const portData = getPortById(port);
  if (!portData) notFound();

  const tours = getToursForPort(port);
  const schema = generateSchema("port", portData);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 p-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <PortHero port={portData} />

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">Featured Tours in {portData.name}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour) => {
            const operator = getOperatorById(tour.operator_id);
            if (!operator) return null;
            return <TourCard key={tour.slug} tour={tour} operator={operator} />;
          })}
        </div>
      </section>
    </main>
  );
}
