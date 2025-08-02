import { expect, test } from '@playwright/test';
import { MainPage } from '../src/pages/index';
import { getText } from '../src/utils';
import * as allure from 'allure-js-commons';

const emailName = 'a.kuku@freshauto2.ru';

test('Subscribe To The News', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.openMainPage();
  await mainPage.subscribe(emailName);
  const text = await getText(mainPage.successText);
  await allure.step('Проверить текст успешной подписки', () => {
    expect(text).toBe('Вы успешно подписаны на новости!');
  });
});
