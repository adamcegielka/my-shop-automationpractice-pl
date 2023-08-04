import { expect, test } from '@playwright/test';
import { Registration } from 'pages/registration.page';
import { registrationData } from 'test-data/registration.data';
// import { getRandomName } from '@utils/date-names';
// import { getRandomSurname } from '@utils/date-names';

test.describe.only('Testing new user registration form', () => {
  let registration: Registration;

  test.beforeEach(async ({ page }) => {
    registration = new Registration(page);
    await page.goto('/');
    await registration.clickOnSignIn();
  });

  test('009-TC validation of registration form', async ({ page }) => {
    const email = registrationData.userEmailValid;
    const errorMessage = registrationData.threeErrorMessage;

    await registration.inputEmail.fill(email);
    await registration.clickOnCreateAccount();
    await registration.clickRegidter();
    const messageValidation = page.locator('.alert-danger');
    await expect(messageValidation).toContainText(errorMessage);
  });
});
