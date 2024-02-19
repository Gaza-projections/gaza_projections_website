import { defineConfig } from 'vite';
import { ViteEjsPlugin } from 'vite-plugin-ejs';

const env = process.env.NODE_ENV;

const ejsConfig = {
  development: {
    googleAnalytics: null,
    mailerLite: {
      accountId: '823524',
      formId: '113561491340265031',
      code: '12487373'
    }
  },
  production: {
    googleAnalytics: {
      id: 'G-N3FPXE95K7',
      debugMode: false
    },
    mailerLite: {
      accountId: '823524',
      formId: '113561491340265031',
      code: '12487373'
    }
  }
}[env];

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  server: {
    host: '0.0.0.0'
  },
  plugins: [
    ViteEjsPlugin({
      env,
      ...ejsConfig
    })
  ]
});
