class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('[data-test="username"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
    }

    async accessSite () {
        await this.page.goto('/');
    }

    // digita user, senha e clica botão de entrar
    async login(user, password) {
        await this.usernameInput.fill(user);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}

//para exportar a página para o teste conseguir visualizá-la:
module.exports = { LoginPage }