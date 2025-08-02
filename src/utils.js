// export const getText = async (element) => {
//   return await element.textContent();
// };
// export async function getText(locator) {
// const element = await locator.elementHandle();
// if (!element) throw new Error('Элемент не найден');
// return await element.textContent();
// }

export async function getText(locator) {
  if (!locator) throw new Error('Локатор не передан');
  const element = await locator.elementHandle();
  if (!element) throw new Error('Элемент не найден');
  return await element.textContent();
}
