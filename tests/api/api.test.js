const { test, expect } = require("@playwright/test");

//const BASE_URL = "https://shop.tretyakovgallery.ru"; // Замените на правильный базовый URL API

test.describe("API Tests for Tretyakov Gallery Shop @api", () => {
  test("Get all products", async ({ request }) => {
    let URL = "https://shop.tretyakovgallery.ru";
    let token;
    let payload;
    let database;
    let xAuthToken;
    const response = await request.get(`${URL}/catalog/knigi/`);
    console.log(response);
    expect(response.status()).toBe(200);
    const data = await response.json();
    expect(Array.isArray(data)).toBe(true);
    //let URL = "https://shop.tretyakovgallery.ru";

    //});
    //   test.beforeAll(async ({ request }) => {
    //     // Запросить ключ авторизации
    //     let response = await request.post(`${URL}/catalog/knigi`);
    //     let headers = response.headers();
    //     // Передаем токен в тест
    //     token = headers["x-challenger"];
    //     expect(headers).toEqual(
    //       expect.objectContaining({ "x-challenger": expect.any(String) })
    //     );
    //     console.log(token);
    //   });

    test("Get product by ID , @api", async ({ request }) => {
      const productId = 1; // Замените на существующий ID продукта
      const response = await request.get(`${URL}/catalog/knigi${productId}`);
      expect(response.status()).toBe(200);
      const data = await response.html();
      expect(data.id).toBe(productId);
    });

    test("Search products, @api", async ({ request }) => {
      const query = "картина"; // Пример поискового запроса
      const response = await request.get(`${URL}/catalog/knigi`, {
        params: { q: query },
      });
      expect(response.status()).toBe(200);
      const data = await response.json();
      expect(Array.isArray(data)).toBe(true);
    });

    test("Get categories", async ({ request }) => {
      const response = await request.get(`${BASE_URL}/categories`);
      expect(response.status()).toBe(200);
      const data = await response.json();
      expect(Array.isArray(data)).toBe(true);
    });

    test("Get category by ID", async ({ request }) => {
      const categoryId = 1; // Замените на существующий ID категории
      const response = await request.get(
        `${BASE_URL}/categories/${categoryId}`
      );
      expect(response.status()).toBe(200);
      const data = await response.json();
      expect(data.id).toBe(categoryId);
    });

    test("Create an order", async ({ request }) => {
      const orderData = {
        items: [{ productId: 1, quantity: 2 }], // Замените на существующий ID продукта
        customer: {
          name: "Иван Иванов",
          email: "ivan@example.com",
        },
      };
      const response = await request.post(`${BASE_URL}/orders, {
      data: orderData,
    }`);
      expect(response.status()).toBe(201);
      const data = await response.json();
      expect(data).toHaveProperty("id");
    });

    test("Get order by ID", async ({ request }) => {
      const orderId = 1; // Замените на существующий ID заказа
      const response = await request.get(`${BASE_URL}/orders/${orderId}`);
      expect(response.status()).toBe(200);
      const data = await response.json();
      expect(data.id).toBe(orderId);
    });

    test("Update an order", async ({ request }) => {
      const orderId = 1; // Замените на существующий ID заказа
      const updatedData = { status: "completed" };
      const response = await request.patch(`${BASE_URL}/orders/${orderId}, {
      data: updatedData,
    }`);
      expect(response.status()).toBe(200);
      const data = await response.json();
      expect(data.status).toBe("completed");
    });

    test("Delete an order", async ({ request }) => {
      const orderId = 1; // Замените на существующий ID заказа
      const response = await request.delete(`${BASE_URL}/orders/${orderId}`);
      expect(response.status()).toBe(204); // Ожидаем статус 204 No Content
    });

    test("Get user info", async ({ request }) => {
      const userId = 1; // Замените на существующий ID пользователя
      const response = await request.get(`${BASE_URL}/users/${userId}`);
      expect(response.status()).toBe(200);
      const data = await response.json();
      expect(data.id).toBe(userId);
    });
  });
});
