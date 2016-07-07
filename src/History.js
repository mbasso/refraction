export default class History {

  items = [];
  limit = 200;

  constructor(limit) {
    this.setLimit(limit);
  }

  setLimit(limit) {
    this.limit = Number(limit) > 0 ? Number(limit) : this.limit;
  }

  add(payload) {
    this.items.push(payload);
    if (this.items.length > this.limit) {
      this.items = this.items.slice(this.items.length - this.limit);
    }
  }

  get() {
    return this.items;
  }

  clear() {
    this.items = [];
  }

}
