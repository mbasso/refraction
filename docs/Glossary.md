# Glossary

### Channel
Identify a channel in which will pass a certain value. For example, a channel might be 'onUserLogin', or 'onNewChatMessage'.

### Subscriber
An object that listen a certain amount of channels and act accordingly.

### Middleware
A function that will be applied to the message before the publication on its channel. It must return the new message. For example, you can decide to place a middleware that extract only the value from the event or a middleware that simply log everything, returning the same message, before the publication.

### History
A list that contains all events that your application has handled
