# Publishing

Publishing events is the only way that your application should use to allow modules communicating. Essentially we have to define some [channels](/docs/Glossary.md) on which we can pass values. For example if we want to communicate to other modules that a user logged in, we can define a channel called `onUserLogin` that bring the username. This looks like this:

```js
refractionInstance.publish('onUserLogin', username);
```

All works fine, however, we want to do some stuff before publishing events, we want to check if a module is allowed to do this and we want to centralize all.
A technique that we can use is to extend Refraction, creating a new Class that represents our particular application. In this class we have a series of `publishers` that are appointed to publish events making all checks.

```js
class CustomRefraction extends Refraction {

  onUserLogin = (username) => {
    // do some stuff...
    if (username) {
      this.publish('onUserLogin', username);
    } else {
      this.publish('loginError', 'Invalid username');
    }
  }

}

const refractionInstance = new CustomRefraction();
refractionInstance.onUserLogin(username);
```

In this class we can add all features that we want but we must be aware of which features must be placed here and which inside modules, similarly, which here and which in middlewares. This is the class in which we have to do all security checks before publishing something.
