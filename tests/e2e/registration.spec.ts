import { expect, test } from '@playwright/test';
import { Registration } from '../../pages/registration.page';

test.describe.only('user registration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('validation of the e-mail address input field', async ({ page }) => {
    const registration = new Registration(page);

    await registration.bottonSignIn.click();
    await registration.bottonCreateAccount.click();
    const EmailFieldValidation = await page.locator('#create_account_error');
    await expect(EmailFieldValidation).toContainText('Invalid email address.');
  });
});
