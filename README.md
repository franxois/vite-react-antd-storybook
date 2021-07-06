Empty project using React, Antd, Vite.js & Storybook.js

# Commands used

npm init @vitejs/app
npx sb init --builder storybook-builder-vite

npm i antd
npm i vite-plugin-style-import less -D

# How I customize Antd Theme

I'm used to this approach : https://ant.design/docs/react/customize-theme#Customize-in-less-file

However, modifying theme in modifyVars avoid to import all default Antd css styles. This result a much smaller css file in production bundle

# Shared config between vite and storybook

./shared-vite-config.js centralize custom configuration used by vite and storybook. This ensure to use the same Antd's theme values between vite dev server and Storybook
