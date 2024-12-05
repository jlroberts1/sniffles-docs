import path from "path";
import { defineConfig } from "@tanstack/start/config";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  server: {
    preset: "node-server",
    compatibilityDate: "2024-12-05",
  },
  vite: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./app"),
      },
    },
    css: {
      postcss: "./postcss.config.js",
    },
  },
});
