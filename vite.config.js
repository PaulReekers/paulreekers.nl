import { defineConfig } from "vite";
import WindiCSS from "vite-plugin-windicss";

export default defineConfig({
  base: "./", // Set the base path for your project
  plugins: [WindiCSS()],
  server: {
    watch: {
      usePolling: true,
    },
  },
});
