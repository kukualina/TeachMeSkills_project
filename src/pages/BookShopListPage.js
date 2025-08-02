import { BasePage } from './BasePage';

class BookShopList extends BasePage {
  constructor(page) {
    super(page);
    this.bookName = page.locator('.listing-item-details__title').nth(4);
    this.priceBook = page.locator('.item-price-listing-value').nth(4);
  }

  async clickBook() {
    await this.bookName.click();
  }

  async openBookShopList() {
    await super.open('https://shop.tretyakovgallery.ru/catalog/knigi');
  }
  async getBook() {
    const bookName = await super.getElementText(this.bookName);
    const priceBook = await super.getElementText(this.priceBook);
    return { bookName, priceBook };
  }
}

module.exports = { BookShopList };
