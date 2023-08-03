import { test, expect } from '@playwright/test';

test('open the page and asserts homepage', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/My Shop/);
  await expect(page).toHaveURL('http://www.automationpractice.pl/index.php');
  await expect(page.locator('#search_query_top')).toBeEmpty();
  await expect(page.locator('#search_query_top')).toHaveAttribute('type', 'text');
  await expect(page.locator('.shopping_cart')).toBeVisible();
  await expect(page.getByText('Custom Block')).toBeVisible();
  await expect(page.locator('#facebook_block')).toHaveText('Follow us on Facebook');
  await expect(page.locator('.tab-content')).toContainText('No featured products');
  await expect(page.locator('.bottom-footer')).toHaveCount(1);
  await expect(page.locator('.footer-container')).toBeTruthy();
  await expect(page.locator('#contact-link')).toBeEnabled();
  await expect(page.locator('#newsletter-input')).toHaveValue('Enter your e-mail');
});
