import { expect, test } from '@playwright/test';

test.describe('Go back to homepage by top menu', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test.afterEach(async ({ page }) => {
    await page.locator('a[title="My Shop"]');
    await expect(page).toHaveTitle(/My Shop/);
  })

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