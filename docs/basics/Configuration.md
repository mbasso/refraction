# Configuration

After that we have installed Refraction package, first thing that we have to do in order to getting started is create an instance of Refraction.

```js
const refractionInstance = new Refraction();
```

That's all! We are ready to subscribe and publish events. But... If we want to add some functionality that there are not in Refraction? Like a series of transformations to apply to values before publishing? We can extend Refraction to add some things and we can use `middlewares` to apply these transformations. A Middleware is simply a function that will be applied to the message before the publication on its channel and must return the new message. For example, you can decide to place a middleware that extract only the value from the event or a middleware that simply log everything, returning the same message, before the publication. Refraction constructor accept as parameter an array of middlewares, so, when you create the instance, you can set them.

```js
const eventMiddleware = (event) => {
  return event.target.value;
}

const logger = (value) => {
  console.log(values);
  return values;
}

const refractionInstance = new Refraction([eventMiddleware, logger]);
```

This is the way to create a simple Refraction object that we will use later in our app. In the next section we will see another method to create this object and add other functionality.

Based on our idea, you might have a single instance of Refraction in your application, but there are no limitations to this, you can create various instances based on your needs. Make your choice considering the benefits of having a single and multiple point of control.
