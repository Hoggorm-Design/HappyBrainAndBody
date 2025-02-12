import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  ssr: {
    noExternal: ["react-router-dom", "tailwindcss"],
    target: "node",
  },
  build: {
    cssCodeSplit: false,
    outDir: "dist",
    sourcemap: true,
    rollupOptions: {
      output: {
        format: "esm",
        entryFileNames: "[name].js",
        chunkFileNames: "[name]-[hash].js",
        assetFileNames: "assets/[name].[ext]",
      },
    },
    ssrEmitAssets: true,
    manifest: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
