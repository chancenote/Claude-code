const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch({
            headless: "new",
            args: ['--no-sandbox']
        });
        const page = await browser.newPage();
        await page.setViewport({ width: 1280, height: 800 });

        console.log('Navigating to http://localhost:3000...');
        await page.goto('http://localhost:3000', {
            waitUntil: 'networkidle0',
            timeout: 30000
        });

        // Wait for Next.js to hydrate
        await new Promise(r => setTimeout(r, 2000));

        const path = 'current-preview.png';
        await page.screenshot({ path });
        console.log(`Screenshot saved to ${path}`);

        await browser.close();
    } catch (error) {
        console.error('Error taking screenshot:', error);
        process.exit(1);
    }
})();
