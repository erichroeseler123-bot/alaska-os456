import { notFound } from "next/navigation";
import { getTourBySlug, getOperatorById, getRelatedTours, generateSchema, buildEmbedUrl } from "../../../lib/dataLoader";
import FareHarborEmbed from "../../../components/FareHarborEmbed";
import CallToBook from "../../../components/CallToBook";
import RelatedTours from "../../../components/RelatedTours";

export default async function TourPage({ params }) {
  const { slug } = await params;

  const tour = getTourBySlug(slug);
  if (!tour) notFound();

  const operator = getOperatorById(tour.operator_id);
  if (!operator) notFound();

  const related = getRelatedTours(tour.slug, tour.category, tour.port);
  const schema = generateSchema("tour", tour);
  const embedUrl = buildEmbedUrl(operator, tour);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 p-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <h1 className="text-3xl mb-2">{tour.title}</h1>
      <p className="text-slate-300 mb-4">{tour.description_long}</p>

      {embedUrl ? <FareHarborEmbed embedUrl={embedUrl} /> : <CallToBook phone={operator.contact_phone} />}

      <RelatedTours relatedTours={related} />
    </main>
  );
}
