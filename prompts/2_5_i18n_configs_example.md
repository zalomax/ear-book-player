
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

## 10. Примечания

- Проект поддерживает 2 языка: английский, русский
- i18next настроен для работы с 2 языками и автоматического определения языка пользователя