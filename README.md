Empty project using React, Antd, Vite.js & Storybook.js

# Commands used

    npm init @vitejs/app
    npx sb init --builder storybook-builder-vite

    npm i antd
    npm i vite-plugin-style-import less -D

# How I customize Antd Theme

I'm used to this approach : https://ant.design/docs/react/customize-theme#Customize-in-less-file

However, modifying theme in modifyVars avoid to import all default Antd css styles. This result a much smaller css file in production bundle

# Shared config between Vite and Storybook

`./shared-vite-config.js` centralizes custom configuration used by the React App and Storybook. This ensures to use the same Antd's theme values between vite dev server and Storybook

# Build

    $ npm run build

    > vite-antd-storybook@0.0.0 build /Users/Francois/Documents/dev/github.com/franxois/vite-antd-storybook
    > tsc && vite build

    vite v2.4.1 building for production...
    ✓ 1035 modules transformed.
    dist/assets/favicon.17e50649.svg   1.49kb
    dist/assets/logo.ecc203fb.svg      2.61kb
    dist/index.html                    0.57kb
    dist/assets/index.0673ce28.css     0.76kb / brotli: 0.40kb
    dist/assets/index.43a7bb75.js      0.93kb / brotli: 0.38kb
    dist/assets/vendor.f83ed3a3.css    60.54kb / brotli: 5.62kb
    dist/assets/vendor.a3723a93.js     222.39kb / brotli: 61.83kb
