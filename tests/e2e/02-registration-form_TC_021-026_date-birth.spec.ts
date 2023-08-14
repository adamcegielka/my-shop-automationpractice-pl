import { test } from '@playwright/test';
import { Registration } from 'pages/registration.page';
import { getRandomEmail } from '@utils/data-email';
import { getRandomFirstName } from '@utils/date-user';
import { getRandomLastName } from '@utils/date-user';
import { getRandomPassword } from '@utils/date-user';
import { getRandomDayNumber } from '@utils/data-dates';
import { getRandomMonthNumber } from '@utils/data-dates';
import { getYearBirthAdult } from '@utils/data-dates';
import { getNumberDayNext } from '@utils/data-dates';
import { getCurrentDayNumber } from '@utils/data-dates';
import { getCurrentMonthNumber } from '@utils/data-dates';
import { getCurrentYear } from '@utils/data-dates';

test.describe('Testing a new user registration form with random data and date of birth', () => {
  let registration: Registration;
  let randomFirstName: string;
  let randomLastName: string;
  let randomPassword: string;
  let randomDay: string;
  let randomMonth: string;
  let yearBirthAdult: string;
  let dayNext: string;
  let currentDay: string;
  let currentMonth: string;
  let currentYear: string;

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
    dayNext = (await getNumberDayNext()).toString();
    currentDay = (await getCurrentDayNumber()).toString();
    currentMonth = (await getCurrentMonthNumber()).toString();
    currentYear = (await getCurrentYear()).toString();
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

  test('023-TC verification of new user registration with tomorrows date of birth', async () => {
    await registration.titleMr.click()
    await registration.inputFirstName.fill(randomFirstName);
    await registration.inputLastName.fill(randomLastName);
    await registration.inputPassword.fill(randomPassword);
    await registration.dateOfBirthDays.selectOption(dayNext);
    await registration.dateOfBirthMonths.selectOption(currentMonth);
    await registration.dateOfBirthYears.selectOption(currentYear);
    await registration.checkboxNewsletter.click();
    await registration.clickOnRegister();
    await registration.assertOneErrorMessage();
    await registration.assertInvalidDateOfBirthe();
  });

  test('024-TC verification of new user registration with todays date of birth @failTest', async () => {
    await registration.titleMr.click();
    await registration.inputFirstName.fill(randomFirstName);
    await registration.inputLastName.fill(randomLastName);
    await registration.inputPassword.fill(randomPassword);
    await registration.dateOfBirthDays.selectOption(currentDay);
    await registration.dateOfBirthMonths.selectOption(currentMonth);
    await registration.dateOfBirthYears.selectOption(currentYear);
    await registration.checkboxNewsletter.click();
    await registration.clickOnRegister();
    await registration.assertOneErrorMessage();
    await registration.assertInvalidDateOfBirthe();
  });

  test('025-TC verification of new user registration with 1900 birth year @failTest', async () => {
    await registration.titleMr.click();
    await registration.inputFirstName.fill(randomFirstName);
    await registration.inputLastName.fill(randomLastName);
    await registration.inputPassword.fill(randomPassword);
    await registration.dateOfBirthDays.selectOption(randomDay);
    await registration.dateOfBirthMonths.selectOption(randomMonth);
    await registration.dateOfBirthYears.selectOption('1900');
    await registration.checkboxNewsletter.click();
    await registration.clickOnRegister();
    await registration.assertOneErrorMessage();
    await registration.assertInvalidDateOfBirthe();
  });

  test('026-TC verification of new user registration with date 31.02.2004 @failTest', async () => {
    await registration.titleMr.click();
    await registration.inputFirstName.fill(randomFirstName);
    await registration.inputLastName.fill(randomLastName);
    await registration.inputPassword.fill(randomPassword);
    await registration.dateOfBirthDays.selectOption('31');
    await registration.dateOfBirthMonths.selectOption('2');
    await registration.dateOfBirthYears.selectOption('2004');
    await registration.checkboxNewsletter.click();
    await registration.clickOnRegister();
    await registration.assertOneErrorMessage();
    await registration.assertInvalidDateOfBirthe();
  });
});
