import { SearchHeaderPage } from "./SearchHeaderPage";

class ResultSearchPage extends SearchHeaderPage {
  constructor(page) {
    super(page);
    this.page = page;
    this.searchResult = this.page.locator(".breadcrumbs-item.active");
    this.searchReplayResult = this.page.locator(".breadcrumbs-item.active");
  }
}

module.exports = { ResultSearchPage };
