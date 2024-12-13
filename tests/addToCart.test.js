//https://shop.tretyakovgallery.ru/api/v1/cart/add
import { test, expect } from "@playwright/test";
import { BookShopList, CartPage, ItemCardPage } from "../src/pages/index";

test("add", async ({ page }, testInfo) => {
  const bookShopList = new BookShopList(page);
  const cartPage = new CartPage(page);
  const itemCardPage = new ItemCardPage(page);
  await bookShopList.openBookShopList();
  const expectItem = await bookShopList.getBook();
  await bookShopList.clickBook();
  await itemCardPage.addToCart();
  await cartPage.cartLink();
  const actualItem = await cartPage.getCartItem();
  // await expect(expectItem.bookName).toBe(actualItem.itemName);
  //await expect(expectItem).toMatchObject(actualItem);
  await expect(expectItem).toEqual(actualItem);
  await expect(expectItem).toBe(actualItem);
  //await cartPage.openCartPage();
});
