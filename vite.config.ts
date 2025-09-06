
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    // Add historyApiFallback for local development SPA routing
    historyApiFallback: true,
    // Proxy the video to CloudFront for development
    proxy: {
      '/lovable-uploads/SQUADASSIST_TRAILER_WEBSITE.mp4': {
        target: 'https://d1rnln83xwfrw6.cloudfront.net',
        changeOrigin: true,
        rewrite: () => '/SQUADASSIST_TRAILER_WEBSITE.mp4'
      }
    }
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
