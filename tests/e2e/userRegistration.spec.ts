import { test } from '@playwright/test';
import { Registration } from 'pages/registration.page';
import { registrationData } from 'test-data/registration.data';

test.describe('Users registration', () => {
  let registration: Registration;

  test.beforeEach(async ({ page }) => {
    registration = new Registration(page);

    await page.goto('/');
    await registration.clickOnSignIn();
  });

  test('registration user', async () => {
    const userEmail = registrationData.userEmail;
    const firstName = registrationData.firstName;
    const lastName = registrationData.lastName;
    const userPassword = registrationData.userPassword;

    await registration.inputEmail.fill(userEmail);
    await registration.clickOnCreateAccount();
    await registration.inputFirstName.fill(firstName);
    await registration.inputLastName.fill(lastName);
    await registration.inputPassword.fill(userPassword);
    await registration.clickOnRegister();
  });
});
