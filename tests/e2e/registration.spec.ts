import { expect, test } from '@playwright/test';
import { Registration } from '../../pages/registration.page';
import { registrationData } from '../../test-data/registration.data';
import { getRandomEmail } from '@utils/data-helpers';

test.describe('Registration: verification email field for account creation', () => {
  let registration: Registration;

  test.beforeEach(async ({ page }) => {
    registration = new Registration(page);

    await page.goto('/');
    await registration.bottonSignIn.click();
  });

  test('000-TC validation e-mail address input field', async ({ page }) => {
    registration = new Registration(page);
    const validationEmailField = 'Invalid email address.';

    await registration.bottonCreateAccount.click();
    const emailFieldValidation = registration.validationEmail;
    await expect(emailFieldValidation).toContainText(validationEmailField);
  });

  test('001-TC validation e-mail address with specs at beginning', async ({ page }) => {
    registration = new Registration(page);
    const emailWithSpace = registrationData.userEmailWithSpace;
    const validationEmailField = 'Invalid email address.';

    await registration.inputEmail.fill(emailWithSpace);
    await registration.bottonCreateAccount.click();
    const emailFieldValidation = registration.validationEmail;
    await expect(emailFieldValidation).toContainText(validationEmailField);
  });

  test('002-TC verification e-mail address with dot at beginning', async ({ page }) => {
    registration = new Registration(page);
    const emailWithDot = registrationData.userEmailWithDot;
    const validationEmailField = 'Invalid email address.';

    await registration.inputEmail.fill(emailWithDot);
    await registration.bottonCreateAccount.click();
    const emailFieldValidation = registration.validationEmail;
    await expect(emailFieldValidation).toContainText(validationEmailField);
  });

  test('003-TC verification e-mail address with hyphen at beginning @failTest', async ({ page }) => {
    registration = new Registration(page);
    const emailWithDash = registrationData.userEmailWithDash;
    const validationEmailField = 'Invalid email address.';

    await registration.inputEmail.fill(emailWithDash);
    await registration.bottonCreateAccount.click();
    const emailFieldValidation = registration.validationEmail;
    await expect(emailFieldValidation).toContainText(validationEmailField);
  });

  test('004-TC verification e-mail address with underscore at beginning @failTest', async ({ page }) => {
    registration = new Registration(page);
    const emailWithUnderscore = registrationData.userEmailWithUnderscore;
    const validationEmailField = 'Invalid email address.';

    await registration.inputEmail.fill(emailWithUnderscore);
    await registration.bottonCreateAccount.click();
    const emailFieldValidation = registration.validationEmail;
    await expect(emailFieldValidation).toContainText(validationEmailField);
  });

  test('005-TC verification e-mail address with special apostrophe sign', async ({ page }) => {
    registration = new Registration(page);
    const emailWitApostrof = registrationData.userEmailWithApostropheSign;
    const validationEmailField = 'Invalid email address.';

    await registration.inputEmail.fill(emailWitApostrof);
    await registration.bottonCreateAccount.click();
    const emailFieldValidation = registration.validationEmail;
    await expect(emailFieldValidation).toContainText(validationEmailField);
  });

  test('006-TC verificatione e-mail address with special equation sign @failTest', async ({ page }) => {
    registration = new Registration(page);
    const emailWitEquation = registrationData.userEmailWithEquationSign;
    const validationEmailField = 'Invalid email address.';

    await registration.inputEmail.fill(emailWitEquation);
    await registration.bottonCreateAccount.click();
    const emailFieldValidation = registration.validationEmail;
    await expect(emailFieldValidation).toContainText(validationEmailField);
  });

  test('007-TC verificatione e-mail address with special ampersand sign @failTest', async ({ page }) => {
    registration = new Registration(page);
    const emailWitAmpersand = registrationData.userEmailWithAmpersandSign;
    const validationEmailField = 'Invalid email address.';

    await registration.inputEmail.fill(emailWitAmpersand);
    await registration.bottonCreateAccount.click();
    const emailFieldValidation = registration.validationEmail;
    await expect(emailFieldValidation).toContainText(validationEmailField);
  });

  test('008-TC verificatione correct e-mail address', async ({ page }) => {
    registration = new Registration(page);
    const emailRandom = await getRandomEmail();
    const validationAuthentication = 'Your personal information';

    await registration.inputEmail.fill(emailRandom);
    await registration.bottonCreateAccount.click();
    const pageAuthentication = registration.validationPageAuthentication;
    await expect(pageAuthentication).toContainText(validationAuthentication);
  });
});
