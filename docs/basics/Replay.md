# Replay, testing and automation

Reproduce a particular process in your application, testing and logging are very simple with Refraction.
Because Refraction is a central point of control in your application, it can save all published events and giving them back when you want. In this way you can re-publish all events and see your application working on its own. You can use this feature for example to reproduce a process that make your application crash.

Using this mechanism you can also test your application preparing a series of actions and publish them in sequence. Similarly you can use this for automate some steps during your application usage, for example, you can easily prepare an automatic tutorial.

**It's essential to do this, making payloads small and serializable**

An official module is available to do this, check out [refraction-player](https://github.com/mbasso/refraction-player)
