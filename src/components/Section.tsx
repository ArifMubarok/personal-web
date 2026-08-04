export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16">
      <div className="mb-3 h-1 w-10 rounded-full bg-accent" />
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}
