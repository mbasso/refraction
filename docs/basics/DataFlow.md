# Data flow

Refraction concept is really simple. As we said before, Refraction add an intermediate layer that handle all messages that an application use, to allow the communication between modules. In practice, Refraction act as a Mediator with a pub/sub mechanism. You have to define some channels on which you can pass values and a series of subscribers that act accordingly after that an event is published on a certain channel.

![Data Flow](../images/DataFlow.png)

For example, if module `A` want to communicate something to modules `B` and `C`, it has to call Refraction saying that he wants to publish a value on channel `x`. Modules `B` and `C` in order to get and handle this value, must have been subscribed to channel `x`.

![Example](../images/Example.png)

Here we can see an example with 3 modules: AuthManager, ChatManager and Logger.
When a user log in, AuthManager publishes an event on channel `userLoggedIn` with a payload containing username. At this point Refraction notifies to others this event. ChatManager and Logger that are subscribed, handle the payload of the event. Logger logs on the console the value and ChatManager adds the user to the chat list. We have 3 modules that communicate but only know the existence of Refraction, each functionality is perfectly independent from the others. We can perfectly reuse this modules in other systems without too much changes.
