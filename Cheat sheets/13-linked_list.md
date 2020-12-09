# Linked List
- A linked list is a linear data structure similar to an array. However, unlike arrays, elements are not stored in a particular memory location or index. Rather each element is a separate **object** that contains a pointer or a link to the next object in that list.
- Each element (commonly called **nodes**) contains two items: the data stored and a link to the next node. The data can be **any** valid data type. 
- The entry point to a linked list is called the **head**. 
- The **head** is a reference to the first node in the linked list. 
- The **last** node on the list points to **null**. 
- If a list is **empty**, the **head** is a **null** reference.
- **Nodes** can easily be removed or added from a linked list without reorganizing the entire data structure. This is one advantage it has over arrays.
- Search operations are slow in linked lists. 
- Unlike arrays, random access of data elements is not allowed. 
- Nodes are accessed sequentially starting from the first node.
- It uses more memory than arrays because of the storage of the pointers.

## Types of Linked Lists

### Singly Linked Lists
- Each node contains only **one pointer to the next node**.
### Doubly Linked Lists
- Each node contains **two pointers**, a pointer to the next node and a pointer to the previous node
### Circular Linked Lists
- are a variation of a linked list in which the last node points to the first node or any other node before it, thereby forming a loop.




- In JavaScript, a linked list looks like this:
> const List = {
    head: {
        value: 6
        next:{
            value: 10
            next:{
                value: 12
                next:{
                    value: 3
                    next: null
                }
            }
        }
    }
}

- We can implement a list node in JavaScript as follows:
> class ListNode{
    constructor(data){
        this.data = data,
        this.next = null
    }
}
- The code below shows the implementation of a linked list class with a constructor. Notice that if the head node is not passed, the head is initialised to null.
> class ListNode{
    constructor(head = null){
        this.head = head
    }
}


- create a linked list 
> let node1 = new ListNode(2)
>
>let node2 = new ListNode(5)
>
>node1.next = node2
>
>let list = new LinkedList(node1)

## helper methods for the linked list
### size()
- This method returns the number of nodes present in the linked list.
> size() {
    let count = 0; 
    let node = this.head;
    while (node) {
        count++;
        node = node.next
    }
    return count;
}

### clear()
- This method empties out the list.
> clear() {
    this.head = null;
}

### getLast()
- This method returns the last node of the linked list.
> getLast() {
    let lastNode = this.head;
    if (lastNode) {
        while (lastNode.next) {
            lastNode = lastNode.next
        }
    }
    return lastNode
}

### getFirst()
- This method returns the first node of the linked list.
> getFirst() {
    return this.head;
}



# Implementing Linked List
/* LinkedList */

function LinkedList() { 
  var length = 0; 
  var head = null; 

  var Node = function(element){
    this.element = element; 
    this.next = null; 
  }; 

  this.size = function(){
    return length;
  };

  this.head = function(){
    return head;
  };

  this.add = function(element){
    var node = new Node(element);
    if(head === null){
        head = node;
    } else {
        var currentNode = head;

        while(currentNode.next){
            currentNode  = currentNode.next;
        }

        currentNode.next = node;
    }

    length++;
  }; 

  this.remove = function(element){
    var currentNode = head;
    var previousNode;
    if(currentNode.element === element){
        head = currentNode.next;
    } else {
        while(currentNode.element !== element) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        previousNode.next = currentNode.next;
    }

    length --;
  };
  
  this.isEmpty = function() {
    return length === 0;
  };

  this.indexOf = function(element) {
    var currentNode = head;
    var index = -1;

    while(currentNode){
        index++;
        if(currentNode.element === element){
            return index;
        }
        currentNode = currentNode.next;
    }

    return -1;
  };

  this.elementAt = function(index) {
    var currentNode = head;
    var count = 0;
    while (count < index){
        count ++;
        currentNode = currentNode.next
    }
    return currentNode.element;
  };
  
  
  this.addAt = function(index, element){
    var node = new Node(element);

    var currentNode = head;
    var previousNode;
    var currentIndex = 0;

    if(index > length){
        return false;
    }

    if(index === 0){
        node.next = currentNode;
        head = node;
    } else {
        while(currentIndex < index){
            currentIndex++;
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        node.next = currentNode;
        previousNode.next = node;
    }
    length++;
  }
  
  this.removeAt = function(index) {
    var currentNode = head;
    var previousNode;
    var currentIndex = 0;
    if (index < 0 || index >= length){
        return null
    }
    if(index === 0){
        head = currentNode.next;
    } else {
        while(currentIndex < index) {
            currentIndex ++;
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        previousNode.next = currentNode.next
    }
    length--;
    return currentNode.element;
  }

} 

var conga = new LinkedList();
conga.add('Kitten');
conga.add('Puppy');
conga.add('Dog');
conga.add('Cat');
conga.add('Fish');
console.log(conga.size());
console.log(conga.removeAt(3));
console.log(conga.elementAt(3));
console.log(conga.indexOf('Puppy'));
console.log(conga.size());






<!-- https://humanwhocodes.com/blog/2019/01/computer-science-in-javascript-linked-list/#:~:text=A%20linked%20list%20is%20a,there%20is%20no%20next%20node. -->
<!-- https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/ -->