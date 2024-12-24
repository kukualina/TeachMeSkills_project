import { expect, test } from "@playwright/test";
import {
  BookShopList,
  CartPage,
  ItemCardPage,
  SouvenirsShopList,
} from "../src/pages/index";
import * as allure from "allure-js-commons";

test.describe("adding items to the shopping cart", () => {
  test("add Book", async ({ page }, testInfo) => {
    const bookShopList = new BookShopList(page);
    const cartPage = new CartPage(page);
    const itemCardPage = new ItemCardPage(page);
    await bookShopList.openBookShopList();
    const expectItem = await bookShopList.getBook();
    await bookShopList.clickBook();
    await itemCardPage.addToCart();
    await cartPage.clickCartLink();
    const actualItem = await cartPage.getCartItem();
    await allure.step(expect(expectItem.bookName).toBe(actualItem.itemName));
    await allure.step(expect(expectItem.priceBook).toBe(actualItem.price));
  });

  test("add Souvenirs to cart", async ({ page }, testInfo) => {
    const souvenirsShopList = new SouvenirsShopList(page);
    const cartPage = new CartPage(page);
    const itemCardPage = new ItemCardPage(page);
    await souvenirsShopList.openSouvenirsShopList();
    const expectItem = await souvenirsShopList.getSouvenirs();
    await souvenirsShopList.clickSouvenir();
    await itemCardPage.addToCart();
    await cartPage.clickCartLink();
    const actualItem = await cartPage.getCartItem();
    await allure.step(
      expect(expectItem.souvenirName).toBe(actualItem.itemName)
    );
    await allure.step(expect(expectItem.priceSouvenir).toBe(actualItem.price));
  });
});
