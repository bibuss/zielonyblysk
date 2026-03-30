export default function RealizacjePage() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="h2">Realizacje</h1>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {['Biuro 600 m² - Tarnów', 'Wspólnota 4 klatki - Mościce', 'Dom po remoncie - Tuchów'].map((item) => (
            <article key={item} className="card">
              <p className="font-semibold">{item}</p>
              <p className="mt-2 text-sm text-slate-600">Efekt premium, raport zdjęciowy i odbiór klienta.</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
