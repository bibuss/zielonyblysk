const reviews = [
  'Bardzo dokładna firma. Mieszkanie po remoncie wyglądało jak nowe.',
  'Biuro sprzątane punktualnie, bez przestojów i z pełną dokumentacją.',
  'Współpraca ze wspólnotą przebiega wzorowo, dobra komunikacja i elastyczność.'
];

export default function OpiniePage() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="h2">Opinie klientów</h1>
        <div className="mt-8 space-y-4">{reviews.map((r) => <blockquote className="card" key={r}>„{r}”</blockquote>)}</div>
      </div>
    </main>
  );
}
