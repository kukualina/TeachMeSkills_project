![alt text](images/allure_report.png)

<h1 align="center">Дипломный проект по автоматизации тестирования сайта на Playwright + JS</h1>

## Содержание:

- <a href="#cases"> Тест-кейсы</a>
- <a href="#autotests"> Запуск автотестов</a>
- <a href="#generateAllureReport"> Генерация отчетов</a>
- <a href="#allureReport"> Пример Allure-отчета</a>

<a id="cases"></a>

## 🕵️‍♂️ Тест-кейсы

Auto:

- Проверка поиска элементов с главной страницы
- Повторная проверка поиска элементов с главной страницы
- Проверка выбора товара из каталога и добавление его в корзину
- Проверка на подписку новостей
- API тесты

<a id="autotests"></a>

---

## ▶️ Запуск автотестов, генерация отчетов

### Запуск тестов из терминала

Для запуска всех тестов использовать команду ниже:

```
npm test
```

Для запуска тестов на API:

```
npx playwright test:api
```

Для запуска тестов на UI:

```
npx playwright test --ui
```

<a id="generateAllureReport"></a>

---

### Генерация отчетов Allure из терминала

Для генерация отчетов использовать команду ниже:

```
npm run allureGenerate
npm run allureOpen


<a id="allureReport"></a>
## <img width="30" style="vertical-align:middle" title="Allure Report" src="media/logo/allure.svg"> </a> Пример <a target="_blank" href="https://jenkins.autotests.cloud/job/001-aldvo-JsPlaywrightFinalWork/22/allure/"> Allure-отчета </a>
<p align="center">
<img title="Allure Report" src="images/allure_report.png">
</p>

```
