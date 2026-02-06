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
