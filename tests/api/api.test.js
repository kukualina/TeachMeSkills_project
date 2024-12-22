const { test, expect } = require("@playwright/test");
const { json } = require("stream/consumers");

test.describe("API Tests for Tretyakov Gallery GET Knigi", async () => {
  const baseURL = "https://shop.tretyakovgallery.ru/api/v1";
  test("Получить список книг/get/200, @api", async ({ request }) => {
    const response = await request.get(`${baseURL}/categories/knigi`);
    expect(response.status()).toBe(200);
    expect((await response.json()).pagination.count).toBeGreaterThan(1);
    expect((await response.json()).items.data).toHaveLength(
      (await response.json()).pagination.per_page
    );
  });
  test("Положить книгу в корзину/post/200, @api", async ({ request }) => {
    const requestBody = {
      item: { item_id: 14924, quantity: 1 }, // Убедитесь, что ключи совпадают с ожидаемыми
    };
    console.log("Тело запроса:", JSON.stringify(requestBody, null, 2));

    const response = await request.post(`${baseURL}/cart/add`, {
      data: requestBody,
    });

    console.log("Статус ответа:", response.status());
    const responseData = await response.json();
    console.log("Ответ сервера:", JSON.stringify(responseData, null, 2));
    expect(response.status()).toBe(200);
    expect(responseData.cart).toBeDefined();
    const addedItem = responseData.cart.items.find(
      (item) => item.item.data.id === String(requestBody.item.item_id)
    );

    expect(addedItem).toBeDefined();
    expect(addedItem.quantity).toBe(requestBody.item.quantity);
  });
  test("Получить список сувениров/get/200, @api", async ({ request }) => {
    const response = await request.get(`${baseURL}/categories/suveniry`);
    expect(response.status()).toBe(200);
    expect((await response.json()).pagination.count).toBeGreaterThan(1);
    expect((await response.json()).items.data).toHaveLength(
      (await response.json()).pagination.per_page
    );
  });
  test("Положить сувенир в корзину/post/200, @api", async ({ request }) => {
    const requestBody = {
      item: {
        item_id: 14943,
        quantity: 1,
        price: 850,
        title: "Футляр для очков Н.К. Рерих «Канченджунга»",
      },
    };
    const response = await request.post(`${baseURL}/cart/add`, {
      data: requestBody,
    });
    const responseData = await response.json();
    expect(response.status()).toBe(200);
    expect(responseData.cart).toBeDefined();
    const addedItem = responseData.cart.items.find(
      (item) => item.item.data.id === String(requestBody.item.item_id)
    );
    expect(addedItem).toBeDefined();
    expect(addedItem.quantity).toBe(requestBody.item.quantity);
  });
  test("Получить список сладостей/get/200, @api", async ({ request }) => {
    const response = await request.get(`${baseURL}/categories/sladosti`);
    expect(response.status()).toBe(200);
    expect((await response.json()).pagination.count).toBeGreaterThan(1);
    expect((await response.json()).items.data).toHaveLength(
      (await response.json()).pagination.per_page
    );
  });
});
//https://shop.tretyakovgallery.ru/api/v1/categories/suveniry
