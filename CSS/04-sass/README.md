# SASS

This project shows an example web app in which [SASS](https://sass-lang.com/) is used to compile `SASS` source files to pure `CSS` code that can be understood by browsers.

## 3rd-Party Packages

The project uses the following 3rd-party [Node.js](https://nodejs.org/) package

| Package | Type | Purpose |
|---------|------|---------|
| [lite-server](https://www.npmjs.com/package/lite-server) | `dev` | A lightweight development `Node.js` server that serves a web app, opens it in the browser, refreshes when html or javascript change, injects CSS changes and has a fallback page when a route is not found |

## Source Code

Switch the source code to versions described below to view different implementations.

| Git Tag | Implementation |
|---------|----------------|
| [v4.0.0](https://github.com/TranXuanHoang/TheWeb/releases/tag/v4.0.0) | Create a simple webpage demonstrating [SASS](https://sass-lang.com/) |

## Run App

* Install [`Dart SASS`](https://sass-lang.com/dart-sass) (see [installation instructions](https://sass-lang.com/install)). Then run `SASS` to compile `main.scss` to `main.css`

  ```shell
  sass --watch main.scss:main.css
  ```

* Install `Node.js` dependencies with `npm install`
* Run app with `npm start`
