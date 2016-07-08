# `clearHistory()`

Clear the history of published events.

#### Example

Assuming that our application has published one event, here is an example.

```js
let history = refractionInstance.getHistory();
/* [{
  type: 'newMessage',
  payload: {
    chatroom: 'refraction-chatroom',
    sender: 'example_user',
    message: 'Hi all!',
  },
}] */
refractionInstance.clearHistory();
history = refractionInstance.getHistory();
/* [] */
```
