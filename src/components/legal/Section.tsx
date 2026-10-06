export function Page({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="container mx-auto px-6 py-24 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">{title}</h1>
      <div className="space-y-8 text-gray-300 leading-relaxed">{children}</div>
    </div>
  );
}

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-white mb-3">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
