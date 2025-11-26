interface Props {
  phone: string;
}

export default function CallToBook({ phone }: Props) {
  return (
    <div className="rounded-xl border border-emerald-500/30 bg-slate-900/60 p-4 text-center">
      <p className="font-semibold text-emerald-300 mb-1">Ready to Book?</p>
      <p className="text-slate-300">Call us at {phone} to reserve your spot.</p>
    </div>
  );
}