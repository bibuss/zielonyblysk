const beforeAfterProjects = [
  {
    title: 'Kuchnia po remoncie – Tarnów',
    description: 'Usunięcie pyłu budowlanego, odpadów i doczyszczenie zabudowy kuchennej.',
    image: '/assets/realizacje/kuchnia-przed-po.svg'
  },
  {
    title: 'Salon po imprezie – Mościce',
    description: 'Kompleksowe sprzątanie salonu, mycie podłogi i odświeżenie strefy wypoczynkowej.',
    image: '/assets/realizacje/salon-przed-po.svg'
  },
  {
    title: 'Sypialnia przed wynajmem – Tuchów',
    description: 'Przygotowanie pokoju do przekazania najemcy: porządek, aranżacja i efekt premium.',
    image: '/assets/realizacje/sypialnia-przed-po.svg'
  }
];

export default function RealizacjePage() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="h2">Realizacje</h1>
        <p className="mt-3 max-w-3xl text-slate-600">Zobacz rzeczywiste efekty naszych usług w układzie „przed i po”.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {beforeAfterProjects.map((project) => (
            <article key={project.title} className="card overflow-hidden p-0">
              <img src={project.image} alt={`Realizacja przed i po: ${project.title}`} className="h-auto w-full" loading="lazy" />
              <div className="p-6">
                <p className="font-semibold">{project.title}</p>
                <p className="mt-2 text-sm text-slate-600">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
