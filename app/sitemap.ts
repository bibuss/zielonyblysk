import type { MetadataRoute } from 'next';
import { adLandingPages, blogPosts, locations, segmentPages, services } from '@/lib/site-data';

const base = 'https://zielonyblysk.pl';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ['', '/o-nas', '/cennik', '/kontakt', '/opinie', '/realizacje', '/faq', '/blog', '/obszar-dzialania'];
  return [
    ...staticPages.map((path) => ({ url: `${base}${path}`, priority: 0.9 })),
    ...services.map((s) => ({ url: `${base}/uslugi/${s.slug}`, priority: 0.8 })),
    ...locations.map((l) => ({ url: `${base}/lokalizacje/${l.slug}`, priority: 0.8 })),
    ...adLandingPages.map((l) => ({ url: `${base}/lp/${l.slug}`, priority: 0.8 })),
    ...segmentPages.map((s) => ({ url: `${base}/${s.slug}`, priority: 0.8 })),
    ...blogPosts.map((post) => ({ url: `${base}/blog/${post.slug}`, priority: 0.7 }))
  ];
}
