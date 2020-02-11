class Queue {
  constructor() {
    this.count = 0;
    this.lowerstCount = 0;
    this.items = {};
  }

  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowerstCount];
    delete this.items[this.lowerstCount];
    this.lowerstCount++;
    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowerstCount];
  }

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

const queue = new Queue();

console.log(queue.isEmpty());

queue.enqueue("John");
queue.enqueue("Jack");

console.log(queue.toString());

queue.enqueue("Camila");

console.log(queue.toString());

console.log(queue.size());

console.log(queue.isEmpty());

queue.dequeue();
queue.dequeue();

console.log(queue.toString());
