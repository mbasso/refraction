import expect from 'expect';
import Refraction from '../src/';

describe('Refraction', () => {
  let refraction = new Refraction();
  const subscriber = { onSuccess: () => true };
  const eventMiddleware = (channel, param) => {
    const result = param;
    if (result.type === 'event' && result.payload.target) {
      result.payload = result.payload.target.value;
    }
    return result;
  };
  const greetingsMiddleware = (channel, param) => {
    const result = param;
    const { sentence, name } = result.payload;
    if (result.type === 'greeting' && sentence && name) {
      result.payload = `${sentence}, ${name}!`;
    }
    return result;
  };

  afterEach(() => {
    refraction = new Refraction();
  });

  it('should create a Refraction', () => {
    expect(refraction.middlewares).toEqual([refraction.addToHistory]);
    refraction = new Refraction([eventMiddleware]);
    expect(refraction.middlewares).toEqual([eventMiddleware, refraction.addToHistory]);
  });

  it('should appy middleware', () => {
    refraction.applyMiddleware();
    expect(refraction.middlewares).toEqual([refraction.addToHistory]);
    refraction.applyMiddleware(eventMiddleware);
    expect(refraction.middlewares).toEqual([refraction.addToHistory, eventMiddleware]);
    refraction.applyMiddleware(eventMiddleware, greetingsMiddleware);
    expect(refraction.middlewares).toEqual([
      refraction.addToHistory,
      eventMiddleware,
      eventMiddleware,
      greetingsMiddleware,
    ]);
  });

  it('should add to history', () => {
    global.performance = {};
    refraction.addToHistory('testChannel', { value: 'foo' });
    const history = refraction.getHistory();
    expect(history[history.length - 1]).toMatch({
      channel: 'testChannel',
      param: {
        value: 'foo',
      },
    });
  });

  it('should subscribe', () => {
    refraction.subscribe(subscriber);
    const unsubscribe = refraction.subscribe(subscriber);
    expect(refraction.mediator.subscribers).toEqual([subscriber]);
    unsubscribe();
    expect(refraction.mediator.subscribers).toEqual([]);
  });

  it('should unsubscribe', () => {
    const unknownSubscriber = { onFail: () => false };
    refraction.subscribe(subscriber);
    refraction.unsubscribe(subscriber);
    refraction.unsubscribe(unknownSubscriber);
    expect(refraction.mediator.subscribers).toEqual([]);
  });

  it('should publish', () => {
    global.performance = {};
    const message = {
      type: 'greeting',
      payload: {
        sentence: 'Hello',
        name: 'World',
      },
    };
    const tester = {
      beforeMiddleware: (param) => {
        expect(param).toEqual(message);
      },
      afterMiddleware: (param) => {
        expect(param).toEqual({
          type: 'greeting',
          payload: 'Hello, World!',
        });
      },
    };
    refraction.subscribe(subscriber);
    refraction.subscribe(tester);
    refraction.publish('beforeMiddleware', message);
    refraction = new Refraction([eventMiddleware, greetingsMiddleware]);
    refraction.subscribe(subscriber);
    refraction.subscribe(tester);
    refraction.publish('afterMiddleware', message);
  });

  it('should set history limit', () => {
    refraction.setHistoryLimit(300);
    expect(refraction.history.limit).toEqual(300);
  });

  it('should get history', () => {
    global.performance = {
      now: () => 100,
    };
    refraction.addToHistory('testChannel', { value: 'foo' });
    const history = refraction.getHistory();
    expect(Array.isArray(history)).toEqual(true);
    expect(history[0]).toMatch({
      channel: 'testChannel',
      param: {
        value: 'foo',
      },
    });
  });
});
