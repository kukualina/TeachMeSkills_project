import { BasePage } from './BasePage';

class SouvenirsShopList extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;
    this.souvenirName = page.locator('.listing-item-details__title').first();
    this.priceSouvenir = page.locator('.item-price-listing-value').first();
  }

  async clickSouvenir() {
    await this.souvenirName.click();
  }

  async openSouvenirsShopList() {
    await super.open('https://shop.tretyakovgallery.ru/catalog/pazly-i-suveniry');
  }
  async getSouvenirs() {
    const souvenirName = await super.getElementText(this.souvenirName);
    const priceSouvenir = await super.getElementText(this.priceSouvenir);
    return { souvenirName, priceSouvenir };
  }
}

module.exports = { SouvenirsShopList };
