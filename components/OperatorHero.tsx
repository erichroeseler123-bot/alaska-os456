import { Operator } from '../lib/types';

interface Props {
  operator: Operator;
}

export default function OperatorHero({ operator }: Props) {
  return (
    <section className="space-y-3">
      <p className="text-xs uppercase tracking-[0.25em] text-emerald-300/70">Operator Profile</p>
      <h1 className="text-3xl sm:text-4xl font-semibold">{operator.name}</h1>
      <p className="text-sm sm:text-base text-slate-300 max-w-2xl">{operator.description}</p>
    </section>
  );
}