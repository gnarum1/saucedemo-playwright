const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductPage } = require('../pages/ProductPage');
const { CartPage } = require('../pages/CartPage');

test.beforeEach(async ({ page }) => {
  const login = new LoginPage(page);
  
  await login.accessSite();
  await login.login('standard_user', 'secret_sauce');
});

//cenário login
test('Logar com sucesso', async ({ page }) => {
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('Adicionar produtos no carrinho', async ({ page }) => {
  //Cria a ligação com a nossa página de login
  const product = new ProductPage(page);

  //Adiciona o produto no carrinho
  await product.addProductToCart('Sauce Labs Backpack');

  //Confere se o produto foi adicionado
  const removeButton = product.getRemoveButton('Sauce Labs Backpack');
  await expect(removeButton).toHaveText('Remove');
});

test('Finalizar compra', async ({ page }) => {
  const product = new ProductPage(page);
  const checkout = new CartPage(page);

  //Prepara o carrinho e verifica se está no carrinho
  await product.addProductToCart('Sauce Labs Backpack');
  await product.goToCart();
  await expect(page).toHaveURL('https://www.saucedemo.com/cart.html'); //verifica redirecionamento para o carrinho
  await expect(page.getByText('Your Cart')).toBeVisible(); //verifica se está mesmo no carrinho
  await expect(page.getByText('Sauce Labs Backpack')).toBeVisible(); //verifica se item do carrinho é mochila


  //Primeira etapa checkout
  await checkout.clickCheckout();
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html'); //verifica redirecionamento para checkout 1
  await checkout.fillCheckout('Maria', 'Silva', '12345678'); 


  //Segunda etapa checkout - Preenchimento de dados
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
  await expect(page.getByText('Checkout: Overview')).toBeVisible();
  await expect(page.getByText('Sauce Labs Backpack')).toBeVisible(); //verifica se item do checkout é mochila
  await checkout.finishCheckout();

  //Confere pedido finalizado
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
  await expect(checkout.successMessage).toHaveText('Thank you for your order!');
});