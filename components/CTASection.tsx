import { company } from '@/lib/site-data';

export function CTASection({ title, body, primaryLabel = 'Zadzwoń teraz', secondaryLabel = 'Darmowa wycena', secondaryHref = '#formularz' }: { title: string; body: string; primaryLabel?: string; secondaryLabel?: string; secondaryHref?: string; }) {
  return (
    <section className="section bg-brand-700 text-white">
      <div className="container text-center">
        <h2 className="h2 text-white">{title}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-brand-100">{body}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a className="btn-secondary" href={company.phoneHref} data-track="cta_phone_section">{primaryLabel}</a>
          <a className="btn-primary bg-white text-brand-700 hover:bg-brand-50" href={secondaryHref} data-track="cta_quote_section">{secondaryLabel}</a>
        </div>
      </div>
    </section>
  );
}
