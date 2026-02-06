# 📋 Промт для создания нового React + TypeScript + Vite проекта с полной конфигурацией

## Обзор проекта
Это современный React 19 + TypeScript + Vite проект с использованием Emotion для стилизации, React Query для управления состоянием API, i18next для интернационализации и интеграцией с Telegram Web App.

---

## 1. Инициализация проекта
```bash
npm create vite@latest my-project -- --template react-ts
cd my-project
npm install
```

---

## 2. Установка всех зависимостей

### Основные зависимости:
```bash
npm install @dnd-kit/core @dnd-kit/sortable @emotion/react @emotion/styled @floating-ui/react @hookform/resolvers @maptiler/sdk @tanstack/react-query @telegram-auth/react @types/lodash dotenv i18next i18next-http-backend lodash motion react react-dom react-dropzone react-easy-crop react-error-boundary react-hook-form react-i18next react-router react-select react-swipeable react-toastify react-transition-group swiper uuid yup
```

### Dev зависимости:
```bash
npm install -D @emotion/babel-plugin @eslint/js @types/node @types/react @types/react-dom @types/react-transition-group @vitejs/plugin-react eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-react-hooks eslint-plugin-react-refresh globals prettier stylelint stylelint-config-standard typescript typescript-eslint vite vite-plugin-svgr
```

---

## 3. Конфигурационные файлы

### 3.1 package.json
```json
{
  "name": "front-pikvik",
  "private": true,
  "version": "2.2.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "format:check": "prettier --check src/ --config .prettierrc.json",
    "format:write": "prettier --write src/ --config .prettierrc.json",
    "lint-css": "stylelint './src/**/*.tsx'",
    "lint-css:win": "stylelint ./src/**/*.tsx",
    "format-css": "npx stylelint '**/*.tsx' --fix",
    "format-css:win": "npx stylelint \"**/*.tsx\" --fix"
  },
  "dependencies": {
    "@dnd-kit/core": "^6.3.1",
    "@dnd-kit/sortable": "^10.0.0",
    "@emotion/react": "^11.14.0",
    "@emotion/styled": "^11.14.0",
    "@floating-ui/react": "^0.27.8",
    "@hookform/resolvers": "^5.0.1",    
    "@tanstack/react-query": "^5.90.20",
    "@telegram-auth/react": "^1.0.4",
    "@types/lodash": "^4.17.16",
    "dotenv": "^16.5.0",
    "i18next": "^25.8.4",
    "i18next-http-backend": "^3.0.2",
    "lodash": "^4.17.21",
    "motion": "^12.33.0",
    "react": "^19.2.4",
    "react-dom": "^19.2.4",
    "react-dropzone": "^14.4.0",
    "react-easy-crop": "^5.5.6",
    "react-error-boundary": "^6.1.0",
    "react-hook-form": "^7.71.1",
    "react-i18next": "^16.5.4",
    "react-router": "^7.13.0",
    "react-select": "^5.10.2",    
    "react-toastify": "^11.0.5",
    "react-transition-group": "^4.4.5",
    "swiper": "^12.1.0",
    "uuid": "^13.0.0",
    "yup": "^1.7.1"
  },
  "devDependencies": {
    "@emotion/babel-plugin": "^11.13.5",
    "@eslint/js": "^9.39.2",
    "@types/node": "^25.2.1",
    "@types/react": "19.2.13",
    "@types/react-dom": "19.2.3",
    "@types/react-transition-group": "^4.4.12",
    "@vitejs/plugin-react": "^5.1.3",
    "eslint": "^9.39.2",
    "eslint-config-prettier": "^10.1.8",
    "eslint-plugin-prettier": "^5.5.5",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.5.0",
    "globals": "^17.3.0",
    "prettier": "3.8.1",
    "stylelint": "^17.1.1",
    "stylelint-config-standard": "^40.0.0",
    "typescript": "~5.9.3",
    "typescript-eslint": "^8.54.0",
    "vite": "^7.3.1",
    "vite-plugin-svgr": "^4.5.0"
  }
}
```

---

### 3.2 vite.config.ts
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import fs from 'fs';
import * as path from 'node:path';

const isDev = process.env.NODE_ENV === 'development';

export default defineConfig({
  base: process.env.VITE_REACT_APP_BASE_URL_PREFIX || '/',
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    svgr({
      // svgr options: https://react-svgr.com/docs/options/
      svgrOptions: { exportType: 'default', ref: true, svgo: false, titleProp: true },
      include: '**/*.svg',
    }),
  ],
  server: isDev
    ? {
        https: {
          key: fs.readFileSync('./.eggs/vite-https/key.pem'), // Path to the private key
          cert: fs.readFileSync('./.eggs/vite-https/cert.pem'), // Path to the certificate
        },
        host: '127.0.0.1',
        port: 443,
      open: true,
      }
    : {},
  resolve: {
    alias: {
  "@": path.resolve(__dirname, "./src"),
},
  },
});
```

---

### 3.3 eslint.config.js
```javascript
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'no-console': ["warn", { allow: ["warn", "error"] }]
    },
  }
);
```

---

### 3.4 .prettierrc.json
```json
{
    "semi": false,
    "tabWidth": 2,
    "printWidth": 120,
    "singleQuote": true,
    "trailingComma": "es5",
    "jsxSingleQuote": true,
    "bracketSpacing": true
}
```

---

### 3.5 .prettierignore
```
node_modules
package-lock.json
dist
lint-*
```

---

### 3.6 .stylelintrc.json
```json
{ "extends": ["stylelint-config-standard"] }
```

---

### 3.7 .babelrc
```json
{
  "plugins": ["@emotion"]
}
```

---

### 3.8 .env.example
```
VITE_REACT_APP_LOCATION=http://127.0.0.1
VITE_REACT_APP_BASE_URL=http://url_api:9999
VITE_PORT=80
VITE_REACT_APP_TG_AUTH_BOT_NAME=TELEGRAM_BOT_NAME
VITE_REACT_APP_MAPTILER_KEY=API_KEY
NGINX_DOMAIN_SERVER_NAME=test.com
VITE_REACT_APP_BASE_URL_PREFIX=''
VITE_REACT_RELEASE_VERSION = 2.2.0
```

---

### 3.9 .gitignore
```
# These are some examples of commonly ignored file patterns.
# You should customize this list as applicable to your project.
# Learn more about .gitignore:
#     https://www.atlassian.com/git/tutorials/saving-changes/gitignore

# Node artifact files
node_modules/
dist/

# Compiled Java class files
*.class

# Compiled Python bytecode
*.py[cod]

# Log files
*.log

# Package files
*.jar

# Maven
target/
dist/

# JetBrains IDE
.idea/

# Unit test reports
TEST*.xml

# Generated by MacOS
.DS_Store

# Generated by Windows
Thumbs.db

# Applications
*.app
*.exe
*.war

# Large media files
*.mp4
*.tiff
*.avi
*.flv
*.mov
*.wmv
.env
.eggs/
```

---

### 3.10 .gitattributes
```
* text=auto eol=lf
```

---

### 3.11 tsconfig.json
```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
```

---

### 3.12 tsconfig.app.json
```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "Bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"]
}
```

---

### 3.13 tsconfig.node.json
```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "Bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["vite.config.ts"]
}
```

---

## 4. Исходные файлы

---

### 4.3 src/envConfig.ts
```typescript
export const envConfig = {
  BASE_URL_PREFIX: import.meta.env.VITE_REACT_APP_BASE_URL_PREFIX || '',
  BASE_LOCATION: import.meta.env.VITE_REACT_APP_LOCATION,
  BASE_URL: import.meta.env.VITE_REACT_APP_BASE_URL,
  PORT: import.meta.env.VITE_PORT,
  BOT_NAME: import.meta.env.VITE_REACT_APP_TG_AUTH_BOT_NAME,
  SUPPORT_LINK: import.meta.env.VITE_REACT_APP_SUPPORT_LINK,
  VITE_REACT_RELEASE_VERSION: import.meta.env.VITE_REACT_RELEASE_VERSION,
};
```

---

## 5. Публичные файлы

### 5.1 index.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0" /> -->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=0" />
    <meta name="format-detection" content="telephone=no">
    <link rel="icon" href="/favicon.ico" />
    <script src="https://telegram.org/js/telegram-web-app.js"></script>
    <meta name="description" content="Плеер для прослушивания аудиокниг" />
    <title>Плеер для прослушивания аудиокниг</title>
  </head>

  <body>
    <div id="root"></div>
    <div id="modal"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

---

### 5.2 public/_redirects
```
# The following redirect is intended for use with most SPAs that handle routing internally.
/*    /index.html   200
```

## 6. HTTPS настройка для локальной разработки

Для работы HTTPS в режиме разработки необходимо создать самоподписные сертификаты:

1. Создайте директорию `.eggs/vite-https/`
2. Сгенерируйте сертификаты:
```bash
openssl req -x509 -newkey rsa:2048 -keyout .eggs/vite-https/key.pem -out .eggs/vite-https/cert.pem -days 365 -nodes
```

---

## 7. Ключевые особенности проекта

### 7.1 Стек технологий
- **React 19** - Последняя версия React
- **TypeScript 5.8** - Строгая типизация
- **Vite 6** - Быстрый сборщик
- **Emotion** - CSS-in-JS стилизация
- **React Query** - Управление состоянием API
- **i18next** - Интернационализация (5 языков: en, ru, be, ka, uk)
- **React Router 7** - Роутинг
- **Telegram Web App** - Интеграция с Telegram
- **MapTiler** - Карты
- **ESLint 9** - Линтер
- **Prettier** - Форматирование
- **Stylelint** - Линтер CSS
- **SVGR** - Преобразование SVG в React компоненты
- **HTTPS** - Локальная разработка с самоподписными сертификатами

### 7.2 Скрипты разработки
- `npm start` - Запуск dev сервера
- `npm run build` - Сборка для продакшена
- `npm run lint` - Линтер ESLint
- `npm run format:check` - Проверка форматирования Prettier
- `npm run format:write` - Форматирование кода Prettier
- `npm run lint-css` - Проверка CSS Stylelint
- `npm run format-css` - Форматирование CSS Stylelint

---

## 8. Дополнительные файлы для создания

### 8.1 src/index.css
```css
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

*
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  display: flex;
  min-width: 320px;
  min-height: 100vh;
}

#root {
  width: 100%;
}
```

---

### 8.2 src/vite-env.d.ts
```typescript
/// <reference types=vite/client />

interface ImportMetaEnv {
  readonly VITE_REACT_APP_LOCATION: string;
  readonly VITE_REACT_APP_BASE_URL: string;
  readonly VITE_PORT: string;
  readonly VITE_REACT_APP_TG_AUTH_BOT_NAME: string;
  readonly VITE_REACT_APP_MAPTILER_KEY: string;
  readonly NGINX_DOMAIN_SERVER_NAME: string;
  readonly VITE_REACT_APP_BASE_URL_PREFIX: string;
  readonly VITE_REACT_APP_SUPPORT_LINK: string;
  readonly VITE_REACT_RELEASE_VERSION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
```

---

## 9. Полезные команды

```bash
# Установка зависимостей
npm install

# Запуск dev сервера
npm start

# Сборка для продакшена
npm run build

# Предпросмотр сборки
npm run preview

# Линтер
npm run lint

# Форматирование
npm run format:write

# Проверка CSS
npm run lint-css

# Форматирование CSS
npm run format-css
```

---

## 10. Примечания

- Проект использует React 19 с новыми возможностями
- Все пути импорта используют алиас `@` для `src/`
- Для работы с Telegram Web App необходимо подключить скрипт в index.html
- Для HTTPS в режиме разработки требуются самоподписные сертификаты в `.eggs/vite-https/`
- Проект использует Emotion для стилизации с поддержкой CSS-in-JS
- React Query используется для управления состоянием API и кэширования
