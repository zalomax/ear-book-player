Теперь я изучил все конфигурационные файлы в корне проекта. Создам подробный промт для воспроизведения этой конфигурации в новом проекте.

📋 Промт для создания нового React + TypeScript + Vite проекта с полной конфигурацией
Обзор проекта
Это современный React 19 + TypeScript + Vite проект с использованием Emotion для стилизации, React Query для управления состоянием API, i18next для интернационализации и интеграцией с Telegram Web App.

1. Инициализация проекта
npm create vite@latest my-project -- --template react-ts
cd my-project
npm install
2. Установка всех зависимостей
Основные зависимости:
npm install @dnd-kit/core @dnd-kit/sortable @emotion/react @emotion/styled @floating-ui/react @hookform/resolvers @maptiler/sdk @tanstack/react-query @telegram-auth/react @types/lodash dotenv i18next i18next-http-backend lodash motion react react-dom react-dropzone react-easy-crop react-error-boundary react-hook-form react-i18next react-router react-select react-swipeable react-toastify react-transition-group swiper uuid yup
Dev зависимости:
npm install -D @emotion/babel-plugin @eslint/js @types/node @types/react @types/react-dom @types/react-transition-group @vitejs/plugin-react eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-react-hooks eslint-plugin-react-refresh globals prettier stylelint stylelint-config-standard typescript typescript-eslint vite vite-plugin-svgr
3. Конфигурационные файлы
3.1 package.json
{
  "name": "my-project",
  "private": true,
  "version": "1.0.0",
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
3.2 vite.config.ts
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
      svgrOptions: { exportType: 'default', ref: true, svgo: false, titleProp: true },
      include: '**/*.svg',
    }),
  ],
  server: isDev
    ? {
        https: {
          key: fs.readFileSync('./.eggs/vite-https/key.pem'),
          cert: fs.readFileSync('./.eggs/vite-https/cert.pem'),
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
3.3 tsconfig.json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
3.4 tsconfig.app.json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "Bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",
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
3.5 tsconfig.node.json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "Bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["vite.config.ts"]
}
3.6 eslint.config.js
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
3.7 .prettierrc.json
{
  "semi": true,
  "tabWidth": 2,
  "printWidth": 120,
  "singleQuote": true,
  "trailingComma": "es5",
  "jsxSingleQuote": true,
  "bracketSpacing": true
}
3.8 .prettierignore
node_modules
package-lock.json
dist
lint-*
3.9 .stylelintrc.json
{ "extends": ["stylelint-config-standard"] }
3.10 .babelrc
{
  "plugins": ["@emotion"]
}
3.11 .env.example
VITE_REACT_APP_LOCATION=http://127.0.0.1
VITE_REACT_APP_BASE_URL=http://url_api:9999
VITE_PORT=80
VITE_REACT_APP_TG_AUTH_BOT_NAME=TELEGRAM_BOT_NAME
VITE_REACT_APP_MAPTILER_KEY=API_KEY
NGINX_DOMAIN_SERVER_NAME=test.com
VITE_REACT_APP_BASE_URL_PREFIX=''
VITE_REACT_APP_SUPPORT_LINK=https://t.me/support
VITE_REACT_RELEASE_VERSION = 1.0.0
3.12 .gitignore
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
3.13 .gitattributes
* text=auto eol=lf
4. HTML и точки входа
4.1 index.html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=0" />
    <meta name="format-detection" content="telephone=no">
    <link rel="icon" href="/favicon.ico" />
    <script src="https://telegram.org/js/telegram-web-app.js?57"></script>
    <meta name="description" content="Описание вашего приложения" />
    <title>Название приложения</title>
  </head>
  <body>
    <div id="root"></div>
    <div id="modal"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
4.2 src/main.tsx
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
  </StrictMode>,
);
4.3 src/App.tsx
import { Route, Routes } from 'react-router';

export const App = () => {
  return (
    <Routes>
      {/*UNAUTHORIZED ROUTE*/}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/about" element={<AboutPage />} />

      {/*AUTHORIZED ROUTE*/}
      <Route path="/search" element={<SearchPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
4.4 src/envConfig.ts
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
5. i18n конфигурация
5.1 i18n.config.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

import commonEn from './src/locales/en/common.json';
import commonRu from './src/locales/ru/common.json';
import commonBy from './src/locales/be/common.json';
import commonGe from './src/locales/ka/common.json';
import commonUa from './src/locales/uk/common.json';

const resources = {
  en: { translation: { ...commonEn } },
  ru: { translation: { ...commonRu } },
  be: { translation: { ...commonBy } },
  ka: { translation: { ...commonGe } },
  uk: { translation: { ...commonUa } }
};

const supportedLngs = Object.keys(resources);

const resolveLanguage = (): string => {
  const selectedLanguage = localStorage.getItem('LANGUAGE');
  if (selectedLanguage && supportedLngs.includes(selectedLanguage)) {
    return selectedLanguage;
  }
  if (supportedLngs.includes(navigator.language)) {
    return navigator.language;
  }
  return 'ru';
};

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    fallbackLng: resolveLanguage(),
    resources,
    interpolation: { escapeValue: false },
  });

export default i18n;
6. Docker конфигурация
6.1 devops/ci/Dockerfile
FROM node:20-alpine
WORKDIR /app
RUN npm install -g serve
COPY ./dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
7. CI/CD конфигурация (Bitbucket Pipelines)
7.1 bitbucket-pipelines.yml
image: node:20-alpine

pipelines:
  pull-requests:
    '**':
      - step:
          name: Install dependencies
          caches:
            - node
          script:
            - npm ci
      - step:
          name: Code Linting
          caches:
            - node
          script:
            - npm run lint
      - step:
          name: Code Formatting Check
          caches:
            - node
          script:
            - npm run format:check
      - step:
          name: Building React Static
          caches:
            - node
          script:
            - npm run build
8. Публичные файлы
8.1 public/_redirects
# The following redirect is intended for use with most SPAs that handle routing internally.
/*    /index.html   200
8.2 docker/robots.txt/dev_staging.txt
User-agent: *
Disallow: /
9. Структура проекта
my-project/
├── .babelrc
├── .env.example
├── .gitattributes
├── .gitignore
├── .prettierignore
├── .prettierrc.json
├── .stylelintrc.json
├── bitbucket-pipelines.yml
├── eslint.config.js
├── i18n.config.ts
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── devops/
│   ├── ci/
│   │   └── Dockerfile
│   ├── notify.sh
│   └── notify_debug.sh
├── docker/
│   └── robots.txt/
│       └── dev_staging.txt
├── public/
│   ├── _redirects
│   └── favicon.ico
└── src/
    ├── App.tsx
    ├── envConfig.ts
    ├── index.css
    ├── main.tsx
    ├── vite-env.d.ts
    ├── api/
    ├── app/
    ├── assets/
    ├── components/
    ├── fonts/
    ├── helpers/
    ├── hooks/
    ├── locales/
    ├── shared/
    └── styles/
10. HTTPS для локальной разработки
Для настройки HTTPS локально создайте самоподписанный сертификат:

# Generate private key
openssl genpkey -algorithm RSA -out key.pem

# Create certificate signing request
openssl req -new -key key.pem -out csr.csr

# Sign the certificate
openssl x509 -req -in csr.csr -signkey key.pem -out cert.pem
Поместите файлы в .eggs/vite-https/:

.eggs/vite-https/key.pem
.eggs/vite-https/cert.pem
11. Ключевые особенности конфигурации
Особенность	Описание
React 19	Последняя версия React
TypeScript 5.8	Строгая типизация
Vite 6	Быстрый сборщик
Emotion	CSS-in-JS стилизация
React Query	Управление состоянием API
i18next	Интернационализация (5 языков)
React Router 7	Маршрутизация
Telegram Web App	Интеграция с Telegram
MapTiler	Карты
DnD Kit	Drag and Drop
React Hook Form	Формы
Yup	Валидация
Swiper	Слайдеры
React Dropzone	Загрузка файлов
React Easy Crop	Обрезка изображений
Motion	Анимации
React Toastify	Уведомления
12. Скрипты для разработки
npm start          # Запуск dev сервера (HTTPS на 127.0.0.1:443)
npm run build      # Сборка для продакшена
npm run lint       # Проверка кода ESLint
npm run preview    # Предпросмотр сборки
npm run format:check   # Проверка форматирования Prettier
npm run format:write   # Форматирование кода Prettier
npm run lint-css       # Проверка CSS Stylelint
npm run format-css     # Форматирование CSS Stylelint
