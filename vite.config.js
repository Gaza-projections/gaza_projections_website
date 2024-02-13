import { defineConfig } from 'vite';
import { ViteEjsPlugin } from 'vite-plugin-ejs';

const env = process.env.NODE_ENV;

const ejsConfig = {
  development: {
    googleAnalyticsId: null,
    mailerLite: {
      accountId: '817099',
      formId: '112449172135741241',
      code: '12133001'
    }
  },
  production: {
    googleAnalyticsId: 'G-N3FPXE95K7',
    mailerLite: {
      accountId: '817099',
      formId: '112449172135741241',
      code: '12133001'
    }
  }
}[env];

// https://vitejs.dev/config/
export default defineConfig({
  base: '/gaza_projections_website/',
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
