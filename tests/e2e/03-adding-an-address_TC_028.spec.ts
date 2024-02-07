import { test } from '@playwright/test';
import { LoginUser } from 'pages/login.page';
import { registrationData } from 'test-data/registration.data';
import { Registration } from 'pages/registration.page';

test.describe('Adding an address', () => {
  let loginUser: LoginUser;
  let registration: Registration;

  test.beforeEach('', async ({ page }) => {
    loginUser = new LoginUser(page);
    registration = new Registration(page);
    const userEmail = registrationData.userEmail;
    const userPassword = registrationData.userPassword;

    await page.goto('/');
    await loginUser.loginUser(userEmail, userPassword);
  });

  test('028-TC validation of the address addition form', async ({ page }) => {
    await page.getByRole('link', { name: ' Add my first address' }).click();
    await page.click('#submitAddress');
    await registration.assertFiveErrorMessage();
  });
});
