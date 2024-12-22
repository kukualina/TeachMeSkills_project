import { BasePage } from "./BasePage";

class BookShopList extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;
    this.bookName = page.locator(".listing-item-details__title").first();
    this.priceBook = page.locator(".item-price-listing-value").nth(0);
  }

  async clickBook() {
    await this.bookName.click();
  }

  async openBookShopList() {
    await super.open("https://shop.tretyakovgallery.ru/catalog/knigi");
  }
  async getBook() {
    const bookName = await super.getElementText(this.bookName);
    const priceBook = await super.getElementText(this.priceBook);
    return { bookName, priceBook };
  }
}

module.exports = { BookShopList };
