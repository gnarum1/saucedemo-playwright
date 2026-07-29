class loginPage {
    constructor(page) {
        this.page = page;
    }

    async acessarSite () {
        await this.page.goto('https://www.saucedemo.com/');
    }

    // digita user, senha e clica botão de entrar
    async logar(user, senha) {
        await this.page.fill('[data-test="username"]', user);
        await this.page.fill('[data-test="password"]', senha);
        await this.page.click('[data-test="login-button"]');
    }
}

//para exportar a página para o teste conseguir visualizá-la:
module.exports = { loginPage }

