class productPage {
  constructor(page) {
    this.page = page;
  }

  async adicionarMochila () {
  await this.page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  }

  async irCarrinho () {
  await this.page.click('[data-test="shopping-cart-link"]');
  }

}

module.exports = { productPage };