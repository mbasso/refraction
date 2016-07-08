# `getHistory()`

Returns the history of published events.

#### Returns

(*Array*): List of published events.

#### Example

Assuming that our application has published two events, here is an example.

```js
const history = refractionInstance.getHistory();
/* [{
  type: 'newChatPartecipant',
  payload: {
    username: 'example_user',
  },
}, {
  type: 'newMessage',
  payload: {
    chatroom: 'refraction-chatroom',
    sender: 'example_user',
    message: 'Hi all!',
  },
}] */
```

#### Tips

* When your application crash you can use `getHistory` and send its result to your server. In this way you can use a library such as [refraction-player](https://github.com/mbasso/refraction-player) to reproduce all events and easily find bugs.
