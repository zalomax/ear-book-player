## Анализ главной страницы проекта

Я изучил структуру проекта и то, как реализована главная страница. Вот ключевые находки:

### Как работает главная страница (route `/`)

В этом проекте **нет явного маршрута `/`**. Когда пользователь заходит на корневой путь:
1. Запрос попадает в [`App.tsx`](src/App.tsx:26-49) с маршрутизацией через React Router
2. Поскольку нет совпадения, срабатывает маршрут `path='*'` → [`NotFoundPage`](src/bundle/NotFound/NotFoundPage.tsx:7-18)
3. [`NotFoundPage`](src/bundle/NotFound/NotFoundPage.tsx:7-18) находится внутри [`ProtectedLayout`](src/shared/ui/ProtectedLayout/ProtectedLayout.tsx:8-25)
4. [`ProtectedLayout`](src/shared/ui/ProtectedLayout/ProtectedLayout.tsx:8-25) проверяет авторизацию и перенаправляет неавторизованных пользователей на `/login`
5. Таким образом, **первой открывающейся страницей является [`LoginPage`](src/bundle/Login/LoginPage.tsx:17-132)**

### Технологический стек

| Технология | Версия | Назначение |
|-----------|--------|-----------|
| React | 19.1.0 | UI библиотека |
| TypeScript | 5.8.3 | Типизация |
| Vite | 6.3.2 | Сборщик |
| React Router | 7.5.1 | Маршрутизация |
| @emotion/react | 11.14.0 | CSS-in-JS |
| @tanstack/react-query | 5.74.4 | Data fetching |
| i18next | 25.0.0 | Интернационализация |

### Архитектурные паттерны

1. **Компонентная структура:**
   - [`Box`](src/shared/ui/Box/Box.tsx:8-12) — универсальный контейнер с flexbox и spacing пропами
   - [`Typography`](src/shared/ui/Typography/Typography.tsx:14-27) — текстовый компонент с вариантами (headline1, title, text, etc.)
   - [`Layout`](src/shared/ui/Layout/Layout.tsx:17-42) — обёртка с Header и Footer

2. **Стилизация:**
   - CSS-in-JS через [`@emotion/styled`](src/shared/ui/Box/styles.tsx:36)
   - Глобальные стили в [`AppQueryClient`](src/app/AppQueryClient/AppQueryClient.tsx:32-76)
   - Система типографики в [`typography.ts`](src/styles/typography.ts:1-84)

3. **Маршрутизация:**
   - Вложенные маршруты с Layout-компонентами
   - Разделение на авторизованные и неавторизованные маршруты

---

## Промпт для создания нового проекта с главной страницей "Привет"

```
Создай новый React проект с использованием следующих технологий и подходов, аналогичных проекту pikvik-front-v2:

### Технологический стек:
- React 19+ с TypeScript
- Vite как сборщик
- React Router 7+ для маршрутизации
- @emotion/react и @emotion/styled для CSS-in-JS
- @tanstack/react-query для управления состоянием сервера

### Структура проекта:
```
src/
├── main.tsx              # Точка входа с BrowserRouter и QueryClientProvider
├── App.tsx               # Компонент с Routes
├── index.css             # Глобальные стили
├── shared/
│   └── ui/
│       ├── Box/
│       │   ├── Box.tsx
│       │   └── styles.tsx
│       └── Typography/
│           ├── Typography.tsx
│           └── styles.tsx
└── pages/
    └── HomePage.tsx      # Главная страница
```

### Требования к компонентам:

1. **Box компонент** — универсальный контейнер с пропами:
   - display, justifyContent, alignItems, flexDirection, flexWrap
   - width, height, maxWidth, flex
   - mt, mb, ml, mr, m (margin spacing)
   - rowGap, columnGap
   - Использует @emotion/styled

2. **Typography компонент** — текстовый компонент с пропами:
   - variant: 'headline1' | 'headline2' | 'title' | 'text' | 'smallText'
   - fontWeight: 'regular' | 'medium' | 'bold'
   - color (по умолчанию 'white')
   - as (HTML тег, по умолчанию 'div')

3. **HomePage компонент** — главная страница с маршрутом "/":
   - Отображает только слово "Привет" по центру экрана
   - Использует Box для центрирования
   - Использует Typography для текста

### Конфигурация:

1. **vite.config.ts**:
   - Плагин @vitejs/plugin-react с jsxImportSource: '@emotion/react'
   - Babel плагин @emotion/babel-plugin
   - Alias "@": "./src"

2. **tsconfig.json**:
   - strict: true
   - jsx: "react-jsx"
   - baseUrl: "."
   - paths: { "@/*": ["./src/*"] }

3. **Глобальные стили**:
   - Фон: #212428
   - Цвет текста: #fff
   - Шрифт: Montserrat-Regular, sans-serif
   - height: 100% для html, body, #root

### Маршрутизация:
- Маршрут "/" → HomePage
- HomePage должен быть доступен без авторизации

### Результат:
При запуске проекта по адресу http://localhost:5173/ должно отображаться слово "Привет" по центру экрана на тёмном фоне.
```