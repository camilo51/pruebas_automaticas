# Pruebas E2E — Automation Exercise

Suite de pruebas end-to-end para el sitio [Automation Exercise](https://automationexercise.com/), implementada con Playwright y JavaScript.

## Cobertura

| Historia | Escenario | Archivo |
| --- | --- | --- |
| HU-02 | Inicio de sesión con credenciales válidas | `tests/login.spec.js` |
| HU-07 | Agregar un producto al carrito y verificarlo | `tests/carrito.spec.js` |

Las pruebas usan una cuenta existente y validan que el nombre de usuario se muestre después de autenticarse. La prueba de carrito agrega el producto **Blue Top** y comprueba que aparezca en el carrito.

## Requisitos

- Node.js 18 o posterior
- npm

## Instalación

1. Instala las dependencias:

   ```bash
   npm install
   ```

2. Instala los navegadores requeridos por Playwright:

   ```bash
   npx playwright install
   ```

3. Crea el archivo de variables de entorno a partir del ejemplo:

   ```bash
   copy .env.example .env
   ```

4. Completa `.env` con una cuenta válida de Automation Exercise:

   ```env
   USUARIO_EMAIL=tu_correo_de_prueba@example.com
   USUARIO_CONTRASENA=tu_contrasena
   USUARIO_NOMBRE=Tu Nombre
   ```

> `.env` contiene datos sensibles y no se incluye en el repositorio.

## Ejecución

Ejecuta toda la suite en modo visible:

```bash
npm test
```

También puedes ejecutar una prueba específica:

```bash
npx playwright test tests/login.spec.js --headed
npx playwright test tests/carrito.spec.js --headed
```

Para ejecutar en modo sin interfaz gráfica, omite `--headed`:

```bash
npx playwright test
```

## Estructura

```text
pruebas-automationexercise/
├── tests/
│   ├── login.spec.js
│   └── carrito.spec.js
├── .env.example
├── package.json
└── README.md
```

## Tecnologías

- [Playwright](https://playwright.dev/)
- JavaScript (CommonJS)
- dotenv
