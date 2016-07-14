# Api Reference

As described before Refraction exports only one class, you need a set of other library to use all its functionality, see [Ecosystem](../introduction/Ecosystem.md) for more information.
Here is the list of methods that you can use on its instance:

- [constructor(middlewares = [])](/Constructor.md)
- [subscribe(subscriber)](/Subscribe.md)
- [unsubscribe(subscriber)](/Unsubscribe.md)
- [publish(channel, param)](/Publish.md)
- [setHistoryLimit(limit)](/SetHistoryLimit.md)
- [getHistory()](/GetHistory.md)
- [clearHistory()](/ClearHistory.md)

### Importing

Every function described above is a top-level export. You can import any of them like this:

#### ES6

```js
import Refraction from 'refraction'
```

#### ES5 (CommonJS)

```js
var Refraction = require('refraction').default
```
