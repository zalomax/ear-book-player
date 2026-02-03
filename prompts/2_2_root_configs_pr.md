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
    "start": "vite",
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
    "@maptiler/sdk": "^3.0.1",
    "@tanstack/react-query": "^5.74.4",
    "@telegram-auth/react": "^1.0.4",
    "@types/lodash": "^4.17.16",
    "dotenv": "^16.5.0",
    "i18next": "^25.0.0",
    "i18next-http-backend": "^3.0.2",
    "lodash": "^4.17.21",
    "motion": "^12.7.4",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "react-dropzone": "^14.3.8",
    "react-easy-crop": "^5.5.0",
    "react-error-boundary": "^5.0.0",
    "react-hook-form": "^7.55.0",
    "react-i18next": "^15.4.1",
    "react-router": "^7.5.1",
    "react-select": "^5.10.1",
    "react-swipeable": "^7.0.2",
    "react-toastify": "^11.0.5",
    "react-transition-group": "^4.4.5",
    "swiper": "^11.2.6",
    "uuid": "^11.1.0",
    "yup": "^1.6.1"
  },
  "devDependencies": {
    "@emotion/babel-plugin": "^11.13.5",
    "@eslint/js": "^9.24.0",
    "@types/node": "^22.14.1",
    "@types/react": "19.1.0",
    "@types/react-dom": "19.1.0",
    "@types/react-transition-group": "^4.4.12",
    "@vitejs/plugin-react": "^4.4.0",
    "eslint": "^9.24.0",
    "eslint-config-prettier": "^10.1.2",
    "eslint-plugin-prettier": "^5.2.6",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.19",
    "globals": "^16.0.0",
    "prettier": "3.5.3",
    "stylelint": "^16.10.0",
    "stylelint-config-standard": "^38.0.0",
    "typescript": "~5.8.3",
    "typescript-eslint": "^8.30.1",
    "vite": "^6.3.2",
    "vite-plugin-svgr": "^4.3.0"
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
    "semi": true,
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
VITE_REACT_APP_SUPPORT_LINK=https://t.me/pikvik_support
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

### 4.1 src/main.tsx
```typescript
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { AppQueryClient } from './app/AppQueryClient/AppQueryClient.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AppQueryClient />
    </BrowserRouter>
  </StrictMode>
);
```

---

### 4.2 src/App.tsx
```typescript
import { Route, Routes } from 'react-router';
import { LoginPage } from './bundle/Login/LoginPage.tsx';
import { UnAuthorisedLayout } from './shared/ui/UnAuthorisedLayout/UnAuthorisedLayout.tsx';
import { ProtectedLayout } from './shared/ui/ProtectedLayout/ProtectedLayout.tsx';
import { getLoginPath } from './bundle/Login/urls/getLoginUrl.ts';
import { getProfilePath } from './bundle/Profile/urls/getProfileUrls.ts';
import { ProfilePage } from './bundle/Profile/ProfilePage.tsx';
import { getCreateAdvertisementPath } from './bundle/Advertisement/_create/urls/getCreateAdvertisementUrl.ts';
import { CreateAdvertisementPage } from './bundle/Advertisement/_create/CreateAdvertisementPage.tsx';
import { SearchPage } from './bundle/Search/SearchPage.tsx';
import { getSearchPath } from './bundle/Search/urls/getSearchUrls.ts';
import { getAboutPath } from './bundle/About/urls/getSearchUrls.ts';
import AboutPage from './bundle/About/AboutPage.tsx';
import { getMapPagePath } from '@/bundle/MapPage/urls/getMapPageUrls.ts';
import { MapPage } from '@/bundle/MapPage/MapPage.tsx';
import { getMyAdvertisementsPath } from './bundle/MyAdvertisements.tsx/urls/getMyAdvertisementsUrl.ts';
import { MyAdvertisementsPage } from './bundle/MyAdvertisements.tsx/MyAdvertisementsPage.tsx';
import { getAdvertisementDetailsPath } from '@/bundle/Advertisement/_details/urls/getAdvertisementDetailsUrl.ts';
import { AdvertisementDetailsPage } from '@/bundle/Advertisement/_details/AdvertisementDetailsPage.tsx';
import { getEditProfilePath } from '@/bundle/Profile/EditProfile/urls/getEditProfileUrls.ts';
import { EditProfilePage } from '@/bundle/Profile/EditProfile/EditProfilePage.tsx';
import { getEditAdvertisementPath } from '@/bundle/Advertisement/_edit/urls/getEditAdvertisementUrl.ts';
import { EditAdvertisementPage } from '@/bundle/Advertisement/_edit/EditAdvertisementPage.tsx';
import NotFoundPage from './bundle/NotFound/NotFoundPage.tsx';

export const App = () => {
  return (
    <Routes>
      {/*UNAUTHORIZED ROUTE*/}
      <Route element={<UnAuthorisedLayout />}>
        <Route path={getLoginPath()} element={<LoginPage />} />
        <Route path={getAboutPath()} element={<AboutPage />} />
      </Route>

      {/*AUTHORIZED ROUTE*/}
      <Route element={<ProtectedLayout />}>
        <Route path={getSearchPath()} element={<SearchPage />} />
        <Route path={getProfilePath()} element={<ProfilePage />} />
        <Route path={getEditProfilePath()} element={<EditProfilePage />} />
        <Route path={getCreateAdvertisementPath()} element={<CreateAdvertisementPage />} />
        <Route path={getMyAdvertisementsPath()} element={<MyAdvertisementsPage />} />
        <Route path={getMapPagePath()} element={<MapPage />} />
        <Route path={getAdvertisementDetailsPath()} element={<AdvertisementDetailsPage />} />
        <Route path={getEditAdvertisementPath()} element={<EditAdvertisementPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
```

---

### 4.3 src/envConfig.ts
```typescript
export const envConfig = {
  BASE_URL_PREFIX: import.meta.env.VITE_REACT_APP_BASE_URL_PREFIX || '',
  BASE_LOCATION: import.meta.env.VITE_REACT_APP_LOCATION,
  BASE_URL: import.meta.env.VITE_REACT_APP_BASE_URL,
  PORT: import.meta.env.VITE_PORT,
  BOT_NAME: import.meta.env.VITE_REACT_APP_TG_AUTH_BOT_NAME,
  MAPTILER_KEY: import.meta.env.VITE_REACT_APP_MAPTILER_KEY,
  SUPPORT_LINK: import.meta.env.VITE_REACT_APP_SUPPORT_LINK,
  VITE_REACT_RELEASE_VERSION: import.meta.env.VITE_REACT_RELEASE_VERSION,
};
```

---

### 4.4 i18n.config.ts
```typescript
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

import commonEn from './src/locales/en/common.json';
import commonRu from './src/locales/ru/common.json';
import commonBy from './src/locales/be/common.json';
import commonGe from './src/locales/ka/common.json';
import commonUa from './src/locales/uk/common.json';

import loginEn from './src/locales/en/login.json';
import loginRu from './src/locales/ru/login.json';
import loginBy from './src/locales/be/login.json';
import loginGe from './src/locales/ka/login.json';
import loginUa from './src/locales/uk/login.json';

import aboutUsEn from './src/locales/en/about_us.json';
import aboutUsRu from './src/locales/ru/about_us.json';
import aboutUsBy from './src/locales/be/about_us.json';
import aboutUsGe from './src/locales/ka/about_us.json';
import aboutUsUa from './src/locales/uk/about_us.json';

import advertisementEn from './src/locales/en/advertisement.json';
import advertisementRu from './src/locales/ru/advertisement.json';
import advertisementBy from './src/locales/be/advertisement.json';
import advertisementGe from './src/locales/ka/advertisement.json';
import advertisementUa from './src/locales/uk/advertisement.json';

import formEn from './src/locales/en/form.json';
import formRu from './src/locales/ru/form.json';
import formBy from './src/locales/be/form.json';
import formGe from './src/locales/ka/form.json';
import formUa from './src/locales/uk/form.json';


import mapEn from './src/locales/en/map.json';
import mapRu from './src/locales/ru/map.json';
import mapBy from './src/locales/be/map.json';
import mapGe from './src/locales/ka/map.json';
import mapUa from './src/locales/uk/map.json';

import profileEn from './src/locales/en/profile.json';
import profileRu from './src/locales/ru/profile.json';
import profileBy from './src/locales/be/profile.json';
import profileGe from './src/locales/ka/profile.json';
import profileUa from './src/locales/uk/profile.json';

import errorEn from './src/locales/en/error.json';
import errorRu from './src/locales/ru/error.json';
import errorBe from './src/locales/be/error.json';
import errorKa from './src/locales/ka/error.json';
import errorUk from './src/locales/uk/error.json';

import { LANGUAGE, LANGUAGE_LOCALES } from '@/shared/dictianary/const.ts';
import { localStorageService } from '@/helpers/storageHelpers.ts';

const resources = {
  en: {
    translation: { ...commonEn, ...loginEn, ...aboutUsEn, ...advertisementEn, ...formEn, ...mapEn, ...profileEn, ...errorEn },
  },
  ru: {
    translation: { ...commonRu, ...loginRu, ...aboutUsRu, ...advertisementRu, ...formRu, ...mapRu, ...profileRu, ...errorRu },
  },
    be: {
    translation: { ...commonBy, ...loginBy, ...aboutUsBy, ...advertisementBy, ...formBy, ...mapBy, ...profileBy, ...errorBe },
  },
 ka: {
    translation: { ...commonGe, ...loginGe, ...aboutUsGe, ...advertisementGe, ...formGe, ...mapGe, ...profileGe, ...errorKa }
  },
 uk: {
    translation: { ...commonUa, ...loginUa, ...aboutUsUa, ...advertisementUa, ...formUa, ...mapUa, ...profileUa, ...errorUk }
  }
};

const supportedLngs = Object.keys(resources);

const resolveLanguage = (): string => {
  const selectedLanguage = localStorageService.get(LANGUAGE);
  if (selectedLanguage && supportedLngs.includes(selectedLanguage)) {
    return selectedLanguage;
  }

  if (supportedLngs.includes(navigator.language)) {
  return navigator.language;
  }

  return LANGUAGE_LOCALES.RU;
};

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    fallbackLng:resolveLanguage(),
    resources,
    interpolation: { escapeValue: false },
  });

export default i18n;
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
    <script src="https://telegram.org/js/telegram-web-app.js?57"></script>
    <meta name="description" content="РўРµС…РЅРѕР»РѕРіРёС‡РЅС‹Р№ СЃРµСЂРІРёСЃ РґР»СЏ РїРѕРёСЃРєР° РѕР±СЉСЏРІР»РµРЅРёР№ РѕР± Р°СЂРµРЅРґРµ Рё РїСЂРѕРґР°Р¶Рµ РЅРµРґРІРёР¶РёРјРѕСЃС‚Рё" />
    <title>PikVik - Р’Р°С€ РїСѓС‚РµРІРѕРґРёС‚РµР»СЊ РЅРµРґРІРёР¶РёРјРѕСЃС‚Рё!</title>
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

---

### 5.3 docker/robots.txt/dev_staging.txt
```
User-agent: *
Disallow: /
```

---

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
- Проект поддерживает 5 языков: английский, русский, белорусский, грузинский, украинский
- Для HTTPS в режиме разработки требуются самоподписные сертификаты в `.eggs/vite-https/`
- Проект использует Emotion для стилизации с поддержкой CSS-in-JS
- React Query используется для управления состоянием API и кэширования
- i18next настроен для работы с 5 языками и автоматического определения языка пользователя
