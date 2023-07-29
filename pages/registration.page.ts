import { Page } from '@playwright/test';

export class Registration {
  constructor(private page: Page) {}

  bottonSignIn = this.page.locator('.header_user_info');
  bottonCreateAccount = this.page.locator('#SubmitCreate');
}
