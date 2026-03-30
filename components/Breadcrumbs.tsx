import Link from 'next/link';

type Item = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Item[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-600">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, idx) => (
          <li key={`${item.label}-${idx}`} className="flex items-center gap-2">
            {idx > 0 && <span>/</span>}
            {item.href ? <Link href={item.href} className="hover:text-brand-700">{item.label}</Link> : <span>{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
