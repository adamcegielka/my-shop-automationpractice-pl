import { test } from '@playwright/test';
import { Registration } from 'pages/registration.page';

test('027-TC verification of new user registration with already registered email', async ({ page }) => {
  const registration = new Registration(page);
  const registeredEmail = 'user-first@example.com';

  await page.goto('/');
  await registration.clickOnSignIn();
  await registration.inputEmail.fill(registeredEmail);
  await registration.clickOnCreateAccount();
  await registration.alertCreateAccount();
});
