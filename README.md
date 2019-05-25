
# Universal/Isomorphic React TypeScript Starter

This project includes a working example of React, React Router, and TypeScript.

All the code is in TypeScript, written as either `.ts` or `.tsx` files.
The gulp-based build generates a browserified client file which is separate from the vendor file.
The vendor file currently includes react and react-router.
This separation speeds up the build process and can result in fewer client downloads when new builds are released.
The gulp build process works with gulp.watch.

This is a basic starter project with a minimal number of views and components.
Many recent React examples are written in ES6 and make use of [Babel](https://babeljs.io/).
These are largely compatible with this TypeScript based process.

This starter also includes an example of how to use Redux with TypeScript.
In order to keep the starter as clean as possible, the Redux example is on a branch.

## Features

* React with React Router
* Redux (on a separate branch)
* TypeScript TSX
* Isomorphic between server and client
* Client app.js is browserified
* Client vendor.js is browserified separately
* Browserify-shim supports external scripts
* Gulp based build with watch tasks

## Versions

This template supports the following versions for key dependencies:

* [React](https://facebook.github.io/react/) 16.8
* [React Router](https://github.com/rackt/react-router) 5.0
* [Redux](https://github.com/reactjs/redux) 4.0 ([redux branch](https://github.com/toddlucas/react-tsx-starter/tree/redux))
* [TypeScript](http://www.typescriptlang.org/) 3.4

# Usage

You'll need a few frameworks and utilities to be installed before starting.

## Prerequisites

You'll need the following prior to setup:

* [Node.js](https://nodejs.org/)
* [TypeScript](http://www.typescriptlang.org/)
* [Gulp](http://gulpjs.com/)

## Setup

### Install Node modules

This will get all the packages required for development and run time,
as defined in the `package.json` file.

```
> npm install
```

## Build

To run a full build, just run gulp with no arguments.

```
> gulp
```

You can also use `npm`.

```
> npm run build
```

## Development

Run watch and keep the console open.

```
> gulp watch
```

Gulp will automatically rebuild when a source file or CSS file changes.

## Running

Run this command:

```
> npm run dev
```

Then open a browser and navigate to [http://localhost:3000](http://localhost:3000) to view.

You can also run the server with automatic reloading using [nodemon](https://nodemon.io/) and [BrowserSync](https://www.browsersync.io/).

```
> gulp serve
```

This will launch at a different port since it proxies [Express](https://expressjs.com/).

## Related

A simple starter project can be found at [react-tsx-lite](https://github.com/toddlucas/react-tsx-lite).

## License

[BSD](https://github.com/toddlucas/react-tsx-starter/blob/master/LICENSE) (the same as React)
