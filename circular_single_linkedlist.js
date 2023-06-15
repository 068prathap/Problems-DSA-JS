var current;

class Node
{
    constructor(data)
    {
        this.data=data;
        this.next=null;
    }
}

class CircularSingleLinkedlist
{
    constructor()
    {
        this.head=null;
        this.size=0;
    }

    add(data)
    {
        var node=new Node(data);
        if(this.head==null)
        {
            this.head=node;
            current=this.head;
            this.size+=1;
        }
        else
        {
            current.next=node;
            current=current.next;
            this.size+=1;
        }
        current.next=this.head;
    }

    print()
    {
        var print_data=this.head;
        do
        {
            console.log(print_data.data);
            print_data=print_data.next;
        }
        while(print_data!=this.head)
    }
}
var circular_single_linkedlist=new CircularSingleLinkedlist();
circular_single_linkedlist.add(1);
circular_single_linkedlist.add(2);
circular_single_linkedlist.add(3);
circular_single_linkedlist.add(4);
circular_single_linkedlist.add(5);
circular_single_linkedlist.print();