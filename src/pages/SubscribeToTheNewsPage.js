// pages/HomePage.js
import { BasePage } from "./BasePage";

class SubscribeToTheNews extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;
    this.clickInputEmail = page.locator(
      ".b24-form-control-container.b24-form-control-icon-after"
    );
    this.inputEmailName = page.locator('input[name="email"]');
    this.buttonSouvenir = page.getByText("Отправить").first();
  }
  // async clickInputEmail() {
  //   await this.ClickInputEmail.click();
  // }

  async openSubscribePage() {
    await super.open("https://shop.tretyakovgallery.ru/");
  }
  async getSubscribe(emailName) {
    await this.clickInputEmail.click();
    await this.inputEmailName.fill(emailName);
    await this.buttonSouvenir.click();
    return emailName;
  }
}

module.exports = { SubscribeToTheNews };
