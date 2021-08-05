const styleImport = require("vite-plugin-style-import");

// Storybook already has reactRefresh, cannot share

module.exports = {
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          "primary-color": "#a51da5",
          "link-color": "#a51da5",
          "border-radius-base": "4px",
        },
        javascriptEnabled: true,
      },
    },
  },
  plugins: [
    styleImport.default({
      libs: [
        {
          libraryName: "antd",
          esModule: true,
          resolveStyle: (name) => {
            return `antd/es/${name}/style/index`;
          },
        },
      ],
    }),
  ],
};
