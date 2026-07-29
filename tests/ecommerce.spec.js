const { test, expect } = require('@playwright/test');
const { loginPage } = require('../pages/loginPage');
const { productPage } = require('../pages/productPage');
const { cartPage } = require('../pages/cartPage');

test.beforeEach(async ({ page }) => {
  const login = new loginPage(page);
  
  await login.acessarSite();
  await login.logar('standard_user', 'secret_sauce');
});

//cenário login
test('Logar com sucesso', async ({ page }) => {
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('Adicionar produtos no carrinho', async ({ page }) => {
  //Cria a ligação com a nossa página de login
  const produto = new productPage(page);

  //Adiciona o produto no carrinho
  await produto.adicionarMochila();

  //Confere se o produto foi adicionado
  const botaoRemove = page.locator('[data-test="remove-sauce-labs-backpack"]');
  await expect(botaoRemove).toHaveText('Remove');
});

test('Finalizar compra', async ({ page }) => {
  const produto = new productPage(page);
  const checkout = new cartPage(page);

  //Prepara o carrinho e verifica se está no carrinho
  await produto.adicionarMochila();
  await produto.irCarrinho();
  await expect(page).toHaveURL('https://www.saucedemo.com/cart.html'); //verifica redirecionamento para o carrinho
  await expect(page.getByText('Your Cart')).toBeVisible(); //verifica se está mesmo no carrinho
  await expect(page.getByText('Sauce Labs Backpack')).toBeVisible(); //verifica se item do carrinho é mochila


  //Primeira etapa checkout
  await checkout.clicaCheckout();
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html'); //verifica redirecionamento para checkout 1
  await checkout.preencheCheckout('Maria', 'Silva', '12345678'); 


  //Segunda etapa checkout - Preenchimento de dados
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
  await expect(page.getByText('Checkout: Overview')).toBeVisible();
  await expect(page.getByText('Sauce Labs Backpack')).toBeVisible(); //verifica se item do checkout é mochila
  await checkout.finalizaCheckout();

  //Confere pedido finalizado
  const mensagemSucesso = page.locator('[data-test="complete-header"]');
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
  await expect(mensagemSucesso).toHaveText('Thank you for your order!');
});
