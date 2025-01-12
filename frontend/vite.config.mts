import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  ssr: {
    noExternal: ["react-router-dom", "tailwindcss"],
    optimizeDeps: {
      exclude: ["@sanity/client"],
    },
    target: "node",
  },
  build: {
    cssCodeSplit: false,
    sourcemap: true,
    rollupOptions: {
      output: {
        format: "esm",
        assetFileNames: "assets/[name].[ext]",
      },
    },
    ssrEmitAssets: true,
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
    exclude: ["@sanity/client"],
  },
});
