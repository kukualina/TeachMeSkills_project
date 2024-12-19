const { test, expect } = require("@playwright/test");

test.describe("API Tests for Tretyakov Gallery", () => {
  let URL = "https://shop.tretyakovgallery.ru";
  //let response = await request.get(`${URL}/catalog/knigi`);
  test.beforeAll(async ({ request }) => {
    test("Получить список книг/get/200, @api", async ({ request }) => {
      // Использование токена для авторизации
      let response = await request.get(`${URL}/catalog/knigi`);
      expect(response.status()).toBe(200);
      console.log(response);
    });
    test("Получить список книг/get/200, @api", async ({ request }) => {
      // Использование токена для авторизации
      const response = await request.get(`${URL}/catalog/knigi`);
      //https://shop.tretyakovgallery.ru/catalog/knigi?price_from=100&price_to=13850&collection_ids=27
      // Проверка статуса ответа
      expect(response.status()).toBe(200);
      // Проверка тела ответа (например, что оно содержит массив)
      console.log(body);
      const body = await response.text();
      expect(Array.isArray(body)).toBe(true);
      console.log("Ответ:", body);
    });
  });
});
//let token;
//   test.beforeAll(async ({ request }) => {
//     // Запрос токена (пример запроса, уточните эндпоинт для получения токена)
//     const response = await request.get(`${URL}/catalog/knigi`);
//     // Получение токена из заголовков
//     const headers = response.headers();
//     const body = response.body();
//     //const title = response.title();
//     token = headers["x-challenger"];
//     console.log(token);
//     console.log(headers);
//     console.log(body);

//     // Проверка наличия токена
//     expect(token).toBeUndefined();
//     console.log("Полученный токен:", token);
//   });

//   test("Получить список книг/get/200", async ({ request }) => {
//     // Использование токена для авторизации
//     const response = await request.get(`${URL}/catalog/knigi`, {
//       headers: {
//         "x-challenger": token,
//       },
//     });

//     // Проверка статуса ответа
//     expect(response.status()).toBe(200);
//     // Проверка тела ответа (например, что оно содержит массив)
//     console.log(body);
//     const body = await response.xml();
//     expect(Array.isArray(body)).toBe(true);
//     console.log("Ответ:", body);
//   });

//   //   test("Получить детали книги/get/200", async ({ request }) => {
//   //     // Пример ID книги, замените на реальный
//   //     const bookId = "123"; // Замените на реальный ID книги
//   //     const response = await request.get(`${URL}/catalog/knigi/${bookId}`, {
//   //       headers: {
//   //         "x-challenger": token,
//   //       },
//   //     });

//   //     // Проверка статуса ответа
//   //     expect(response.status()).toBe(200);

//   //     // Проверка тела ответа
//   //     const body = await response.json();
//   //     expect(body).toHaveProperty("id", bookId); // Проверка наличия ID в ответе
//   //     console.log("Детали книги:", body);
//   //   });
// });

// //const BASE_URL = "https://shop.tretyakovgallery.ru"; // Замените на правильный базовый URL API

// // test.describe.only("API challenge", () => {
// //   let URL = "https://shop.tretyakovgallery.ru";
// //   let token;
// //   //   let payload;
// //   //   let database;
// //   //   let xAuthToken;
// //   //   let todo = {
// //   //     title: faker.string.alpha(50),
// //   //     doneStatus: true,
// //   //     description: faker.string.alpha(200),
// //   test.beforeAll(async ({ request }) => {
// //     // Запросить ключ авторизации
// //     let response = await request.post(`${URL}/catalog/knigi`);
// //     let headers = response.headers();
// //     console.log(headers);
// //     // Передаем токен в тест
// //     token = headers["x-challenger"];
// //     expect(headers).toEqual(
// //       expect.objectContaining({ "x-challenger": expect.any(String) })
// //     );
// //     console.log(token);
// //   });
// //   test("Тест №2, Получить список заданий/get/200 @api", async ({ request }) => {
// //     let response = await request.get(`${URL}/catalog/knigi`, {
// //       headers: {
// //         "x-challenger": token,
// //       },
// //     });
// //     let body = await response.json();
// //     let headers = await response.headers();
// //     expect(response.status()).toBe(200);
// //   });
// // });

// // test("navigates to login", async ({ page }) => {
// //   // ...
// //   const response = await page.request.get("https://shop.tretyakovgallery.ru");
// //   await expect(response).toBeOK();
// // });

// // test.describe("API Tests for Tretyakov Gallery Shop @api", () => {
// //   test("Get all products", async ({ request }) => {
// //     let URL = "https://shop.tretyakovgallery.ru";
// //     let token;
// //     let payload;
// //     let database;
// //     let xAuthToken;
// //     const response = await request.get(`${URL}/catalog/knigi/`);
// //     console.log(response);
// //     expect(response.status()).toBe(200);
// //     const data = await response.text();
// //     expect(Array.isArray(data)).toBe(true);
// //     //let URL = "https://shop.tretyakovgallery.ru";

// //     //});
// //     //   test.beforeAll(async ({ request }) => {
// //     //     // Запросить ключ авторизации
// //     //     let response = await request.post(`${URL}/catalog/knigi`);
// //     //     let headers = response.headers();
// //     //     // Передаем токен в тест
// //     //     token = headers["x-challenger"];
// //     //     expect(headers).toEqual(
// //     //       expect.objectContaining({ "x-challenger": expect.any(String) })
// //     //     );
// //     //     console.log(token);
// //     //   });

// //     test("Get product by ID , @api", async ({ request }) => {
// //       const productId = 1; // Замените на существующий ID продукта
// //       const response = await request.get(`${URL}/catalog/knigi${productId}`);
// //       expect(response.status()).toBe(200);
// //       const data = await response.html();
// //       expect(data.id).toBe(productId);
// //     });

// //     test("Search products, @api", async ({ request }) => {
// //       const query = "картина"; // Пример поискового запроса
// //       const response = await request.get(`${URL}/catalog/knigi`, {
// //         params: { q: query },
// //       });
// //       expect(response.status()).toBe(200);
// //       const data = await response.json();
// //       expect(Array.isArray(data)).toBe(true);
// //     });

// //     test("Get categories", async ({ request }) => {
// //       const response = await request.get(`${BASE_URL}/categories`);
// //       expect(response.status()).toBe(200);
// //       const data = await response.json();
// //       expect(Array.isArray(data)).toBe(true);
// //     });

// //     test("Get category by ID", async ({ request }) => {
// //       const categoryId = 1; // Замените на существующий ID категории
// //       const response = await request.get(
// //         `${BASE_URL}/categories/${categoryId}`
// //       );
// //       expect(response.status()).toBe(200);
// //       const data = await response.json();
// //       expect(data.id).toBe(categoryId);
// //     });

// //     test("Create an order", async ({ request }) => {
// //       const orderData = {
// //         items: [{ productId: 1, quantity: 2 }], // Замените на существующий ID продукта
// //         customer: {
// //           name: "Иван Иванов",
// //           email: "ivan@example.com",
// //         },
// //       };
// //       const response = await request.post(`${BASE_URL}/orders, {
// //       data: orderData,
// //     }`);
// //       expect(response.status()).toBe(201);
// //       const data = await response.json();
// //       expect(data).toHaveProperty("id");
// //     });

// //     test("Get order by ID", async ({ request }) => {
// //       const orderId = 1; // Замените на существующий ID заказа
// //       const response = await request.get(`${BASE_URL}/orders/${orderId}`);
// //       expect(response.status()).toBe(200);
// //       const data = await response.json();
// //       expect(data.id).toBe(orderId);
// //     });

// //     test("Update an order", async ({ request }) => {
// //       const orderId = 1; // Замените на существующий ID заказа
// //       const updatedData = { status: "completed" };
// //       const response = await request.patch(`${BASE_URL}/orders/${orderId}, {
// //       data: updatedData,
// //     }`);
// //       expect(response.status()).toBe(200);
// //       const data = await response.json();
// //       expect(data.status).toBe("completed");
// //     });

// //     test("Delete an order", async ({ request }) => {
// //       const orderId = 1; // Замените на существующий ID заказа
// //       const response = await request.delete(`${BASE_URL}/orders/${orderId}`);
// //       expect(response.status()).toBe(204); // Ожидаем статус 204 No Content
// //     });

// //     test("Get user info", async ({ request }) => {
// //       const userId = 1; // Замените на существующий ID пользователя
// //       const response = await request.get(`${BASE_URL}/users/${userId}`);
// //       expect(response.status()).toBe(200);
// //       const data = await response.json();
// //       expect(data.id).toBe(userId);
// //     });
// //   });
// // });
