import Link from "next/link";
import ports from "../../data/ports.json";   // FIXED PATH

export default function SettingsPage() {
  return (
    <main className="p-6 space-y-6 text-slate-200">
      <h1 className="text-2xl font-bold">Alaska OS — Settings</h1>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Available Ports (from ports.json)</h2>

        <div className="grid gap-3">
          {ports.map((p: any) => (
            <div
              key={p.slug}
              className="rounded-lg border border-slate-700 bg-slate-900/60 p-4"
            >
              <p className="text-lg font-semibold">{p.name}</p>
              <p className="text-sm text-slate-400">{p.tagline}</p>

              <Link
                href={`/port/${p.slug}`}
                className="text-emerald-300 text-sm hover:underline mt-2 inline-block"
              >
                View Port →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
