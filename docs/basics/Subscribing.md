# Subscribing

After that we have prepared Refraction and we have defined channels, we have to subscribe something to these channels. In Refraction we can use [subscribe](/docs/api/Subscribe.md) to do this.
Subscribe function accept an Object that have a series of properties named as the channel that will handle. The handlers accept only one parameter that is the payload of the request.

Let's make an example. If we have a module that publish on channel `onUserLogin` the username (payload), I have to define my subscriber in this way:

```js
const subscriber = {
  prop: 7,
  exampleMethod: () => {
    doSomething();
  },
  // and others....

  // this method identify a subscription
  onUserLogin: (payload) => {
    alert(`User ${payload} logged in`);
  },
};
refractionInstance.subscribe(subscriber);
```

How we can see, the subscriber himself define what he want to listen.

Now, if we want to unsubscribe something, we can simply call the returned function from subscribe method, or alternatively, call the unsubscribe with the subscriber as parameter:

```js
const unsubscribeFunction = refractionInstance.subscribe(subscriber);
unsubscribeFunction();
// or refractionInstance.unsubscribe(subscriber);
```

If you delete a subscriber making it null, Refraction will unsubscribe it for you during next publishing.

When we declare a subscriber is important to keep in mind that events will be published in a synchronous way, Refraction will notify that an event is fired after that the previous subscriber has finished his execution. For this reason subscriber might have small functions and might be a little number. However if you have a lot of subscriber on a single channel, or if you want to do some stuff asynchronously, you can put a setTimeout with 0 offset, for example, in your handler. This will execute your code asynchronously and Refraction will step over, having better performance. Here is a little example:

```js
const subscriber = {
  sync: () => {
    // do some stuff...
  },
  async: () => {
    setTimeout(() => {
      // do some stuff...
    }, 0);
  }
}
```
