const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://lakhwan.com';

function generateSitemap() {
  const postsJsonPath = path.join(__dirname, '../public/posts.json');
  const sitemapPath = path.join(__dirname, '../public/sitemap.xml');

  const posts = JSON.parse(fs.readFileSync(postsJsonPath, 'utf8'));

  const staticPages = [
    '',
    '/blog',
  ];

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages.map(page => `
  <url>
    <loc>${BASE_URL}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
  ${posts.map(post => `
  <url>
    <loc>${BASE_URL}/blog/${post.slug}</loc>
    <lastmod>${post.date}</lastmod>
    <priority>0.7</priority>
  </url>`).join('')}
</urlset>`;

  fs.writeFileSync(sitemapPath, sitemapContent.trim());
  console.log('✅ sitemap.xml generated successfully!');
}

generateSitemap();
