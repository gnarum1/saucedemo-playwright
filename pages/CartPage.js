class CartPage {
    constructor(page) {
        this.page = page;
        this.checkoutButton = page.locator('[data-test="checkout"]');
        this.firstNameInput = page.locator('[data-test="firstName"]');
        this.lastNameInput = page.locator('[data-test="lastName"]');
        this.postalCodeInput = page.locator('[data-test="postalCode"]');
        this.continueButton = page.locator('[data-test="continue"]');
        this.finishButton = page.locator('[data-test="finish"]');
        this.successMessage = page.locator('[data-test="complete-header"]');
    }

    async clickCheckout () {
    await this.checkoutButton.click();
    }

    async fillCheckout (first_name, last_name, zip) {
    await this.firstNameInput.fill(first_name);
    await this.lastNameInput.fill(last_name);
    await this.postalCodeInput.fill(zip);
    await this.continueButton.click();
    }

    async finishCheckout () {
    await this.finishButton.click();
    }

}

module.exports = { CartPage }