import { test } from '@playwright/test';
import { Registration } from 'pages/registration.page';

test.describe.skip('Users registration', () => {
  let registration: Registration;

  test.beforeEach(async ({ page }) => {
    registration = new Registration(page);

    await page.goto('/');
    await registration.clickOnSignIn();
  });

  test('user first', async () => {
    const userFirstEmail = 'user-first@example.com';
    const firstName = 'User';
    const lastName = 'First';
    const password = 'abcdef';

    await registration.inputEmail.fill(userFirstEmail);
    await registration.clickOnCreateAccount();
    await registration.inputFirstName.fill(firstName);
    await registration.inputLastName.fill(lastName);
    await registration.inputPassword.fill(password);
    await registration.clickOnRegister();
  });
});
