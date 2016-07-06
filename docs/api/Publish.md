# `publish(channel, payload)`

Publish the event with the given payload on the given channel.

#### Arguments

- channel (*String*): define the channel on which payload will be passed
- payload (*any*): value to pass to subscribers

#### Example

```js
refractionInstance.publish('newChatPartecipant', { username: 'example_user' });
```

#### Tips

* Define a standard template for payload parameter. In this way middlewares can be defined easily and all can be clearer. For example:
```js
refractionInstance.publish('newChatPartecipant', {
    type: 'event',
    payload: e,
});
```
