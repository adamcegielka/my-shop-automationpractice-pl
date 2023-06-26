import { test, expect } from "@playwright/test";

test("open the page, check the title and url", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/My Shop/);
  await expect(page).toHaveURL("http://www.automationpractice.pl/index.php");
});

test("click women link and assert", async ({ page }) => {
  await page.goto("/");
  await page.locator('#block_top_menu').getByRole('link', { name: 'Women' }).click();

  await expect(page).toHaveTitle(/Women - My Shop/);
  await expect(page.locator(".cat-name")).toHaveText("Women");
  await expect(page.locator(".shopping_cart")).toBeVisible();
  const searchInput = await page.locator('#search_query_top');
  await expect(searchInput).toBeEmpty();
});
