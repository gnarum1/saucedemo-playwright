class ProductPage {
  constructor(page) {
    this.page = page;
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
  }

  // recebe o nome do produto (ex: 'Sauce Labs Backpack') e monta o seletor com ele
  async addProductToCart (productName) {
  const name = productName.toLowerCase().replace(/ /g, '-');
  await this.page.locator(`[data-test="add-to-cart-${name}"]`).click();
  }

  // botão "Remove" do produto, usado no teste para conferir se foi adicionado
  getRemoveButton (productName) {
  const name = productName.toLowerCase().replace(/ /g, '-');
  return this.page.locator(`[data-test="remove-${name}"]`);
  }

  async goToCart () {
  await this.cartLink.click();
  }

}

module.exports = { ProductPage };