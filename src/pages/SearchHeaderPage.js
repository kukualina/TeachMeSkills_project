// pages/HomePage.js
import { BasePage } from "./BasePage";

class SearchHeaderPage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;
    this.searchIconButton = page
      .locator("ul")
      .filter({ hasText: "+7 (495) 957-07-47shop@" })
      .locator("a")
      .nth(2);
    this.searchInput = page.getByPlaceholder("Найти");
    this.searchEnter = page.getByPlaceholder("Найти");
  }

  async gotoSearchHeaderPage() {
    await this.page.goto("https://www.tretyakovgallery.ru/");
  }
  searchData = async (searchTerm, replaySearchTerm) => {
    await this.searchIconButton.click();
    await this.searchInput.fill(searchTerm, replaySearchTerm);
    await this.searchEnter.press("Enter");
  };
}

module.exports = { SearchHeaderPage };
