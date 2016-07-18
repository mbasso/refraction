import Mediator from './Mediator';
import History from './History';

const getSubscriberLevel = (subscriber) => subscriber.refractionLevel || 100;

const compareFunction = (a, b) => {
  let result = 0;
  const aPriority = getSubscriberLevel(a);
  const bPriority = getSubscriberLevel(b);
  if (aPriority < bPriority) {
    result = -1;
  } else if (aPriority > bPriority) {
    result = 1;
  }
  return result;
};

export default class Refraction {

  middlewares = [];

  mediator = new Mediator();
  history = new History();

  constructor(middlewares = []) {
    this.applyMiddleware(...middlewares, this.addToHistory);
  }

  applyMiddleware = (...middlewares) => {
    if (middlewares.length === 1) {
      this.middlewares.push(middlewares[0]);
    } else if (middlewares.length > 0) {
      middlewares.forEach((middleware) => this.applyMiddleware(middleware));
    }
  }

  addToHistory = (channel, param) => {
    this.history.add({
      channel,
      time: (performance && performance.now) ? performance.now() : null,
      param,
    });
    return param;
  }

  subscribe(subscriber) {
    this.mediator.subscribe(subscriber, compareFunction);
    return this.unsubscribe.bind(this, subscriber);
  }

  unsubscribe(subscriber) {
    this.mediator.unsubscribe(subscriber);
  }

  publish(channel, param) {
    let newParam = param;
    this.middlewares.forEach((middleware) => {
      newParam = middleware(channel, newParam);
    });
    this.mediator.publish(channel, newParam);
  }

  setHistoryLimit(limit) {
    this.history.setLimit(limit);
  }

  clearHistory() {
    this.history.clear();
  }

  getHistory() {
    return this.history.get();
  }

}
