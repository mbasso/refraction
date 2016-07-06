import expect from 'expect';
import Mediator from '../src/Mediator';

describe('Mediator', () => {
  const mediator = new Mediator();
  const subscriber = { onSuccess: () => true };

  afterEach(() => {
    mediator.subscribers = [];
  });

  it('should create a Mediator', () => {
    expect(mediator.subscribers).toEqual([]);
  });

  it('should subscribe', () => {
    mediator.subscribe(subscriber);
    mediator.subscribe(subscriber);
    expect(mediator.subscribers).toEqual([subscriber]);
  });

  it('should unsubscribe', () => {
    const unknownSubscriber = { onFail: () => false };
    mediator.subscribe(subscriber);
    mediator.unsubscribe(subscriber);
    mediator.unsubscribe(unknownSubscriber);
    expect(mediator.subscribers).toEqual([]);
  });

  it('should publish', () => {
    const message = { type: 'event', payload: 'Hello, world!' };
    const tester = {
      onTest: (param) => {
        expect(param).toEqual(message);
      },
    };
    mediator.subscribe(subscriber);
    mediator.subscribe(tester);
    mediator.publish('onTest', message);
  });

  it('should unsubscribe an invalid subscriber', () => {
    mediator.subscribe(null);
    expect(mediator.subscribers).toEqual([null]);
    mediator.publish('channel', { type: 'event', payload: 'Hello, world!' });
    expect(mediator.subscribers).toEqual([]);
  });
});
