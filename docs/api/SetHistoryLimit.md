# `setHistoryLimit(limit = 200)`

Set a limit to the size of history: how many items can be saved in the history.

#### Arguments

- limit (*number*): limit to apply to the history.

#### Example

```js
refractionInstance.setHistoryLimit(500);
```

#### Tips

* Decide accurately which will be your application limit. Set a low limit means potentially losing important events and set an high limit means save a lot of data.
