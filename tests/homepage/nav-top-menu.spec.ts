import { expect, test } from '@playwright/test';

test.describe('Go back to homepage by top menu', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test.afterEach(async ({ page }) => {
    await page.locator('a[title="My Shop"]');
    await expect(page).toHaveTitle(/My Shop/);
  });

  test('go back to homepage from Women page', async ({ page }) => {
    const womenButton = await page.locator('a[title="Women"]');
    await womenButton.click();
    await expect(page).toHaveTitle(/Women - My Shop/);
  });

  test('go back to homepage from Dresses page', async ({ page }) => {
    const dressesButton = await page.getByRole('link', { name: 'Dresses', exact: true });
    await dressesButton.click();
    await expect(page.locator('#categories_block_left')).toBeVisible();
  });

  test('go back to homepage from T-shirts page', async ({ page }) => {
    const tShirtsButton = await page.getByRole('link', { name: 'T-shirts' });
    await tShirtsButton.click();
    await expect(page.locator('.category-name')).toHaveText('T-shirts');
  });

  test('go back to homepage from Blog page', async ({ page }) => {
    const blogButton = await page.getByRole('link', { name: 'Blog' });
    await blogButton.click();

    const page2Promise = page.waitForEvent('popup');
    const page2 = await page2Promise;
    await expect(page2).toHaveURL('https://prestashop.com/blog/');
    await page.bringToFront();
  });
});

test.describe('Go back to homepage by category of top menu', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test.afterEach(async ({ page }) => {
    await page.locator('a[title="My Shop"]');
    await expect(page).toHaveTitle(/My Shop/);
  });

  test('go back to homepage from Top of Women category', async ({ page }) => {
    const categoryWomen = await page.locator('a[title="Women"]');
    await categoryWomen.hover();
    const chosenCategory = await page.locator('a[title="Tops"]');
    await chosenCategory.click();
    await expect(page).toHaveTitle(/Tops - My Shop/);
  });

  // go back to homepage from all of Women category
  const womenCategories = [
    'Tops',
    'T-shirts',
    'Blouses',
    'Dresses',
    'Casual Dresses',
    'Evening Dresses',
    'Summer Dresses',
  ];

  for (const category of womenCategories) {
    test(`go back to homepage from ${category} of Women category`, async ({ page }) => {
      const categoryWomen = await page.locator('a[title="Women"]');
      await categoryWomen.hover();
      const chosenCategory = await page.locator(`a[title="${category}"]`).nth(0);
      await chosenCategory.click();
      await expect(page).toHaveTitle(`${category} - My Shop`);
    });
  }

  // go back to homepage from all of Dresses category
  const dressesCategories = [
    'Casual Dresses',
    'Evening Dresses',
    'Summer Dresses',
  ];

  for (const category of dressesCategories) {
    test(`go back to homepage from ${category} of Dresses category`, async ({ page }) => {
      const categoryWomen = await page.getByRole('link', { name: 'Dresses', exact: true });
      await categoryWomen.hover();
      const chosenCategory = await page.getByRole('link', { name: `${category}` }).nth(0);
      await chosenCategory.click();
      await expect(page).toHaveTitle(`${category} - My Shop`);
    });
  }
});
