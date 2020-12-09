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
      if(index < length){
        while (count < index){
            count ++;
            currentNode = currentNode.next
        }
        return currentNode.element;
      }
      return -1;
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
    };  

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
    };
  
  }

/**
 * You are given two linked-lists representing two non-negative integers. The digits are stored in reverse  * order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
 * 
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807 
 */

//   Solution 
// I am assuming the each node is delivered to us as an array

function addTwoLinkedList(listArr1, listArr2){
  let list1 = new LinkedList();
  listArr1.forEach(element => {
      list1.add(element);
  });

  let list2 = new LinkedList();
  listArr2.forEach(element => {
    list2.add(element);
  });

  function getTheReverseString(list){
    let returnStr = '';
    for(let i = list.size()-1; i >= 0; i--){
      returnStr += list.elementAt(i);
    }
    return returnStr;
  }

  let result = (Number(getTheReverseString(list1)) + Number(getTheReverseString(list2))).toString();
  let listResultArr = result.split('').reverse();

  let returnList = new LinkedList();
  listResultArr.forEach(element => {
    returnList.add(element);
  });
  return returnList.head();

}
console.log(addTwoLinkedList([2,4,3], [5,6,4]));
