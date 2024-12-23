import { test, expect, defineConfig } from "@playwright/test";
import {
  SearchHeaderPage,
  MainPage,
  ResultSearchPage,
  ReplaySearchHeaderPage,
} from "../src/pages/index";
import * as allure from "allure-js-commons";
const searchTerm = "Пушкин";
const replaySearchTerm = "Сказки";

test.describe("Осуществить поиск элементов", () => {
  test("Осуществить поиск с главной страницы", async ({ page }, testInfo) => {
    const searchHeaderPage = new SearchHeaderPage(page);
    const mainPage = new MainPage(page);
    await mainPage.openMainPage();
    const resultSearchPage = new ResultSearchPage(page);
    await searchHeaderPage.searchData(searchTerm);
    await expect(
      page.getByRole("link", {
        name: 'Блокнот на резинке О.А. Кипренский "Портрет поэта Ал...',
      })
    ).toBeVisible();
    const allResultCountValue = await resultSearchPage.allResultCount.evaluate(
      (el) =>
        parseInt(el.textContent, 10, {
          timeout: 18000,
        })
    );
    console.log(allResultCountValue);
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
    await expect(
      page.locator("a").filter({
        hasText: "«Сказки А.С. Пушкина в отражении лаковых миниатюр»",
      })
    ).toBeVisible();

    const allResultCountValue = await resultSearchPage.allResultCount.evaluate(
      (el) =>
        parseInt(el.textContent, 10, {
          timeout: 18000,
        })
    );

    console.log(allResultCountValue);
    await expect(allResultCountValue).toBeGreaterThan(0);
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
