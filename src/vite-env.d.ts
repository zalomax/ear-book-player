/// <reference types="vite/client" />

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
