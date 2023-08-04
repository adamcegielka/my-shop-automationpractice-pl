import { Page, Locator } from '@playwright/test';

export class Registration {
  readonly page: Page;
  readonly buttonSignIn: Locator;
  readonly buttonCreateAccount: Locator;
  readonly buttonRegister: Locator;
  readonly validationEmail: Locator;
  readonly inputEmail: Locator;
  readonly validationPageAuthentication: Locator;

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

  async clickRegidter() {
    await this.buttonRegister.click();
  }
}
