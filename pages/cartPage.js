class cartPage {
    constructor(page) {
        this.page = page;
    }

    async clicaCheckout () {
    await this.page.click('[data-test="checkout"]');
    }

    async preencheCheckout (first_name, last_name, zip) {
    await this.page.fill('[data-test="firstName"]', first_name);  
    await this.page.fill('[data-test="lastName"]', last_name);  
    await this.page.fill('[data-test="postalCode"]', zip);  
    await this.page.click('[data-test="continue"]');
    }

    async finalizaCheckout () {
    await this.page.click('[data-test="finish"]');
    }

}

module.exports = { cartPage }
