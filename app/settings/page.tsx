import Link from "next/link";
import ports from "../data/ports.json";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 p-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to Alaska Tours</h1>
      <p className="mb-4 text-slate-300">Explore Alaska’s cruise ports:</p>

      <ul className="space-y-2">
        {ports.map((p) => (
          <li key={p.id}>
            <Link className="text-emerald-300 hover:underline" href={`/port/${p.id}`}>
              {p.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
