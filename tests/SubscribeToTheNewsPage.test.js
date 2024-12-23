import { test } from "@playwright/test";
import { MainPage } from "../src/pages/index";
import { getText } from "../src/utils";

const emailName = "a.kuku@freshauto2.ru";

test("Subscribe To The News", async ({ page }) => {
  const mainPage = new MainPage(page);

  await mainPage.openMainPage();
  await mainPage.subscribe(emailName);

  const text = await getText(mainPage.successText);
  expect(text).toBe("Вы успешно подписаны на новости!");
});
