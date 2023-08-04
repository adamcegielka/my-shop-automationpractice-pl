import { expect, test } from '@playwright/test';
import { Registration } from 'pages/registration.page';
import { registrationData } from 'test-data/registration.data';
// import { getRandomName } from '@utils/date-names';
// import { getRandomSurname } from '@utils/date-names';

test.describe('Testing new user registration form', () => {
  let registration: Registration;
  const email = registrationData.userEmailValid;
  const firstName = registrationData.userFirstNameValid;
  const lastName = registrationData.userLastNameValid;
  const password = registrationData.userPasswordValid;
  const twoErrorMessage = registrationData.twoErrorMessage;
  const oneErrorMessage = registrationData.oneErrorMessage;


  test.beforeEach(async ({ page }) => {
    registration = new Registration(page);
    await page.goto('/');
    await registration.clickOnSignIn();
    await registration.inputEmail.fill(email);
    await registration.clickOnCreateAccount();
  });

  test('009-TC validation of registration form', async () => {
    const errorMessage = registrationData.threeErrorMessage;

    await registration.clickOnRegister();
    const threeMessageValidation = registration.alertErrorMessage;
    await expect(threeMessageValidation).toContainText(errorMessage);
  });

  test('010-TC verification of new user registration with first name only', async () => {
    await registration.inputFirstName.fill(firstName);
    await registration.clickOnRegister();
    const twoMessageValidation = registration.alertErrorMessage;
    await expect(twoMessageValidation).toContainText(twoErrorMessage);
  });

  test('011-TC erification of new user registration with last name only', async () => {
    await registration.inputLastName.fill(lastName);
    await registration.clickOnRegister();
    const twoMessageValidation = registration.alertErrorMessage;
    await expect(twoMessageValidation).toContainText(twoErrorMessage);
  });

  test('012-TC verification of new user registration with password only', async ({ page }) => {
    await page.waitForTimeout(1000);
    await registration.inputPassword.fill(password);
    await registration.clickOnRegister();
    const twoMessageValidation = registration.alertErrorMessage;
    await expect(twoMessageValidation).toContainText(twoErrorMessage);
  });
});
