import { test } from '@playwright/test';
import { Registration } from 'pages/registration.page';
import { getRandomEmail } from '@utils/data-email';
import { getRandomFirstName } from '@utils/date-user';
import { getRandomLastName } from '@utils/date-user';
import { getRandomPassword } from '@utils/date-user';
import { getRandomDayNumber } from '@utils/data-dates';
import { getRandomMonthNumber } from '@utils/data-dates';
import { getYearBirthAdult } from '@utils/data-dates';

test.describe('Testing a new user registration form with random data and date of birth', () => {
  let registration: Registration;
  let randomFirstName: string;
  let randomLastName: string;
  let randomPassword: string;
  let randomDay: string;
  let randomMonth: string;
  let yearBirthAdult: string;

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
    randomDay = (await getRandomDayNumber()).toString();
    randomMonth = (await getRandomMonthNumber()).toString();
    yearBirthAdult = (await getYearBirthAdult()).toString();
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

  test('022-TC verification of new user registration with all data', async () => {
    await registration.titleMr.click();
    await registration.inputFirstName.fill(randomFirstName);
    await registration.inputLastName.fill(randomLastName);
    await registration.inputPassword.fill(randomPassword);
    await registration.dateOfBirthDays.selectOption(randomDay);
    await registration.dateOfBirthMonths.selectOption(randomMonth);
    await registration.dateOfBirthYears.selectOption(yearBirthAdult);
    await registration.checkboxNewsletter.click();
    await registration.clickOnRegister();
    await registration.assertMyAccount();
    await registration.assertAccountHasBeenCreated();
  });
});
