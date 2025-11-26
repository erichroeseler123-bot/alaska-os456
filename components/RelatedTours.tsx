import { Tour } from '../lib/types';
import TourCard from './TourCard';
import { getOperatorById } from '../lib/dataLoader';

interface Props {
  relatedTours: Tour[];
}

export default function RelatedTours({ relatedTours }: Props) {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">You Might Also Like</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {relatedTours.map((tour) => {
          const operator = getOperatorById(tour.operator_id);
          if (!operator) return null;
          return <TourCard key={tour.slug} tour={tour} operator={operator} />;
        })}
      </div>
    </section>
  );
}