# Minima

Build your own production ready minimalist boilerplate for WebApps with

* Module bundler: Webpack 4
* UI: React 16
* Styles: SCSS
* Transpiler: Babel 7
* Tests: Jest 23

## Initialize new project

Run `npm init`

## Add .gitignore file

Create a .gitignore file with the following contents:

```text
node_modules
dist
flow-typed
coverage
```

## Add the [babel transpiler](https://babeljs.io/)

Run `yarn add -D @babel/core babel-loader @babel/preset-env @babel/preset-react @babel/preset-flow`

Create a `.babelrc` file with this content:

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react", "@babel/flow"],
  "plugins": ["@babel/plugin-syntax-dynamic-import"]
}
```

## Add [SCSS preprocessor](https://sass-lang.com/)

Run `yarn add -D style-loader css-loader sass-loader node-sass mini-css-extract-plugin`

## Add [Jest](https://jestjs.io/en/) and [enzyme](https://airbnb.io/enzyme/)

Run `yarn add -D jest jest-extended babel-jest babel-core@^7.0.0-bridge.0 regenerator-runtime enzyme enzyme-to-json enzyme-adapter-react-16`

Create a file called `jest.config.js` with the following contents:

```js
module.exports = {
  "collectCoverage": true,
  "coverageReporters": ["json", "html"],
  collectCoverageFrom: [
    "app/**/*.js",
    "!app/index.js",
    "!**/*.test.js",
    "!**/Loadable.js"
  ],
  coverageThreshold: {
    global: {
      statements: 98,
      branches: 91,
      functions: 98,
      lines: 98
    }
  },
  moduleDirectories: [
    "node_modules",
    "app"
  ],
  moduleNameMapper: {
    ".*\\.(css|less|styl|scss|sass)$": "<rootDir>/utilities/cssModule.js",
    ".*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/utilities/image.js"
  },
  setupTestFrameworkScriptFile: "<rootDir>/utilities/testBundler.js",
  setupFiles: [
    "<rootDir>/utilities/enzymeSetup.js"
  ],
  testRegex: "tests/.*\\.test\\.js$",
  snapshotSerializers: [
    "enzyme-to-json/serializer"
  ]
};
```

Create the `utilities` folder with the following files:

`cssModule.js` with this content:

```js
module.exports = 'CSS_MODULE';
```

`enzymeSetup.js` with this content:
```js
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```

`testBundler.js` with this content:
```js
import 'babel-polyfill';
```

`image.js` with this content:
```js
module.exports = 'IMAGE_MOCK';
```


## Add [webpack](https://webpack.js.org/)

Run `yarn add -D webpack webpack-cli html-webpack-plugin html-loader webpack-dev-server image-webpack-loader file-loader`

The add the following to the script section of your project:

```json
"scripts": {
  "dev": "webpack-dev-server --open --mode development",
  "test": "jest --coverage",
  "build": "webpack --mode production"  
}
```

Now you can run `yarn run dev` for developing and `yarn run build` for building production bundles.

Create a webpack configuration file `webpack.config.js` with the following contents:

```js
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {

  // Entry point for your application
  entry: './app/index.js',

  module: {
    rules: [

      // loader for js files invoking the transpiler from ES6 to ES5
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },

      // loader for html files
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },

      // loader for image files
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: true
            }
          }
        ]
      },

      // loader for SCSS preprocessor
      {
        test: /\.scss$/,
        use: [
            process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader, // fallback to style-loader in development
            'css-loader', // translates CSS into CommonJS
            'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  },

  // needed for react-router on development server 
  devServer: {
    historyApiFallback: true,
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./app/index.html",
      inject: true
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};
```

Add the `app/index.html` file with the following content:

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Minimalist React Boilerplate</title>
</head>
<body>
  <div id="app">
    <!-- app -->
  </div>
</body>
</html>
```

## Add React and related libs

Run `yarn add react react-dom react-router-dom react-loadable`

## Add flow

Run `yarn add -D flow-bin flow-typed`

Run `yarn run flow init`

Run `yarn run flow-typed install`

Add to `.flowconfig` file the following content under the `[options]` and `[include]` sections:

```text
[include]
./flow-typed

[options]
module.file_ext=.js
module.file_ext=.scss
module.name_mapper.extension='scss' -> 'empty/object'
```

## Optional: Setup VSCode

Install [Flow Language Support](https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode) extension for VSCode

Set these settings for VSCode

```json
  "flow.useNPMPackagedFlow": true,
  "typescript.validate.enable": false,
  "javascript.validate.enable": false
```

## That's it

Create the `app` folder and build an awesome application!