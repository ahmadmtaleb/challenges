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

<!-- https://humanwhocodes.com/blog/2019/01/computer-science-in-javascript-linked-list/#:~:text=A%20linked%20list%20is%20a,there%20is%20no%20next%20node. -->
<!-- https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/ -->