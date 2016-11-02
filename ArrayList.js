//ArrayList.js

class ArrayList extends Array {
  constructor(...items) {
    super();
    this.length = 4;
    Object.defineProperty(this, 'count', { 
      value: 0,
      writable: true,
    });
    this.push(...items);
  }
  
  push(...items) {
    const newCount = this.count + items.length;
    while(newCount >= this.length) {
      this.length *= 2;
    }
    
    items.forEach((item, index) => this[this.count + index] = item);
    this.count += items.length;
    return items;
  }
  
  pop() {
    if(this.count === 0) {
       throw new Error('Popping from an empty ArrayList');
    }
    
    if(this.count <= this.length / 4 && this.length > 4) {
      this.length /= 2;
    }
    
    const lastIndex = this.count - 1;
    const value = this[lastIndex];
    delete this[lastIndex];
    this.count--;
    return value;
  }
}
