const { test, expect } = require('@playwright/test');
require('dotenv').config();

test('HU-02 - Iniciar sesión válido', async ({ page }) => {
  const correo = process.env.USUARIO_EMAIL;
  const contrasena = process.env.USUARIO_CONTRASENA;
  const nombreUsuario = process.env.USUARIO_NOMBRE;

  await page.goto('https://automationexercise.com/');

  await page.getByRole('link', { name: 'Signup / Login' }).click();

  await expect(
    page.getByRole('heading', { name: 'Login to your account' })
  ).toBeVisible();

  await page.locator('[data-qa="login-email"]').fill(correo);
  await page.locator('[data-qa="login-password"]').fill(contrasena);
  await page.locator('[data-qa="login-button"]').click();

  await expect(page.getByText(`Logged in as ${nombreUsuario}`)).toBeVisible();
});
