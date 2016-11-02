/**
 * StringBuilder.js
 *
 * Seems redundant. The only value is the toString method.
 *
 * TODO: Tests
 */

class StringBuilder extends Array {
  constructor(...strings) {
    super();
    this.push(...strings);
  }

  toString() {
    return this.join('');
  }

  append(...items) {
    this.push(...items);
  }
}
