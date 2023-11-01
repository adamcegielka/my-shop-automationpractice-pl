import { Page, Locator } from "@playwright/test";

export class LoginUser {
    readonly page: Page;
    readonly buttonSignIn: Locator;
    readonly inputEmail: Locator;
    readonly inputPassword: Locator;
    readonly buttonSignInUser: Locator;

    constructor(page: Page) {
        this.page = page;
        this.buttonSignIn = page.locator('.header_user_info');
        this.inputEmail = page.locator('#email');
        this.inputPassword = page.locator('#passwd');
        this.buttonSignInUser = page.locator('#SubmitLogin');
    }

    async loginUser(userName: string, userPassword: string) {
        await this.buttonSignIn.click();
        await this.inputEmail.type(userName);
        await this.inputPassword.type(userPassword);
        await this.buttonSignInUser.click();
    }
}