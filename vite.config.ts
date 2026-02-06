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
