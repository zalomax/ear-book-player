export const envConfig = {
  BASE_URL_PREFIX: import.meta.env.VITE_REACT_APP_BASE_URL_PREFIX || '',
  BASE_LOCATION: import.meta.env.VITE_REACT_APP_LOCATION,
  BASE_URL: import.meta.env.VITE_REACT_APP_BASE_URL,
  PORT: import.meta.env.VITE_PORT,
  BOT_NAME: import.meta.env.VITE_REACT_APP_TG_AUTH_BOT_NAME,
  SUPPORT_LINK: import.meta.env.VITE_REACT_APP_SUPPORT_LINK,
  VITE_REACT_RELEASE_VERSION: import.meta.env.VITE_REACT_RELEASE_VERSION,
};
