class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.count - 1];
    delete this.items[this.count - 1];
    this.count--;

    return result;
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }

  clear() {
    this.items = {};
    this.count = 0;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }

    let objString = `${this.items[0]}`;

    for (let i = 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }

    return objString;
  }
}

function decimalToBinary(decNumber) {
  const remStack = new Stack();
  let number = decNumber;
  let rem;
  let binaryString = "";

  while (number > 0) {
    rem = Math.floor(number % 2);
    remStack.push(rem);
    number = Math.floor(number / 2);
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }

  return binaryString;
}

console.log(decimalToBinary(233));
console.log(decimalToBinary(10));
console.log(decimalToBinary(1000));

function baseConverter(decNumber, base) {
  const remStack = new Stack();
  const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let number = decNumber;
  let baseString = "";

  if (!(base >= 2 && base <= 36)) {
    return "";
  }

  while (number > 0) {
    rem = Math.floor(number % base);
    remStack.push(rem);
    number = Math.floor(number / base);
  }

  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()];
  }

  return baseString;
}

console.log(baseConverter(100345, 2));
console.log(baseConverter(100345, 8));
console.log(baseConverter(100345, 16));
console.log(baseConverter(100345, 35));
