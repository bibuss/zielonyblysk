import type { MetadataRoute } from 'next';
import { services } from '@/lib/site-data';

const base = 'https://zielonyblysk.pl';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ['', '/dla-biznesu', '/cennik', '/realizacje', '/opinie', '/faq', '/o-nas', '/kontakt', '/blog'];
  return [
    ...staticPages.map((path) => ({ url: `${base}${path}`, changeFrequency: 'weekly' as const, priority: 0.9 })),
    ...services.map((service) => ({ url: `${base}/uslugi/${service.slug}`, changeFrequency: 'weekly' as const, priority: 0.8 }))
  ];
}
