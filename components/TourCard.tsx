import { Tour, Operator } from '../lib/types';

interface Props {
  tour: Tour;
  operator: Operator;
}

export default function TourCard({ tour, operator }: Props) {
  return (
    <article className="flex flex-col rounded-xl border border-slate-700 bg-slate-900/70 p-4 shadow-sm">
      {tour.images[0] && <img src={tour.images[0]} alt={tour.title} className="w-full h-32 object-cover rounded-md mb-2" loading="lazy" />}
      <div className="flex items-center justify-between gap-2 mb-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-emerald-300">{operator.name}</span>
        <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">{tour.category}</span>
      </div>
      <h3 className="text-base font-semibold mb-1">{tour.title}</h3>
      <p className="text-xs text-slate-300 mb-2">{tour.description_short}</p>
      <div className="mt-auto flex flex-wrap items-center justify-between gap-2 text-xs text-slate-300">
        <div className="space-y-0.5">
          <p><span className="font-semibold">Duration:</span> {tour.duration}</p>
          <p><span className="font-semibold">From:</span> ${tour.price_from.toLocaleString()} USD</p>
        </div>
        <a href={`/tour/${tour.slug}`} className="inline-flex items-center rounded-full border border-emerald-400/60 px-3 py-1 text-[11px] font-semibold text-emerald-200 hover:bg-emerald-400/10">
          View Details / Book
        </a>
      </div>
    </article>
  );
}