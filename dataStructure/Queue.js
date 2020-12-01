function Queue(reserve) {
  this.reserve = reserve ? reserve : false;
  this.queue = [];
}

Queue.prototype.enqueue = function (el) {
  return this.reserve ? this.queue.push(el) : this.queue.unshift(el);
};

Queue.prototype.dequeue = function () {
  if (this.queue.length === 0) throw new Error('Empty queue');
  return this.reserve ? this.queue.shift() : this.queue.pop();
};

console.log('Implementing queu');

const queue = new Queue(true);

console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue.enqueue(3));

console.log(queue.dequeue());
