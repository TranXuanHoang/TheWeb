# Nexter

[![HTML5](https://img.shields.io/badge/HTML5--E34F26?style=flat-square&logo=HTML5)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![CSS3 Grid](https://img.shields.io/badge/CSS3-Grid-1572B6?style=flat-square&logo=CSS3)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
[![SASS](https://img.shields.io/badge/SASS--CC6699?style=flat-square&logo=SASS)](https://sass-lang.com/)

An example home page for a real estate company. The main purpose of this project is to demonstrate how to use `CSS grid` to layout the web page UI. This project, same as the [05-natours](../05-natours) and [06-trillo](../06-trillo) projects, uses [SASS](https://sass-lang.com/) language to write all styling code and then uses [Dart SASS compiler](https://sass-lang.com/dart-sass) to compile the `SASS` code to nomal `CSS` which can be understood by the web browsers.

## 3rd-Party Packages

The project uses the following 3rd-party [Node.js](https://nodejs.org/) package

| Package | Type | Purpose |
|---------|------|---------|
| [sass](https://www.npmjs.com/package/sass) | `dev` | Compile `SASS` code (`.scss` files) to normal `CSS` code |
| [live-server](https://www.npmjs.com/package/live-server) | `dev` | A little development server with live reload capability |
| [autoprefixer](https://www.npmjs.com/package/autoprefixer) | `dev` | Parse CSS and add vendor prefixes to CSS rules using values from [Can I Use](https://caniuse.com/) |
| [postcss](https://www.npmjs.com/package/postcss) | `dev` | A tool named `PostCSS` which is used in combination with other plugins for transforming CSS styles. This project use `PostCSS` and `PostCSS CLI` to run `autoprefixer` plugin |
| [postcss-cli](https://www.npmjs.com/package/postcss-cli) | `dev` | CLI for running `PostCSS` |
| [npm-run-all](https://www.npmjs.com/package/npm-run-all) | `dev` | A CLI tool to run multiple npm-scripts in parallel or sequential |

## Source Code

Switch the source code to versions described below to view different implementations.

| Git Tag | Implementation |
|---------|----------------|
| [v7.0.0](https://github.com/TranXuanHoang/TheWeb/releases/tag/v7.0.0) | Make a real estate home page using `CSS grid` and [SASS](https://sass-lang.com/) |

## Run App

* Install `Node.js` dependencies with `npm install`
* Run app with `npm start`

## NPM Scripts

The [package.json](./package.json) files defines the following `npm scripts` which are used to build `SASS` code to `CSS` code, concat `CSS` files, prefix `CSS` rules to get support with more browsers and make final `CSS` code that are ready for production:

| npm script | Description |
|------------|-------------|
| `watch:sass` | Compiles `SASS` code to `CSS` *with* **hot reload** - rerun whenever new changes are added |
| `devserver` | Opens a `live-server` as a web server to host the web app on your dev local machine |
| **`start`** | :computer: Runs all the above two scripts in parallel |
| `compile:sass` | :one: Compiles `SASS` code to `CSS` *without* **hot reload** - run only one time and done |
| `prefix:css` | :two: Uses `PostCSS` to run `Autoprefixer` to add vendor prefixes (i.e., `-webkit-`, `-moz-`, ...) to `CSS` code in the `style.comp.css` file which was generated by the `compile:sass` script and outputs result in `style.prefix.css` file |
| `compress:css` | :three: Compresses all the `CSS` code in the `style.prefix.css` file into one single line eliminating redundant space characters and puts the result minifined `CSS` in `style.min.css` file |
| **`build:css`** | :rocket: Runs all the above three scripts one by one sequentially. Note that, this script will generate a `style.min.css` file, and this file needs to be linked with the `index.html` as a `stylesheet` resource<br> `<link rel="stylesheet" href="css/style.min.css">` |
