# Motivation

Modern javascript application are more often organized in modules, they are awesome but they involve some problems that we cannot avoid.
When we are writing an application in this way, we must consider that all our modules might be **independent**, **testable**, **instantly re-usable** and **secure**.
Refraction purpose is making these things real in an easy way using some design patterns.
Since modules might be independent, with **no inter-module dependencies**, refraction add an intermediate layer that handle all messages that an application use, to allow the communication between modules. In this way modules haven't to know each other but only this layer that is responsible to manage all the communications. If we want to change a module, we can do it without worries.
Modules have a very limited knowledge of what's going in the rest of the system. For this reason we can define refraction as a guard, a central point of control.
