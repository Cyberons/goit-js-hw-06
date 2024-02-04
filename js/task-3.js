class StringBuilder {
  #value;
  constructor(initialValue = "") {
    this.#value = initialValue;
  }
// Declaration of StringBuilder class with instance initialization and method calls.
  getValue() {
    return this.#value;
  }
// The getValue method returns the current value of the value private property.
  padStart(str) {
    this.#value = str + this.#value;
  }

  padEnd(str) {
    this.#value += str;
  }

  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
  // The padStart, padEnd, and padBoth methods add to the beginning, end, and both sides, respectively, of the value of the private property value of the object that calls these methods.
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="