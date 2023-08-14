import { Page, Locator, expect } from '@playwright/test';

export class Registration {
  readonly page: Page;
  readonly buttonSignIn: Locator;
  readonly buttonCreateAccount: Locator;
  readonly buttonRegister: Locator;
  readonly validationEmail: Locator;
  readonly inputEmail: Locator;
  readonly validationPageAuthentication: Locator;
  readonly inputFirstName: Locator;
  readonly inputLastName: Locator;
  readonly inputPassword: Locator;
  readonly alertErrorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.buttonSignIn = page.locator('.header_user_info');
    this.buttonCreateAccount = page.locator('#SubmitCreate');
    this.buttonRegister = page.locator('#submitAccount');
    this.validationEmail = page.locator('#create_account_error');
    this.inputEmail = page.locator('#email_create');
    this.validationPageAuthentication = page.getByRole('heading', {
      name: 'Your personal information',
    });
    this.inputFirstName = page.locator('#customer_firstname');
    this.inputLastName = page.locator('#customer_lastname');
    this.inputPassword = page.locator('#passwd');
    this.alertErrorMessage = page.locator('.alert-danger');
  }

  async loadHomePage() {
    await this.page.goto('http://www.automationpractice.pl');
  }

  // Buttons
  async clickOnSignIn() {
    await this.buttonSignIn.click();
  }

  async clickOnCreateAccount() {
    await this.buttonCreateAccount.click();
  }

  async clickOnRegister() {
    await this.buttonRegister.click();
  }

  // Assertions
  async assertOneErrorMessage() {
    await expect(this.alertErrorMessage).toContainText('There is 1 error');
  }

  async assertTwoErrorMessage() {
    await expect(this.alertErrorMessage).toContainText('There are 2 errors');
  }

  async assertThreeErrorMessage() {
    await expect(this.alertErrorMessage).toContainText('There are 3 errors');
  }
}
