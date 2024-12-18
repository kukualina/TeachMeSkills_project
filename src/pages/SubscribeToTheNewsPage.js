// pages/HomePage.js
import { BasePage } from "./BasePage";

class SubscribeToTheNews extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;
    this.inputEmailName = page.locator(
      ".b24-form-control b24-form-control-not-empty"
    );
    this.buttonSouvenir = page.getByText("Отправить").first();
  }
  // async clickSubscribe() {
  //   await this.SubscribeName.click();
  // }

  async openSubscribePage() {
    await super.open("https://shop.tretyakovgallery.ru");
  }
  async getSubscribe(emailName) {
    await this.inputEmailName.fill(emailName, { timeout: 200000 });
    await this.buttonSouvenir.click();
  }
}

module.exports = { SubscribeToTheNews };
