import { test, expect, defineConfig } from "@playwright/test";
import {
  ReplaySearchHeaderPage,
  ResultReplaySearchPage,
} from "../src/pages/index";
import * as allure from "allure-js-commons";

const replaySearchTerm = "Италия";
const url =
  "https://www.tretyakovgallery.ru/search/?query=%D0%BF%D1%83%D1%88%D0%BA%D0%B8%D0%BD";

test("Осуществить повторный поиск, с Popup", async ({ page }, testInfo) => {
  const replaySearchHeaderPage = new ReplaySearchHeaderPage(page);
  await page.goto(url);

  // await replaySearchHeaderPage.gotoReplaySearchHeaderPage();
  const resultReplaySearchPage = new ResultReplaySearchPage(page);
  await replaySearchHeaderPage.replaySearchData(replaySearchTerm);
  await expect(resultReplaySearchPage.replaySearchResult).toHaveValue(
    replaySearchTerm
    // ,
    // {
    //   timeout: 20000,
    // }
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
    // ,
    // {
    //   timeout: 180000,
    // },
    async () => {
      const currentUrl = await page.url();
      console.log("Текущий URL:", currentUrl);
      await expect(currentUrl).toContain(
        "https://www.tretyakovgallery.ru/search/?query=%D0%98%D1%82%D0%B0%D0%BB%D0%B8%D1%8F"
      );
    }
  );
});
