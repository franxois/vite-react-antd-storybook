const myConfig = require("../shared-vite-config.js");

module.exports = {
  async viteFinal(config) {
    // customize the Vite config here

    config.css = myConfig.css;
    config.plugins.push(...myConfig.plugins);

    // return the customized config
    return config;
  },
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  core: {
    builder: "storybook-builder-vite",
  },
};
