
# Isomorphic React TypeScript Starter

This project includes a working example of React, React Router, and TypeScript.
TypeScript 1.6 added much needed support for JSX parsing, in the form of TSX files.

All the code is in TypeScript, written as either .ts or .tsx files. 
The gulp-based build generates a browserifeid client file which is separate from the vendor file.
The vendor file currently includes react (or react with addons) and react-router.
This separation speeds up the build process and can result in fewer client downloads when new builds are released.
The gulp build process works with gulp.watch.

## Features

* React with React Router
* TypeScript TSX
* Isomorphic between server and client
* Client app.js is browserified
* Client vendor.js is browserified separately
* Browserify-shim supports external scripts
* Gulp based build with watch tasks

## Versions

This template supports the following versions for key dependencies:

* React 0.13.x 
* React Router 0.13.x
* TypeScript 1.6

# Usage

This is a basic starter project with minimal views and components.

## Setup

### Install Node modules

```
> npm update
```

### Install TypeScript definitions

If you don't already have the TypeScript Definition manager, install it:

```
> npm install tsd -g
```

Next, get the definition files that are used by the project.

```
> tsd update --save
```

The save flag is required to generate the typings\tsd.d.ts file,
which is used by src\server.ts to resolve all application TypeScript references.

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

Then open a browser and navigate to http://localhost:3000 to view.
