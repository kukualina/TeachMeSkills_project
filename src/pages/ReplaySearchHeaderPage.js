// pages/HomePage.js
import { BasePage } from './BasePage';

class ReplaySearchHeaderPage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;
    this.ReplaySearchButton = this.page
      .locator('ul')
      .filter({ hasText: 'ru expand_more' })
      .getByLabel('Поиск');
    this.ReplaySearchInput = this.page.getByPlaceholder('Что вы ищете?');
    this.ReplaySearchEnter = this.page.getByPlaceholder('Что вы ищете?');
    this.ReplaySearchСlear = this.page.locator('form').getByLabel('Поиск');
  }
  replaySearchData = async (replaySearchTerm) => {
    await this.ReplaySearchButton.click();
    await this.ReplaySearchInput.fill(replaySearchTerm);
    await this.ReplaySearchInput.press('Enter');
  };
}

module.exports = { ReplaySearchHeaderPage };
