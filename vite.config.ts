import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/task-log-2025/",
  assetsInclude: ["**/*.gltf"],
});
