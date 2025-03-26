
import { defineConfig, ConfigEnv, PluginOption } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { reactComponentTagger } from "react-component-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' ? reactComponentTagger() as PluginOption : undefined,
  ].filter(Boolean) as PluginOption[],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui': ['@/components/ui'],
          'animations': ['framer-motion'],
        }
      }
    },
    chunkSizeWarningLimit: 1000,
  },
}));
