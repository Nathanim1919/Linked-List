
// create Node class to create a new node
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}



// create A linked list
class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.lenght = 0;
    }

    // append new node at the end of the linked list
    append(value){
        let newNode = new Node(value);

        if(this.tail){
            this.tail.next  = newNode;
            this.tail = newNode;
            this.lenght++;
        }
        else{
            this.tail = this.head = newNode;
            this.lenght++;
        }
       
    }

    // append new node at the beginning of the linked list
    prepend(value){
        let newNode = new Node(value);

        if(this.head){
           newNode.next = this.head;
           this.head = newNode
            this.lenght++;
        }
        else{
            this.tail = this.head = newNode;
            this.lenght++;
        }
    }

    showLength(){
        return this.lenght;
    }

    returnHead(){
        return this.head;
    }

    returnTail(){
        return this.tail;
    }

    printAll(){
       let current = this.head;
       while(current){
            console.log(current.value)
            current = current.next
       }
    }

    pop(){
        this.tail = null;
        this.lenght--;
    }

    find(value){
        let count = 0;
        let current = this.head;
        while(current){
            if(current.value == value){
                return count;
            }
            current = current.next;
            count++;
        }
        return null;
    }



    at(index){
        let count = 0;
        let current =  this .head;
        while(current){
            
            if(count == index){
                console.log(current)
            }
            count++;
            current = current.next;
        }
    }

    containesValue(value){
        let current = this.head;
        while(current){
            if(current.value == value){
                console.log('true');
            }
            current = current.next;
        }

        console.log('false');
    }

    changetoSting(){
        let current = this.head;
        let str = '';
        while(current){
             str += `->(${current.value})`;
            current = current.next;
        }
        str += `->null`;
        console.log(str);
    }

    insertAt(value,index){
        let newNode = new Node();
            newNode.value = value;
        let count = 0;
        let current = this.head;
        
        while(current){
            if (count == index) {
                newNode.next = current.next;
                current.next = newNode;
            }
        }
    }

}

let myLinkedList = new LinkedList();
myLinkedList.append(10);
myLinkedList.append(30);
myLinkedList.append(60);
myLinkedList.append(120);
// myLinkedList.insertAt(100,2);
myLinkedList.changetoSting();






