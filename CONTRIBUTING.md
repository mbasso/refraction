# Contributing

We are pleased to receive any contribution by the community. By contributing to Refraction, you agree to abide by the [code of conduct](https://github.com/mbasso/refraction/blob/master/CODE_OF_CONDUCT.md).

## Issues

Before opening an issue, please search the [issue tracker](https://github.com/mbasso/refraction/issues) to make sure your issue hasn’t already been reported.
Please follow our guidelines when opening an issue, in that way we can understand your problem easily and we can help you faster.

### Bugs and Improvements

Bugs and Improvements in general can be discussed on the [issue tracker](https://github.com/mbasso/refraction/issues), make sure that there aren't other issues with the same purpose.

## Help

If you need help, or if you need to ask a question about usage and more, you can ask it on [StackOverflow with refraction tag](http://stackoverflow.com/questions/tagged/refraction?sort=votes&pageSize=50).
If you don’t get a reply on StackOverflow after few days, please contact us on twitter.

## Development

Visit the [issue tracker](https://github.com/mbasso/refraction/issues) to find a list of open issues that need attention.

Fork, then clone the repo:

```
git clone https://github.com/mbasso/refraction.git
```

### Building

#### Building Refraction

Running the `build` task will create both a CommonJS module-per-module build and a UMD build.
```
npm run build
```

To create just a CommonJS module-per-module build:

```
npm run build:lib
```

The result will be in the `lib` folder.

To create just a UMD build:
```
npm run build:umd
npm run build:umd:min
```

The result will be in the `dist` folder.

### Testing and Linting

To run both linting and testing at once, run the following:

```
npm run check:src
```

To only run linting:

```
npm run lint
```

To only run tests:

```
npm run test
```

To continuously watch and run tests, run the following:

```
npm run test:watch
```

### Docs

Improvements to the documentation are always welcome. Before submitting your changes, check that they respect all docs style.
For example, use "-" for lists etc.

#### Installing Gitbook

To install the latest version of `gitbook` and prepare to build the documentation, run the following:

```
npm run docs:prepare
```

#### Building the Docs

To build the documentation, run the following:

```
npm run docs:build
```

To watch and rebuild documentation when changes occur, run the following:

```
npm run docs:watch
```

The docs will be served at http://localhost:4000.

#### Publishing the Docs

To publish the documentation, run the following:

```
npm run docs:publish
```

#### Cleaning the Docs

To remove previously built documentation, run the following:

```
npm run docs:clean
```

### Examples

If you want to add a new example, please use the same style and format of the others and try to reuse as much code as possible.

#### Building and Testing the Examples

To build and test the official Refraction examples, run the following:

```
npm run build:examples
npm run test:examples
```

### Pull Request

Pull requests are welcome, but make sure that your changes respect the 2 points in PR template:

- Pull request has tests / docs demo, and is linted.
- Description explains the issue / use-case resolved, and auto-closes the related issue(s)

Thank you!
