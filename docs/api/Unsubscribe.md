# `unsubscribe(subscriber)`

Unsubscribe the given object to events.

#### Arguments

- subscriber (*Object*): object to unsubscribe

#### Example

```js
/* const subscriber = {
  newChatPartecipant: (payload) => {
    const { username } = payload;
    alert(`Hi ${username}!`);
  },
};
refractionInstance.subscribe(subscriber);
... */
refractionInstance.unsubscribe(subscriber);
```
