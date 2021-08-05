/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */

import { startDevServer } from "@cypress/vite-dev-server";
import * as myConfig from "../../shared-vite-config";

export default function (on, config) {
  on("dev-server:start", (options) => {
    const viteConfig = {
      css: myConfig.css,
      plugins: [...myConfig.plugins],
    };
    return startDevServer({ options, viteConfig });
  });
}
