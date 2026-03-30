import { FullLeadForm } from '@/components/LeadForm';
import { company } from '@/lib/site-data';

export default function KontaktPage(){return <main className='section'><div className='container grid gap-8 lg:grid-cols-2'><div className='card'><h1 className='h2'>Kontakt</h1><p className='mt-3'>Telefon: <a href={company.phoneHref} className='font-semibold'>{company.phone}</a></p><p>E-mail: {company.email}</p><p className='mt-3 text-slate-700'>Obsługujemy Tarnów i okolice do 30 km. Wycena bezpłatna.</p></div><FullLeadForm/></div></main>}
