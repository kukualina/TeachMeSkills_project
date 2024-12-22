// mainPage.js
import { BasePage } from "./BasePage";

export class MainPage extends BasePage {
  constructor(page) {
    super(page);
    this.searchIconHeader = page.getByLabel("Поиск");
    this.addSubscribeResult = this.page
      .getByRole("Вы успешно подписаны на новости!")
      .first();
    this.addSubscribeResult = this.page;
    this.inputEmailName = page.locator('input[name="email"]');
    this.subscribeButton = page.getByText("Отправить").first();
    this.successText = page
      .getByText("Вы успешно подписаны на новости!")
      .first();
  }

  async openMainPage() {
    super.open("https://shop.tretyakovgallery.ru/");
  }

  async serchButton() {
    await this.searchIconHeader.click();
  }

  async subscribe(emailName) {
    await this.inputEmailName.click();
    await this.inputEmailName.fill(emailName);
    await this.subscribeButton.click();
    return emailName;
  }
}

module.exports = { MainPage };
