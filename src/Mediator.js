export default class {

  constructor() {
    this.subscribers = [];
    this.publish = ::this.publish;
  }

  subscribe(subscriber) {
    if (this.subscribers.indexOf(subscriber) === -1) {
      this.subscribers.push(subscriber);
    }
  }

  unsubscribe(subscriber) {
    const index = this.subscribers.indexOf(subscriber);
    if (index !== -1) {
      this.subscribers.splice(index, 1);
    }
  }

  publish(channel, param) {
    this.subscribers.forEach((subscriber) => {
      if (!subscriber) {
        this.unsubscribe(subscriber);
      } else if (subscriber[channel]) {
        subscriber[channel](param);
      }
    });
  }

}
