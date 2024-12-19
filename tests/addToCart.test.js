//https://shop.tretyakovgallery.ru/api/v1/cart/add
import { expect, test } from "@playwright/test";
import {
  BookShopList,
  CartPage,
  ItemCardPage,
  SouvenirsShopList,
} from "../src/pages/index";

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
    await expect(page).toHaveURL("https://shop.tretyakovgallery.ru/cart");
    const actualItem = await cartPage.getCartItem();
    await expect(expectItem.bookName).toBe(actualItem.itemName);
    await expect(expectItem.priceBook).toBe(actualItem.price);
  });
  test("add Souvenirs", async ({ page }, testInfo) => {
    const souvenirsShopList = new SouvenirsShopList(page);
    const cartPage = new CartPage(page);
    const itemCardPage = new ItemCardPage(page);
    await souvenirsShopList.openSouvenirsShopList();
    const expectItem = await souvenirsShopList.getSouvenirs();
    await souvenirsShopList.clickSouvenir();
    await itemCardPage.addToCart();
    await cartPage.clickCartLink();
    const actualItem = await cartPage.getCartItem();
    await expect(expectItem.souvenirName).toBe(actualItem.itemName);
    await expect(expectItem.priceSouvenir).toBe(actualItem.price);
  });
});
