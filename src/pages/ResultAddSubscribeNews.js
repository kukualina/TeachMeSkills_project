import { SubscribeToTheNews } from "./SubscribeToTheNewsPage";
//import { BasePage } from "./BasePage";

class ResultAddSubscribeNews extends SubscribeToTheNews {
  constructor(page) {
    super(page);
    this.page = page;
    this.addSubscribeResult = this.page
      .getByRole("Вы успешно подписаны на новости!")
      .first();
    //page.getByRole('paragraph')
    this.addSubscribeResult = this.page;
  }
}

module.exports = { ResultAddSubscribeNews };
