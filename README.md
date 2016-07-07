# Refraction

[![Build Status](https://travis-ci.org/mbasso/refraction.svg?branch=master)](https://travis-ci.org/mbasso/refraction)
[![npm version](https://img.shields.io/npm/v/refraction.svg)](https://www.npmjs.com/package/refraction)
[![npm downloads](https://img.shields.io/npm/dm/refraction.svg?maxAge=2592000)](https://www.npmjs.com/package/refraction)
[![Coverage Status](https://coveralls.io/repos/github/mbasso/refraction/badge.svg?branch=master)](https://coveralls.io/github/mbasso/refraction?branch=master)
[![Join the chat at https://gitter.im/mbasso/refraction](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/mbasso/refraction?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

> A guard that represents a central point of control in your application.

Modern javascript applications are often organized into modules, which are awesome but have some problems that we can't avoid.
When we are writing an application in this way, we must consider that all our modules must be independent, testable, instantly reusable and secure.
Refraction's purpose is to make these concerns take care of themselves by using some design patterns.
Since modules might be independent, with no inter-module dependencies, Refraction adds an intermediate layer that handles all messages that an application uses, allowing communication between modules. This way, modules don't need to know each other, only the layer that is responsible for managaging communication. If we want to change a module, we can do so without worrying about how other modules use it.
Modules have a very limited knowledge of what's going in the rest of the system. For this reason, we can define refraction as a guard, a central point of control.

## Installation

You can install Refraction using [npm](https://www.npmjs.com/package/refraction):

```bash
npm install --save refraction
```

If you aren't using npm in your project, you can include Refraction using UMD build in the dist folder with `<script>` tag.

## Usage

Refraction exposes only a small set of APIs. What is important to know is it's concept. A complete guide about usage can be found [here](https://mbasso.github.io/refraction/docs/basics/index.html).
However, here is the gist:

```js
import Refraction from 'refraction';

class CustomRefraction extends Refraction {

  routeChange(route) {
    this.publish('routeChange', {
      type: 'route',
      payload: route,
    });
  }
}

class RouteManager {

  routeChange({ payload }) {
    window.location.href = payload;
  }
}

class ConsoleManager {

  routeChange({ payload }) {
    console.log(`New location = ${payload}`);
  }
}

const routeMiddleware = (param) => {
  const result = Object.assign({}, param);
  if (result && result.type === 'route') {
    // build complete url
    result.payload = `${window.location.protocol}//${window.location.host}${result.payload}`;
  }
  return result;
}

const refractionInstance = new CustomRefraction([ routeMiddleware ]);
const routeManager = new RouteManager();
const consoleManager = new ConsoleManager();

refractionInstance.subscribe(routeManager);
refractionInstance.subscribe(consoleManager);

// change route and log
refractionInstance.routeChange('home');

```

## Documentation

* [Introduction](https://mbasso.github.io/refraction/docs/introduction/index.html)
* [Basics](https://mbasso.github.io/refraction/docs/basics/index.html)
* [Glossary](https://mbasso.github.io/refraction/docs/Glossary.html)
* [API Reference](https://mbasso.github.io/refraction/docs/api/index.html)

## Examples

You can find a series of examples in this repository under the `examples` folder. Alternatively, you can check [awesome-refraction](https://github.com/mbasso/awesome-refraction).

If you want to run examples, check out the instructions [here](https://mbasso.github.io/refraction/docs/introduction/Examples.html).

# Chat

This project has an official chat channel on [gitter](https://gitter.im/).
This is the right place to talk about Refraction with us and others developers.
Feel free to participate.

Join chat [here](https://gitter.im/mbasso/refraction).

## Change Log

This project adheres to [Semantic Versioning](http://semver.org/).  
Every release, along with the migration instructions, is documented on the Github [Releases](https://github.com/mbasso/refraction/releases) page.

## Inspiration

Refraction is inspired by different articles and tools:
- Its architecture is inspired by [this](https://addyosmani.com/largescalejavascript/) article based on Addy Osmani's talk of the same name, presented at LondonJS.
- Its style is inspired by [Redux](https://github.com/reactjs/redux)

## Authors
**Matteo Basso**
- [github/mbasso](https://github.com/mbasso)
- [@Teo_Basso](https://twitter.com/Teo_Basso)

**Adriano Buscema**
- [github/adribusc](https://github.com/adribusc)

## Copyright and License
Copyright (c) 2016, Matteo Basso.

Refraction source code is licensed under the [MIT License](https://github.com/mbasso/refraction/blob/master/LICENSE.md).
