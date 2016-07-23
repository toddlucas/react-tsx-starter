
# Isomorphic React TypeScript Starter

This project includes a working example of React, React Router, and TypeScript.
TypeScript 1.6 added much needed support for JSX parsing, in the form of TSX files.

All the code is in TypeScript, written as either `.ts` or `.tsx` files. 
The gulp-based build generates a browserified client file which is separate from the vendor file.
The vendor file currently includes react (or react with addons) and react-router.
This separation speeds up the build process and can result in fewer client downloads when new builds are released.
The gulp build process works with gulp.watch.

This is a basic starter project with a minimal number of views and components.
As much as possible, the project uses ES6 conventions, which are supported by TypeScript.
This includes the import statement and object destructuring, for example.

Many recent React examples are written in ES6 and make use of [Babel](https://babeljs.io/).
These are almost entirely compatible with this TypeScript based process.
Most of the React views and components in this project are written as ES6 classes.
However, it's also possible to use classic React components, as demonstrated by the HomeView.

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

* [React](https://facebook.github.io/react/) 15.0
* [React Router](https://github.com/rackt/react-router) 2.2
* [Redux](https://github.com/rackt/redux) 3.4 ([redux branch](https://github.com/toddlucas/react-tsx-starter/tree/redux))
* [TypeScript](http://www.typescriptlang.org/) 1.6 - 1.8

# Usage

You'll need a few frameworks and utilities to be installed before starting.

## Prerequisites

You'll need the following prior to setup:

* [Node.js](https://nodejs.org/) should be installed
* [TypeScript](http://www.typescriptlang.org/) version 1.6 or greater
* [Typings](https://github.com/typings/typings), the TypeScript Definition manager

## Setup

### Install Node modules

This will get all the packages required for development and run time,
as defined in the `package.json` file.

```
> npm update
```

### Install TypeScript definitions

Get the definition files that are used by the project.

```
> typings install
```

If you don't already having `typings` installed, you can install using npm (-g flag recommended).
This will pull down the typings files and put them into the `typings` directory, along with `index.d.ts`.
This file is included via a `///` comment by `src\server.ts` to resolve all application TypeScript references.

If you're using `tsd`, this project still contains `tsd.json` but it will be removed in the near future.
You can run the following command to install using `tsd`.

```
> tsd update --save
```

The `--save` flag is required to generate the `typings\tsd.d.ts` file,
You'll need to update `src\server.ts` and change `index.d.ts` to `tsd.d.ts`.

## Build

To run a full build, just run gulp with no arguments.

```
> gulp
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
> cd www
> node server
```

Then open a browser and navigate to [http://localhost:3000](http://localhost:3000) to view.

## License

[BSD](https://github.com/toddlucas/react-tsx-starter/blob/master/LICENSE) (the same as React)
