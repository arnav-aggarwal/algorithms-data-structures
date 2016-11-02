/**
 * StringBuilder.js
 *
 * 
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

// const sb = new StringBuilder('a', 'badfd');
// sb.append('asdfadsa')
// console.log(sb);
// console.log(sb.toString());
