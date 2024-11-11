import { test, expect, defineConfig } from "@playwright/test";
import {
  SearchHeaderPage,
  MainPage,
  ResultSearchPage,
} from "../src/pages/index";
import * as allure from "allure-js-commons";

const searchTerm = "Пушкин";
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
