import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import VitePluginWindicss from 'vite-plugin-windicss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePluginWindicss(),],
  resolve: {
    alias: {
      'framer-motion': 'framer-motion',
    },
  },
})
