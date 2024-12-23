import { SearchHeaderPage } from "./SearchHeaderPage";

class ResultSearchPage extends SearchHeaderPage {
  constructor(page) {
    super(page);
    this.page = page;
    this.searchResult = this.page.getByRole("link", {
      name: 'Блокнот на резинке О.А. Кипренский "Портрет поэта Ал...',
    });
    this.searchReplayResult = this.page.locator("a").filter({
      hasText: "«Сказки А.С. Пушкина в отражении лаковых миниатюр»",
    });
  }
}

module.exports = { ResultSearchPage };
