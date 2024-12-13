// basePage.js
const { chromium } = require("playwright");

export class BasePage {
  constructor(page) {
    this.page = page;
  }
  async startBrowser() {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    return context;
  }

  async open(url) {
    await this.page.goto(url);
  }
  async getElementText(element) {
    return await element.textContent();
  }
}
