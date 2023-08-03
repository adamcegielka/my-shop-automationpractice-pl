import { expect, test } from '@playwright/test';

test.describe('Go back to the main page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('go back to homepage from contact us page', async ({ page }) => {
    const contactbutton = await page.locator('#contact-link');
    await contactbutton.click();
    await expect(page).toHaveTitle(/Contact us - My Shop/);
    await page.locator('a[title="My Shop"]');
    await expect(page).toHaveTitle(/My Shop/);
  });
});
