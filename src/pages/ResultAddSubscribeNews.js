import { SubscribeToTheNews } from "./SubscribeToTheNewsPage";
//import { BasePage } from "./BasePage";

class ResultAddSubscribeNews extends SubscribeToTheNews {
  constructor(page) {
    super(page);
    this.page = page;
    this.addSubscribeResult = this.page
      .getByPlaceholder("Вы успешно подписаны на новости!")
      .first();
  }
}

module.exports = { ResultAddSubscribeNews };
