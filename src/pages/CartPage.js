// pages/HomePage.js
import { BasePage } from "./BasePage";

class CartPage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;
    //this.itemName = page.locator(".cart-item-title", { timeout: 100000 });
    this.priceBook = page.locator(".float-left.d-none.d-md-block");
    this.cartLink = page.getByRole("link", { href: "/cart" }).nth(3);
    this.countBook = page.locator(".cart-tab-nav.cart-tab-nav-active");
    // this.basketButton = page.locator(".top-menu__link.cart-link").first();
    this.basketButton = page.locator(".icon-cart");
  }
  //icon-cart
  async getCartItem() {
    const itemName = await super.getElementText(this.itemName);
    const priceBook = await super.getElementText(this.price);
    const countBook = await super.getElementText(this.countBook);
    const basketButton = await super.getElementText(this.basketButton);

    // добавить сюда еще количество
    return { itemName, priceBook, countBook, basketButton };
  }

  clickCartLink = async () => {
    await this.basketButton.click();
  };
}

module.exports = { CartPage };
