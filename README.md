# Refraction

[![Join the chat at https://gitter.im/mbasso/refraction](https://badges.gitter.im/mbasso/refraction.svg)](https://gitter.im/mbasso/refraction?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![Travis](https://img.shields.io/travis/mbasso/refraction.svg?maxAge=2592000)](https://travis-ci.org/mbasso/refraction)
[![npm version](https://img.shields.io/npm/v/refraction.svg)](https://www.npmjs.com/package/refraction)
[![npm downloads](https://img.shields.io/npm/dm/refraction.svg?maxAge=2592000)](https://www.npmjs.com/package/refraction)
[![Coveralls](https://img.shields.io/coveralls/mbasso/refraction.svg?maxAge=2592000)](https://coveralls.io/github/mbasso/refraction)
[![Join the chat at https://gitter.im/mbasso/refraction](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/mbasso/refraction?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

> A guard that represent central point of control in your application.

Modern javascript application are more often organized in modules, they are awesome but they involve some problems that we cannot avoid.
When we are writing an application in this way, we must consider that all our modules might be independent, testable, instantly re-usable and secure.
Refraction purpose is making these things real in an easy way using some design patterns.
Since modules might be independent, with no inter-module dependencies, refraction add an intermediate layer that handle all messages that an application use, to allow the communication between modules. In this way modules haven't to know each others but only this layer that is responsible to manage all the communications. If we want to change a module, we can do it without worries.
Modules have a very limited knowledge of what's going in the rest of the system. For this reason we can define refraction as a guard, a central point of control.

## Installation

You can install Refraction using [npm](https://www.npmjs.com/package/refraction):

```bash
npm install --save refraction
```

If you aren't using npm in your project, you can include refraction using UMD build in the dist folder with `<script>` tag.

## Usage

Refraction exposes only a little set of APIs, what is important to know is it's concept. A complete guide about usage can be found [here](https://mbasso.github.com/refraction/docs/basics/README.md).
However, here is a little gist:

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

* [Introduction](https://mbasso.github.com/refraction/docs/introduction/README.html)
* [Basics](https://mbasso.github.com/refraction/docs/basics/README.html)
* [Glossary](https://mbasso.github.com/refraction/docs/Glossary.html)
* [API Reference](https://mbasso.github.com/refraction/docs/api/README.html)

## Examples

You can find a series of examples directly in this repository under `examples` folder. Alternatively, you can check [awesome-refraction](https://github.com/mbasso/awesome-refraction).

If you want to run examples, check out the instruction [here](https://mbasso.github.com/refraction/docs/introduction/Examples.html).

# Chat

This project has an official chat channel on [gitter](https://gitter.im/).
This is the right place to talk about refraction with us and others developers.
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

refraction source code is licensed under the [MIT License](https://github.com/mbasso/refraction/blob/master/LICENSE.md).
