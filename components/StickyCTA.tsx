import { phone } from '@/lib/site-data';

export function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white p-3 md:hidden">
      <div className="container flex gap-3">
        <a href={`tel:${phone.replace(/\s/g, '')}`} className="btn-secondary flex-1 px-3 py-2 text-sm">
          Zadzwoń
        </a>
        <a href="#formularz" className="btn-primary flex-1 px-3 py-2 text-sm">
          Wycena w 1 minutę
        </a>
      </div>
    </div>
  );
}
