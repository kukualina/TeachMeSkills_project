// pages/HomePage.js
import { BasePage } from "./BasePage";

class ItemCardPage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;
    this.addToCartButton = page.locator(".bttn.btn-gold");
  }
  //("button", { name: "В корзину" })
  //bttn btn-gold

  async addToCart() {
    await this.addToCartButton.click();
  }
}

module.exports = { ItemCardPage };
