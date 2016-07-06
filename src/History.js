export default class {

  constructor(limit) {
    this.setLimit(limit);
    this.items = [];
  }

  setLimit(limit) {
    this.limit = Number(limit) > 0 ? Number(limit) : 200;
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
