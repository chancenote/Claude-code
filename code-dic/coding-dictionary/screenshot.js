const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });

  // 1. Main page (light mode)
  await page.goto('https://coding-dic.vercel.app', { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(r => setTimeout(r, 2500));
  await page.screenshot({ path: 'screenshot-main-light.png', fullPage: true });
  console.log('1. Main page (light) saved');

  // 2. Search for API
  const buttons = await page.$$('button');
  for (const btn of buttons) {
    const text = await btn.evaluate(el => el.textContent);
    if (text && text.trim() === 'API') {
      await btn.click();
      break;
    }
  }
  await new Promise(r => setTimeout(r, 2500));
  await page.screenshot({ path: 'screenshot-result-light.png', fullPage: true });
  console.log('2. Result page (light) saved');

  // 3. Dark mode toggle
  const darkBtn = await page.$('button[aria-label*="다크"]');
  if (darkBtn) await darkBtn.click();
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: 'screenshot-result-dark.png', fullPage: true });
  console.log('3. Result page (dark) saved');

  // 4. History page
  await page.goto('https://coding-dic.vercel.app/history', { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({ path: 'screenshot-history.png', fullPage: true });
  console.log('4. History page saved');

  await browser.close();
})();
