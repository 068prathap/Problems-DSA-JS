var current,previous;

class Node
{
    constructor(data)
    {
        this.prev=null;
        this.data=data;
        this.next=null;
    }
}

class CircularDoubleLinkedlist
{
    constructor()
    {
        this.head=null;
        this.size=0;
    }
    
    inserAt(data,index)
    {
        if(index>=0 && index<this.size)
        {
            var node=new Node(data);
            // console.log(node);
            // console.log(this.head);
            if(index==0)
            {
                var temp=this.head.prev;
                current.next=node;
                node.next=this.head;
                this.head.prev=node;
                node.prev=temp;
                this.head=node;
                // console.log(node);
                // console.log(this.head);
            }
            else
            {
                var before,after=this.head;
                var idx=0;
                while(idx!=index)
                {
                    before=after;
                    after=after.next;
                    idx+=1;
                }
                node.prev=before;
                node.next=after;
                before.next=node;
                after.prev=node;
            }
            this.size+=1;
        }
        else
        {
            console.log("out of length");
        }
    }

    deleteAt(index)
    {
        if(index>=0 && index<this.size)
        {
            if(index==0)
            {
                var temp=this.head.prev;
                // console.log(temp);
                this.head=this.head.next;
                // console.log(this.head);
                this.head.prev=temp;
                // console.log(this.head);
                current.next=this.head;
            }
            else
            {
                var before,after=this.head;
                var idx=0;
                while(idx!=index)
                {
                    before=after;
                    after=after.next;
                    idx+=1;
                }
                after=after.next;
                before.next=after;
                after.prev=before;
            }            
            this.size-=1;
        }
        else
        {
            console.log("out of length")
        }
    }

    addinFront(data)
    {
        var node=new Node(data);
        var temp=this.head.prev;
        current.next=node;
        node.next=this.head;
        this.head.prev=node;
        node.prev=temp;
        this.head=node;
        this.size+=1;
    }

    deleteinEnd()
    {
        var temp=current;
        current=current.prev;
        current.next=temp.next;
        this.head.prev=current;
        this.size-=1;
    }

    addinLast(data)
    {
        var node=new Node(data);
        if(this.head==null)
        {
            this.head=node;
            current=this.head;
            previous=this.head;
        }
        else
        {
            node.prev=previous;
            current.next=node;
            previous=node;
            current=current.next;
        }
        current.next=this.head;
        this.head.prev=node;
        // console.log(this.head);
        this.size+=1;
    }

    print()
    {
        var print_data=this.head;
        do
        {
            console.log(print_data.data);
            print_data=print_data.next;
        }
        while(print_data!=this.head);
        // console.log(print_data);
        print_data=print_data.prev;
        do
        {
            console.log(print_data.data);
            print_data=print_data.prev;
        }
        while(print_data!=current);
    }
}
var circular_double_linkedlist=new CircularDoubleLinkedlist();
circular_double_linkedlist.addinLast(1);
circular_double_linkedlist.addinLast(2);
circular_double_linkedlist.addinLast(3);
circular_double_linkedlist.addinLast(4);
circular_double_linkedlist.addinLast(5);
circular_double_linkedlist.inserAt(0,0);
circular_double_linkedlist.inserAt(6,3);
circular_double_linkedlist.deleteAt(0);
circular_double_linkedlist.deleteAt(2);
circular_double_linkedlist.addinFront(0);
circular_double_linkedlist.deleteinEnd();
circular_double_linkedlist.print();