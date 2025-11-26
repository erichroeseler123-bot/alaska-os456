import { Port } from '../lib/types';

interface Props {
  port: Port;
}

export default function PortHero({ port }: Props) {
  return (
    <section className="space-y-3">
      <p className="text-xs uppercase tracking-[0.25em] text-emerald-300/70">Welcome to Alaska Tours</p>
      <h1 className="text-3xl sm:text-4xl font-semibold">{port.name} Shore Excursions & Tours</h1>
      <p className="text-sm sm:text-base text-slate-300 max-w-2xl">{port.tagline}</p>
    </section>
  );
}