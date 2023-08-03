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
});