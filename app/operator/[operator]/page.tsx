import { notFound } from "next/navigation";
import { getOperatorById, getToursForOperator, generateSchema, buildEmbedUrl } from "../../../lib/dataLoader";
import OperatorHero from "../../../components/OperatorHero";
import FareHarborEmbed from "../../../components/FareHarborEmbed";
import CallToBook from "../../../components/CallToBook";
import TourCard from "../../../components/TourCard";

export default async function OperatorPage({ params }) {
  const { operator } = await params;

  const operatorData = getOperatorById(operator);
  if (!operatorData) notFound();

  const tours = getToursForOperator(operator);
  const schema = generateSchema("operator", operatorData);
  const embedUrl = buildEmbedUrl(operatorData);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 p-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <OperatorHero operator={operatorData} />
      <div className="mt-6">
        {embedUrl ? <FareHarborEmbed embedUrl={embedUrl} /> : <CallToBook phone={operatorData.contact_phone} />}
      </div>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">Tours by {operatorData.name}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour) => (
            <TourCard key={tour.slug} tour={tour} operator={operatorData} />
          ))}
        </div>
      </section>
    </main>
  );
}
