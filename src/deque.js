class Deque {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.lowestCount = 0;
      this.items[0] = element;
    }
  }

  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }

  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowerstCount];
    delete this.items[this.lowerstCount];
    this.lowerstCount++;
    return result;
  }

  removeBack() {}

  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowerstCount];
  }

  peekBack() {}

  isEmpty() {
    return this.count - this.lowerstCount === 0;
  }
  size() {
    return this.count - this.lowerstCount;
  }

  clear() {
    this.count = 0;
    this.lowerstCount = 0;
    this.items = {};
  }

  toString() {
    if (this.isEmpty()) {
      return undefined;
    }

    let objString = `${this.items[this.lowerstCount]}`;

    for (let i = this.lowerstCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }

    return objString;
  }
}
