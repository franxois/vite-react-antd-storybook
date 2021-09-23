import { defineConfig, UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import myConfig from "./shared-vite-config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ...myConfig.plugins],
  css: myConfig.css,
}) as UserConfig;
