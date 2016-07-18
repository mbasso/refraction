# `subscribe(subscriber)`

Subscribe the given object to events.

#### Arguments

- subscriber (*Object*): object to subscribe

#### Returns

(*Function*): A function that unsubscribe the given subscriber. This is the equivalent of `unsubscribe(subscriber)`

#### Example

```js
// subscribe to 'newChatPartecipant' channel
// set priority to 90 (default 100)
const subscriber = {
  refractionLevel: 90,
  newChatPartecipant: (payload) => {
    const { username } = payload;
    alert(`Hi ${username}!`);
  },
};
const unsubscribe = refractionInstance.subscribe(subscriber);
unsubscribe(); // subscriber no longer available in Refraction
```
