// Regenerates public/og.png: node scripts/og/render.cjs  (needs playwright)
const { chromium } = require('playwright'); const path = require('path');
(async () => { const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1729, height: 910 } });
await p.goto('file:///' + path.join(__dirname, 'og.html').replace(/\\/g, '/')); await p.waitForTimeout(500);
await p.screenshot({ path: path.join(__dirname, '../../public/og.png') }); await b.close(); })();
