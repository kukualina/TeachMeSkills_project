import { test, expect } from "@playwright/test";
import { SubscribeToTheNews, ResultAddSubscribeNews } from "../src/pages/index";

const emailName = "a.kuku@freshauto2.ru";

test("Subscribe To The News", async ({ page }, testInfo) => {
  const subscribeToTheNews = new SubscribeToTheNews(page);
  //await page.goto(url);
  const resultAddSubscribeNews = new ResultAddSubscribeNews(page);
  await subscribeToTheNews.getSubscribe(emailName);
  await expect(resultAddSubscribeNews.subscribeToTheNews).toHaveValue(
    emailName
  );
});
