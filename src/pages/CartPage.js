// pages/HomePage.js
import { BasePage } from "./BasePage";

class CartPage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;
    this.itemName = page.locator(".cart-item-title", { timeout: 100000 });
    this.price = page.locator(".float-left.d-none.d-md-block");
    const cartLink = page.getByRole("link", { href: "/cart" }).nth(3);
    this.countBook = page.locator(".cart-tab-nav.cart-tab-nav-active");
  }
  // async openCartPage() {
  //   await super.open("https://shop.tretyakovgallery.ru/cart", {
  //     timeout: 100000,
  //   });
  // }

  async getCartItem() {
    const itemName = await super.getElementText(this.itemName);
    const price = await super.getElementText(this.price);
    const countBook = await super.getElementText(this.countBook);
    // добавить сюда еще количество
    return { itemName, price, countBook };
  }

  cartLink = async () => {
    await this.basketButton.click();
  };
}

module.exports = { CartPage };
