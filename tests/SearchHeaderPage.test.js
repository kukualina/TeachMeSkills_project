import { expect, test } from "@playwright/test";
import * as allure from "allure-js-commons";
import {
  MainPage,
  ResultSearchPage,
  SearchHeaderPage,
} from "../src/pages/index";
import { getText } from "../src/utils";

const searchTerm = "Пушкин";
const replaySearchTerm = "Сказки";

test.describe("Осуществить поиск элементов", () => {
  test("Осуществить поиск с главной страницы", async ({ page }, testInfo) => {
    const searchHeaderPage = new SearchHeaderPage(page);
    const mainPage = new MainPage(page);
    await mainPage.openMainPage();
    const resultSearchPage = new ResultSearchPage(page);
    await searchHeaderPage.searchData(searchTerm);
    expect(await getText(resultSearchPage.searchResult)).toBe(
      `Результаты поиска: \"${searchTerm}\"`
    );
    await allure.step(
      "Поисковый запрос 'Пушкин' включен в строку url",
      async () => {
        const currentUrl = await page.url();
        console.log("Текущий URL:", currentUrl);
        await expect(currentUrl).toContain(
          "https://shop.tretyakovgallery.ru/search?q=%D0%9F%D1%83%D1%88%D0%BA%D0%B8%D0%BD"
        );
      }
    );
  });

  test("Осуществить повторный поиск с главной страницы", async ({
    page,
  }, testInfo) => {
    const searchHeaderPage = new SearchHeaderPage(page);
    const mainPage = new MainPage(page);
    await mainPage.openMainPage();
    const resultSearchPage = new ResultSearchPage(page);
    await searchHeaderPage.searchData(replaySearchTerm);
    expect(await getText(resultSearchPage.searchReplayResult)).toBe(
      `Результаты поиска: \"${replaySearchTerm}\"`
    );
    await allure.step(
      "Поисковый запрос 'Сказки' включен в строку url",
      async () => {
        const currentUrl = await page.url();
        console.log("Текущий URL:", currentUrl);
        await expect(currentUrl).toContain(
          "https://shop.tretyakovgallery.ru/search?q=%D0%A1%D0%BA%D0%B0%D0%B7%D0%BA%D0%B8"
        );
      }
    );
  });
});
