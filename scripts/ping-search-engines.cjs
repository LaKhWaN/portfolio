const https = require('https');
const fs = require('fs');
const path = require('path');

const KEY = 'e325f4fcdb2b8a73934ab607c43f36e1';
const HOST = 'lakhwan.com';

async function pingIndexNow() {
  const postsJsonPath = path.join(__dirname, '../public/posts.json');
  const posts = JSON.parse(fs.readFileSync(postsJsonPath, 'utf8'));

  const urls = [
    `https://${HOST}/`,
    `https://${HOST}/blog`,
    ...posts.map(post => `https://${HOST}/blog/${post.slug}`)
  ];

  const data = JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList: urls
  });

  const engines = [
    'www.bing.com',
    'yandex.com',
    'search.naver.com'
  ];

  console.log('🚀 Pinging search engines via IndexNow...');

  for (const engine of engines) {
    const options = {
      hostname: engine,
      path: '/indexnow',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': data.length
      }
    };

    const req = https.request(options, (res) => {
      console.log(`📡 [${engine}] Status: ${res.statusCode}`);
    });

    req.on('error', (error) => {
      console.error(`❌ [${engine}] Error:`, error);
    });

    req.write(data);
    req.end();
  }
}

pingIndexNow();
