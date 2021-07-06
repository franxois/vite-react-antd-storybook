import { defineConfig, UserConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import myConfig from "./shared-vite-config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), ...myConfig.plugins],
  css: myConfig.css,
}) as UserConfig;
