const beforeAfterProjects = [
  {
    title: 'Sprzątanie mieszkania – Rzędzin',
    image: '/assets/realizacje/1.png'
  },
  {
    title: 'Odgracanie salonu – Mościce',
    image: '/assets/realizacje/2.png'
  },
  {
    title: 'Sprzątanie po remoncie – Skrzyszów',
    image: '/assets/realizacje/3.png'
  }
];

export default function RealizacjePage() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="h2 max-w-3xl">Efekt „wow” po każdym sprzątaniu</h1>
        <p className="mt-5 max-w-4xl text-2xl leading-relaxed text-slate-600 md:ml-24">
          Dokumentujemy realizacje sprzątania mieszkań, biur i lokali usługowych w Tarnowie. Zobacz, jak zmienia
          się przestrzeń po wizycie Zielonego Błysku.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {beforeAfterProjects.map((project) => (
            <article key={project.title} className="card border-0 bg-slate-100 p-9 shadow-none">
              <h2 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900">{project.title}</h2>
              <img
                src={project.image}
                alt={`Realizacja przed i po: ${project.title}`}
                className="mt-8 h-auto w-full rounded-[28px]"
                loading="lazy"
              />
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
