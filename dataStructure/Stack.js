function Stack() {
  this.stack = [];
}

Stack.prototype.push = function (element) {
  return this.stack.push(element);
};

Stack.prototype.pop = function () {
  if (this.stack.length === 0) throw new Error('Empty stack');

  return this.stack.pop();
};

console.log('Implementing stack');

const stack = new Stack();

console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(3));

console.log(stack.pop());
