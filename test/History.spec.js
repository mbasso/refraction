import expect from 'expect';
import History from '../src/History';

describe('History', () => {
  const history = new History();
  const items = [0, 1, 2, 3, 4];
  const addItems = () => {
    items.forEach((item) => {
      history.add(item);
    });
  };

  afterEach(() => {
    history.clear();
    history.setLimit(200);
  });

  it('should create an History', () => {
    expect(history.get()).toEqual([]);
    expect(history.limit).toEqual(200);
  });

  it('should add an item', () => {
    history.add(1);
    expect(history.items).toEqual([1]);
  });

  it('should get items', () => {
    history.add(1);
    expect(history.get()).toEqual([1]);
  });

  it('should clear', () => {
    addItems();
    history.clear();
    expect(history.get()).toEqual([]);
  });

  it('should set a limit', () => {
    history.setLimit(1000);
    expect(history.limit).toEqual(1000);
  });

  it('should overwrite if items are over limit', () => {
    history.setLimit(3);
    addItems();
    expect(history.get()).toEqual([2, 3, 4]);
  });
});
