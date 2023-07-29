import { expect, test } from '@playwright/test';
import { Registration } from '../../pages/registration.page';
import { registrationData } from '../../test-data/registration.data';

test.describe.only('verification email field for account creation', () => {
  let registration: Registration;

  test.beforeEach(async ({ page }) => {
    registration = new Registration(page);

    await page.goto('/');
    await registration.bottonSignIn.click();
  });

  test('validation of the e-mail address input field', async ({ page }) => {
    registration = new Registration(page);
    const validationEmailField = 'Invalid email address.';

    await registration.bottonCreateAccount.click();
    const EmailFieldValidation = registration.validationEmail;
    await expect(EmailFieldValidation).toContainText(validationEmailField);
  });

  test('email validation with initial space character', async ({ page }) => {
    registration = new Registration(page);
    const emailWithSpace = registrationData.userEmailWithSpace;
    const validationEmailField = 'Invalid email address.';

    await registration.inputEmail.fill(emailWithSpace);
    await registration.bottonCreateAccount.click();
    const EmailFieldValidation = registration.validationEmail;
    await expect(EmailFieldValidation).toContainText(validationEmailField);
  });

  test('email validation with initial dot character', async ({ page }) => {
    registration = new Registration(page);
    const emailWithDot = registrationData.userEmailWithDot;
    const validationEmailField = 'Invalid email address.';

    await registration.inputEmail.fill(emailWithDot);
    await registration.bottonCreateAccount.click();
    const EmailFieldValidation = registration.validationEmail;
    await expect(EmailFieldValidation).toContainText(validationEmailField);
  });

  test('email validation with initial dash character', async ({ page }) => {
    registration = new Registration(page);
    const emailWithDash = registrationData.userEmailWithDash;
    const validationEmailField = 'Invalid email address.';

    await registration.inputEmail.fill(emailWithDash);
    await registration.bottonCreateAccount.click();
    const EmailFieldValidation = registration.validationEmail;
    await expect(EmailFieldValidation).toContainText(validationEmailField);
  });
});
