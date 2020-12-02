function SinglyNode(data, next) {
  this.data = data;
  this.next = next || null;
}

function SinglyLinkedList() {
  this.head = null;
  this.size = 0;
}

SinglyLinkedList.prototype.insertFirst = function (data) {
  this.head = new SinglyNode(data, this.head);

  this.size++;
};

SinglyLinkedList.prototype.insertLast = function (data) {
  let node = new SinglyNode(data);
  let current;

  if (!this.head) {
    this.head = node;
  } else {
    current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = node;
  }

  this.size++;
};

SinglyLinkedList.prototype.printListData = function () {
  let current = this.head;

  while (current) {
    console.log(current.data);

    current = current.next;
  }
};

SinglyLinkedList.prototype.insertAt = function (data, index) {
  if (index > 0 && index > this.size) {
    return;
  }

  if (index === 0) {
    this.head = new SinglyNode(data, this.head);
  }

  var node = new SinglyNode(data);
  var current, previous;

  current = this.head;
  var count = 0;

  while (count < index) {
    previous = current;
    count++;
    current = current.next;
  }

  node.next = current;
  previous.next = node;

  this.size++;
};

SinglyLinkedList.prototype.getAt = function (index) {
  let current = this.head;
  let count = 0;

  while (current) {
    if (count === index) {
      console.log(current.data);
    }
    count++;
    current = current.next;
  }

  return null;
};

SinglyLinkedList.prototype.removeAt = function (index) {
  if (index > 0 && index > this.size) {
    return;
  }

  let current = this.head;
  let previous;
  let count = 0;

  if (index === 0) {
    this.head = current.next;
  } else {
    while (count < index) {
      count++;

      previous = current;
      current = current.next;
    }

    previous.next = current.next;
  }

  this.size--;
};

SinglyLinkedList.prototype.clearList = function (index) {
  this.head = null;
  this.size = 0;
};

const ll = new SinglyLinkedList();
// ll.insertFirst(1);
// ll.insertFirst(2);
// ll.insertFirst(3);
// ll.insertFirst(4);
ll.insertLast(1);
ll.insertLast(2);
ll.insertLast(4);
ll.insertLast(5);

ll.removeAt(2);
ll.printListData();

// ll.printListData();
// ll.getAt(2);
