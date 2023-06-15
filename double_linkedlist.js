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

class DoubleLinkedlist
{
    constructor()
    {
        this.head=null;
        this.size=0;
    }

    addinLast(data)
    {
        var node=new Node(data);
        if(this.head==null)
        {
            this.head=node;
            current=this.head;
            previous=this.head;
            // console.log(this.head);
            this.size+=1;
        }
        else
        {
            // console.log(node);
            // console.log(node);
            node.prev=previous;
            current.next=node;
            previous=node;
            current=current.next
            // console.log(this.head);
            this.size+=1;
        }
    }

    addinFront(data)
    {
        var node=new Node(data);
        // var temp=this.head.prev;
        // this.head.prev=node;
        // node.prev=temp;
        node.next=this.head;
        this.head=node;
        this.size+=1;
    }

    removeFrom(index)
    {
        if(index<this.size && index>=0)
        {
            if(index==0 && this.size==1)
            {
                this.head=null;
                this.size=0;
            }
            else if(index==0)
            {
                this.head=this.head.next;
                this.head.prev=null;
                this.size-=1;
            }
            else if(index==this.size-1)
            {
                var before,after=this.head;
                while(after.next!=null)
                {
                    before=after;
                    after=after.next;
                }
                before.next=null;
                current=before;
                previous=before;
                this.size-=1;
            }
            else
            {
                var idx=0;
                var before,after=this.head;
                while(idx<index)
                {
                    before=after;
                    after=after.next;
                    idx+=1;
                }
                after=after.next;
                before.next=after;
                after.prev=before;
                this.size-=1;
            }
            // console.log(this.head);
        }
        else
        {
            console.log("out of length");
        }
    }

    insertAt(data,index)
    {
        if(index<this.size && index>=0)
        {
            var node=new Node(data);
            var before,after=this.head;
            var idx=0;
            while(idx<index)
            {
                before=after;
                after=after.next;
                idx+=1;
            }
            before.next=node;
            node.prev=before;
            after.prev=node;
            node.next=after;
            this.size+=1;
        }
        else
        {
            console.log("out of length");
        }
    }

    print()
    {
        var print_data=this.head;
        while(print_data.next!=null)
        {
            console.log(print_data.data);
            print_data=print_data.next;
        }
        console.log(print_data.data);
        while(print_data.prev!=null)
        {
            console.log(print_data.data);
            print_data=print_data.prev;
        }
        console.log(print_data.data);
    }
}
var double_linkedlist=new DoubleLinkedlist();
double_linkedlist.addinLast(2);
double_linkedlist.addinLast(3);
double_linkedlist.addinLast(4);
double_linkedlist.addinLast(5);
double_linkedlist.addinFront(1);
double_linkedlist.addinLast(6);
double_linkedlist.addinFront(0);
double_linkedlist.removeFrom(0);
double_linkedlist.removeFrom(2);
double_linkedlist.insertAt(3,2);
double_linkedlist.removeFrom(5);
double_linkedlist.addinLast(6);
double_linkedlist.print();