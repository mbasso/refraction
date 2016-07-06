# Usage with Rx

At the moment Refraction doesn't support methods to handle flows, it is only useful if you want to allow module communication, replay, testing etc. If you want to add an additional value, Refraction can be used in a very interesting way with [RxJS](http://reactivex.io/). In this way you can combine the powerful of Rx and the concepts that you have seen here, building a perfect decoupled application.

What you have to do is basically publish an event when a certain condition is met, here is a very simple example:

```js
Rx.Observable
  .fromEvent(usernameInput, 'keydown')
  .debounce(500)
  .subscribe(refractionInstance.onUsernameChange);
```
