import { defineConfig, ConfigEnv, PluginOption } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
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
          'ui': [
            '@/components/ui/button.tsx',  // Explicitly add file components
            '@/components/ui/toast.tsx',   // Explicitly add file components
            // Add more components as needed
          ],
          'animations': ['framer-motion'],
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: true
  },
}));
