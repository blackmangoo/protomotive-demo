const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto("http://localhost:3001", { waitUntil: "networkidle0" });

  const outDir = path.join(__dirname, "public", "assets", "screenshots");
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  // Hide the sticky mobile CTA for desktop screenshots
  await page.evaluate(() => {
    const cta = document.querySelector(".md\\:hidden.fixed.bottom-0");
    if (cta) cta.style.display = "none";
  });

  // Top
  await page.screenshot({ path: path.join(outDir, "depth_1_hero.png") });
  
  // Depth 2 (Services)
  await page.evaluate(() => window.scrollBy(0, 1800));
  await new Promise(r => setTimeout(r, 1500)); // wait for GSAP
  await page.screenshot({ path: path.join(outDir, "depth_2_services.png") });
  
  // Depth 3 (More Services/Gallery)
  await page.evaluate(() => window.scrollBy(0, 1800));
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: path.join(outDir, "depth_3_gallery.png") });
  
  // Depth 4 (Contact/Footer)
  await page.evaluate(() => window.scrollBy(0, 1800));
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: path.join(outDir, "depth_4_footer.png") });

  await browser.close();
})();