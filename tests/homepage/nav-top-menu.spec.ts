import { expect, test } from '@playwright/test';

test.describe.only('Go back to homepage by top menu', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test.only('go back to homepage from Women page', async ({ page }) => {
    const menuNavigation = await page.locator('a[title="Women"]');
    await menuNavigation.click();
    await expect(page).toHaveTitle(/Women - My Shop/);
    await page.locator('a[title="My Shop"]');
    await expect(page).toHaveTitle(/My Shop/);
  });
});