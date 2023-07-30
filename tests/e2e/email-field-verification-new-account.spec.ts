import { expect, test } from '@playwright/test';
import { Registration } from '../../pages/registration.page';
import { registrationData } from '../../test-data/registration.data';

test.describe('verification email field for account creation', () => {
  let registration: Registration;

  test.beforeEach(async ({ page }) => {
    registration = new Registration(page);

    await page.goto('/');
    await registration.bottonSignIn.click();
  });

  test('000-TC validation of the e-mail address input field', async ({ page }) => {
    registration = new Registration(page);
    const validationEmailField = 'Invalid email address.';

    await registration.bottonCreateAccount.click();
    const EmailFieldValidation = registration.validationEmail;
    await expect(EmailFieldValidation).toContainText(validationEmailField);
  });

  test('001-TC email validation with initial space character', async ({ page }) => {
    registration = new Registration(page);
    const emailWithSpace = registrationData.userEmailWithSpace;
    const validationEmailField = 'Invalid email address.';

    await registration.inputEmail.fill(emailWithSpace);
    await registration.bottonCreateAccount.click();
    const EmailFieldValidation = registration.validationEmail;
    await expect(EmailFieldValidation).toContainText(validationEmailField);
  });

  test('002-TC email validation with initial dot character', async ({ page }) => {
    registration = new Registration(page);
    const emailWithDot = registrationData.userEmailWithDot;
    const validationEmailField = 'Invalid email address.';

    await registration.inputEmail.fill(emailWithDot);
    await registration.bottonCreateAccount.click();
    const EmailFieldValidation = registration.validationEmail;
    await expect(EmailFieldValidation).toContainText(validationEmailField);
  });

  test('003-TC email validation with initial dash character', async ({ page }) => {
    registration = new Registration(page);
    const emailWithDash = registrationData.userEmailWithDash;
    const validationEmailField = 'Invalid email address.';

    await registration.inputEmail.fill(emailWithDash);
    await registration.bottonCreateAccount.click();
    const EmailFieldValidation = registration.validationEmail;
    await expect(EmailFieldValidation).toContainText(validationEmailField);
  });

  test('004-TC email validation with initial underscore character', async ({ page }) => {
    registration = new Registration(page);
    const emailWithUnderscore = registrationData.userEmailWithUnderscore;
    const validationEmailField = 'Invalid email address.';

    await registration.inputEmail.fill(emailWithUnderscore);
    await registration.bottonCreateAccount.click();
    const EmailFieldValidation = registration.validationEmail;
    await expect(EmailFieldValidation).toContainText(validationEmailField);
  });

  test('005-TC verificatione-mail address with special apostrophe sign', async ({ page }) => {
    registration = new Registration(page);
    const emailWitApostrof = registrationData.userEmailWithApostropheSign;
    const validationEmailField = 'Invalid email address.';

    await registration.inputEmail.fill(emailWitApostrof);
    await registration.bottonCreateAccount.click();
    const EmailFieldValidation = registration.validationEmail;
    await expect(EmailFieldValidation).toContainText(validationEmailField);
  })
});
