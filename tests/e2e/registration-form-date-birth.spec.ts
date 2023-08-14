import { test } from '@playwright/test';
import { Registration } from 'pages/registration.page';
import { getRandomEmail } from '@utils/data-email';
import { getRandomFirstName } from '@utils/date-user';
import { getRandomLastName } from '@utils/date-user';
import { getRandomPassword } from '@utils/date-user';

test.describe('dd', () => {
  let registration: Registration;
  let randomFirstName: string;
  let randomLastName: string;
  let randomPassword: string;

  test.beforeEach(async ({ page }) => {
    registration = new Registration(page);
    const randomEmail = await getRandomEmail();

    await page.goto('/');
    await registration.clickOnSignIn();
    await registration.inputEmail.fill(randomEmail);
    await registration.clickOnCreateAccount();

    randomFirstName = await getRandomFirstName();
    randomLastName = await getRandomLastName();
    randomPassword = await getRandomPassword();
  });

  test('021-TC verification of new user registration with only non required data', async () => {
    await registration.titleMr.click();
    await registration.dateOfBirthDays.selectOption('10');
    await registration.dateOfBirthMonths.selectOption('5');
    await registration.dateOfBirthYears.selectOption('2002');
    await registration.checkboxNewsletter.click();
    await registration.clickOnRegister();
    await registration.assertThreeErrorMessage();
  });
});
