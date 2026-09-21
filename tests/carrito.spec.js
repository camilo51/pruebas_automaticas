const { test, expect } = require('@playwright/test');
require('dotenv').config();

test('HU-07 - Agregar producto al carrito', async ({ page }) => {
  const correo = process.env.USUARIO_EMAIL;
  const contrasena = process.env.USUARIO_CONTRASENA;
  const nombreUsuario = process.env.USUARIO_NOMBRE;

  await page.goto('https://automationexercise.com/');

  await page.getByRole('link', { name: 'Signup / Login' }).click();

  await page.locator('[data-qa="login-email"]').fill(correo);
  await page.locator('[data-qa="login-password"]').fill(contrasena);
  await page.locator('[data-qa="login-button"]').click();

  await expect(page.getByText(`Logged in as ${nombreUsuario}`)).toBeVisible();

  await page.getByRole('link', { name: 'Products' }).click();

  await expect(page.getByText('All Products')).toBeVisible();

  await page.locator('a.add-to-cart[data-product-id="1"]').first().click();

  await expect(page.getByText('Your product has been added to cart.')).toBeVisible();

  await page.getByRole('link', { name: 'View Cart' }).click();

  await expect(page.locator('#cart_info')).toContainText('Blue Top');
});
