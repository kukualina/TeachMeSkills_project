import { test, expect, defineConfig } from "@playwright/test";
import {
  SearchHeaderPage,
  MainPage,
  ResultSearchPage,
  ReplaySearchHeaderPage,
  ResultReplaySearchPage,
} from "../src/pages/index";
import * as allure from "allure-js-commons";

const searchTerm = "Пушкин";
const replaySearchTerm = "Италия";
const url = "https://www.tretyakovgallery.ru/";

test("Осуществить поиск с главной страницы", async ({ page }, testInfo) => {
  const searchHeaderPage = new SearchHeaderPage(page);
  await page.goto(url);
  const resultSearchPage = new ResultSearchPage(page);
  await searchHeaderPage.searchData(searchTerm);
  await expect(resultSearchPage.searchResult).toHaveValue(searchTerm);
  const allResultCountValue = await resultSearchPage.allResultCount.evaluate(
    (el) =>
      parseInt(el.textContent, 10, {
        timeout: 18000,
      })
  );
  console.log(allResultCountValue);
  await expect(allResultCountValue).toBeGreaterThan(0);
  await allure.step(
    "Поисковый запрос 'Пушкин' включен в строку url",
    async () => {
      const currentUrl = await page.url();
      console.log("Текущий URL:", currentUrl);
      await expect(currentUrl).toContain(
        "query=%D0%9F%D1%83%D1%88%D0%BA%D0%B8%D0%BD"
      );
    }
  );
});
//const replaySearchTerm = "Италия";
//const url = "https://www.tretyakovgallery.ru/search/?query=%D0%BF%D1%83%D1%88%D0%BA%D0%B8%D0%BD";

test("Осуществить повторный поиск, с Popup", async ({ page }, testInfo) => {
  const replaySearchHeaderPage = new ReplaySearchHeaderPage(page);
  await page.goto(url);
  const resultReplaySearchPage = new ResultReplaySearchPage(page);
  await replaySearchHeaderPage.replaySearchData(replaySearchTerm);
  await expect(resultReplaySearchPage.replaySearchResult).toHaveValue(
    replaySearchTerm
  );

  const allResultCountValue =
    await resultReplaySearchPage.replayAllResultCount.evaluate((el) =>
      parseInt(el.textContent, 10, {
        timeout: 180000,
      })
    );
  console.log(allResultCountValue);
  await expect(allResultCountValue).toBeGreaterThan(0);

  await allure.step(
    "Поисковый запрос 'Италия' включен в строку url",
    async () => {
      const currentUrl = await page.url();
      console.log("Текущий URL:", currentUrl);
      await expect(currentUrl).toContain(
        "https://www.tretyakovgallery.ru/search/?query=%D0%98%D1%82%D0%B0%D0%BB%D0%B8%D1%8F"
      );
    }
  );
});
