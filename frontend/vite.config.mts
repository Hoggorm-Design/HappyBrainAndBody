import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  ssr: {
    noExternal: ["react-router-dom", "tailwindcss"],
    target: "node",
  },
  build: {
    cssCodeSplit: false,
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
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
    exclude: ["@sanity/client"],
  },
});
