import { notFound } from "next/navigation";
import { getOperatorById, getToursForOperator } from "../../../lib/dataLoader";
import OperatorHero from "../../../components/OperatorHero";
import FareHarborEmbed from "../../../components/FareHarborEmbed";
import CallToBook from "../../../components/CallToBook";
import TourCard from "../../../components/TourCard";
import type { Operator, Tour } from "../../../lib/types";

export default async function OperatorPage({ params }: { params: { operator: string } }) {
  const operatorId = params.operator;
  const operatorData: Operator | null = await getOperatorById(operatorId);

  if (!operatorData) return notFound();

  const tours: Tour[] = await getToursForOperator(operatorId);
  const embedUrl = operatorData.embed_base_url;

  // Schema JSON-LD
  const schema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: operatorData.name,
    description: operatorData.description,
    url: `https://welcometoalaskatours.com/operator/${operatorId}`,
    telephone: operatorData.contact_phone,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <OperatorHero operator={operatorData} />

      <section className="mt-8 max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Available Tours</h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour) => (
            <TourCard key={tour.slug} tour={tour} operator={operatorData} />
          ))}
        </div>

        <div className="mt-10">
          {embedUrl ? (
            <FareHarborEmbed embedUrl={embedUrl} />
          ) : (
            <CallToBook phone={operatorData.contact_phone} />
          )}
        </div>
      </section>
    </>
  );
}
