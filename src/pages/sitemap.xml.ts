import type { APIRoute } from 'astro';

const routes = [
  '',
  'about',
  'services',
  'programs',
  'contact',
  'privacy',
  'terms',
];

export const GET: APIRoute = ({ site }) => {
  if (!site) {
    return new Response('Site URL is not configured.', { status: 500 });
  }

  const lastmod = new Date().toISOString().split('T')[0];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => {
    const url = new URL(route, site).toString();
    const priority = route === '' ? '1.0' : '0.8';
    return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
