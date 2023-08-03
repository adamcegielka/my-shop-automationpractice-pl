import { expect, test } from '@playwright/test';

test.describe('Go back to the main page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('go back to homepage from Contact us page', async ({ page }) => {
    const contactButton = await page.locator('#contact-link');
    await contactButton.click();
    await expect(page).toHaveTitle(/Contact us - My Shop/);
    await page.locator('a[title="My Shop"]').click();
    await expect(page).toHaveTitle(/My Shop/);
  });

  test('go back to homepage from Sign in page', async ({ page }) => {
    const signInButton = await page.locator('.login');
    await signInButton.click();
    await expect(page).toHaveTitle(/Login - My Shop/);
    await page.locator('#header_logo').click();
    await expect(page).toHaveTitle(/My Shop/);
  });
});
