// create a function that returns a new node object

function createNode(value){
    return{
        value:value,
        next:null,
    };

}

// create a function that returns  alinkedlist

function linkedList(){

    head=null
    tail=null;
    length=0;

    const insert = (value)=>{
        length++;
        let newNode = createNode(value);

        if(tail){
            tail.next = newNode;
            tail=newNode;
            return newNode;
        }
        head = tail = newNode;
        return newNode;
    }

    const print =()=>{
        let current = head;
        while(current){
            console.log(current.value)
            current = current.next;
        }
    }

    return{
      
        insert,
        print,
    }
}

const my = linkedList()
my.insert(7)
my.print()