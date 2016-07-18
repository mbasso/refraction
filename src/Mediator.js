export default class Mediator {

  subscribers = [];

  subscribe(subscriber, compareFunction) {
    if (this.subscribers.indexOf(subscriber) === -1) {
      this.subscribers.push(subscriber);
      this.subscribers.sort(compareFunction);
    }
  }

  unsubscribe(subscriber) {
    const index = this.subscribers.indexOf(subscriber);
    if (index !== -1) {
      this.subscribers.splice(index, 1);
    }
  }

  publish = (channel, param) => {
    this.subscribers.forEach((subscriber) => {
      if (!subscriber) {
        this.unsubscribe(subscriber);
      } else if (subscriber[channel]) {
        subscriber[channel](param);
      }
    });
  }

}
