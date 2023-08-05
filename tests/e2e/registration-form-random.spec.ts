import { test } from '@playwright/test';
import { Registration } from 'pages/registration.page';
import { getRandomEmail } from '@utils/data-helpers';
import { registrationData } from 'test-data/registration.data';
import { getRandomFirstName } from '@utils/date-user';
import { getRandomLastName } from '@utils/date-user';
import { getRandomPassword } from '@utils/date-user';

test.describe('Testing a new user registration form with random data @failTest', () => {
  let registration: Registration;

  test.beforeEach(async ({ page }) => {
    registration = new Registration(page);
    const randomEmail = await getRandomEmail();

    await page.goto('/');
    await registration.clickOnSignIn();
    await registration.inputEmail.fill(randomEmail);
    await registration.clickOnCreateAccount();
  });

  test('017-TC verification of new user registration with one space in the first name field', async () => {
    const randomLastName = await getRandomLastName();
    const randomPassword = await getRandomPassword();
    const oneSpace = registrationData.oneSpace;

    await registration.inputFirstName.fill(oneSpace);
    await registration.inputLastName.fill(randomLastName);
    await registration.inputPassword.fill(randomPassword);
    await registration.clickOnRegister();
    await registration.asserOneErrorMessage();
  });

  test('018-TC verification of new user registration with one space in last name field', async () => {
    const randomFirstName = await getRandomFirstName();
    const randomPassword = await getRandomPassword();
    const oneSpace = registrationData.oneSpace;

    await registration.inputFirstName.fill(randomFirstName);
    await registration.inputLastName.fill(oneSpace);
    await registration.inputPassword.fill(randomPassword);
    await registration.clickOnRegister();
    await registration.asserOneErrorMessage();
  })
});
