const readline=require("readline-sync");

var current;
var data;

class Node
{
    constructor(data)
    {
        this.data=data;
        this.next=null;
    }
}

class Linkedlist
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
            // console.log(this.head);
            this.size+=1;
            current=this.head;
        }
        else
        {
            current.next=node;
            // console.log(current);
            current=current.next;
            // console.log(current);
            this.size+=1;
        }
    }

    insertAt(data,index)
    {
        if(index<this.size && index>=0)
        {
            // console.log("hi");
            var node=new Node(data);
            // console.log(node);
            var before,after;
            after=this.head;
            var idx=0;
            if(index==0)
            {
                node.next=this.head;
                this.head=node;
                this.size+=1;
            }
            else
            {
                while(idx<index)
                {
                    before=after;
                    after=after.next;
                    idx+=1;
                }
                node.next=after;
                before.next=node;
                this.size+=1;
            }        
        }
        else
        {
            console.log("out of length");
        }
        
    }

    removeFrom(index)
    {
        if(index<this.size && index>=0)
        {
            var idx=0;
            var before,after=this.head;
            // console.log(this.size);
            if(index==0 && this.size==1)
            {
                this.head=null;
                this.size=0;
            }
            else if(index==0)
            {
                this.head=this.head.next;
                this.size-=1;
            }
            else
            {
                if(index<this.size)
                {
                    while(idx<index)
                    {
                        before=after;
                        after=after.next;
                        idx+=1;
                    }
                    before.next=after.next;
                    this.size-=1;
                }
            }
        }
        else
        {
            console.log("out of length");
        }
    }

    removeDuplicate()
    {
        var temp1=this.head;
        var temp2,temp3,temp4;
        do
        {
            // temp4=temp1;
            temp2=temp1;
            do
            {
                temp3=temp2.next;
                if(temp3!=null && temp3.data==temp1.data)
                {
                    temp2.next=temp3.next;
                    this.size-=1;
                }
                else
                {
                    temp2=temp2.next;
                }
            }
            while(temp2!=null)
            temp1=temp1.next;
        }
        while(temp1!=null)
        // console.log(temp4);
    }

    mergelistAt(index,l2)
    {
        if(index>0 && index<this.size)
        {
            var before,after=this.head;
            var idx=0
            while(idx!=index)
            {
                before=after;
                after=after.next;
                idx+=1;
            }
            before.next=l2;
            while(l2.next!=null)
            {
                l2=l2.next;
            }
            l2.next=after;
        }
        else
        {
            console.log("out of length");
        }
    }

    // removeData(data)
    // {
    //     var before,after=this.head;
    //     if(this.head.data==data && this.size==1)
    //     {
    //         this.head=null;
    //         this.size=0;
    //     }
    //     else if(this.head.data==data)
    //     {
    //         this.head=this.head.next;
    //         this.size-=1;
    //     }
    //     else
    //     {
    //         while(data!=after.data)
    //         {
    //             before=after;
    //             after=after.next;
    //         }
    //         before.next=after.next;
    //         this.size-=1;
    //     }
    // }

    print()
    {
        var print_data;
        print_data=this.head;
        if(print_data!=null)
        {
            while(print_data.next!=null)
            {
                console.log(print_data.data);
                print_data=print_data.next;
            }
            console.log(print_data.data);
        }
    }
}
var linkedlist=new Linkedlist();
var linkedlist_1=new Linkedlist();
// linkedlist.add(1);
// linkedlist.add(2);
// linkedlist.add(4);
// linkedlist.add(5);
// linkedlist.insertAt(0,0);
// linkedlist.insertAt(3,3);
// linkedlist.removeFrom(0);
// linkedlist.removeFrom(4);
// linkedlist.removeFrom(3);
// linkedlist.removeFrom(4);
// linkedlist.add(5);
// linkedlist.add(6);
// linkedlist.insertAt(4,3);
linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.add(4);
linkedlist.add(5);
linkedlist.add(6);
linkedlist.add(7);

linkedlist_1.add(20);
linkedlist_1.add(30);
linkedlist_1.add(40);
linkedlist_1.add(50);

linkedlist.mergelistAt(3,linkedlist_1.head);
// console.log(linkedlist_1.head);
// linkedlist.add(5);
// linkedlist.add(5);
// linkedlist.add(5);
// linkedlist.add(4);
// linkedlist.print();
// console.log("-----");
// linkedlist.removeDuplicate();
// linkedlist.removeFrom(4);
// linkedlist.removeFrom(1);
// linkedlist.removeFrom(0);
// linkedlist.removeData(1);
// linkedlist.removeData(3);
// linkedlist.removeData(2);
// linkedlist.removeData(5);
linkedlist.print();
// data= readline.question("enter the data: ");
// linkedlist.insertAt(data,1);
// data= readline.question("enter the data: ");
// linkedlist.insertAt(data,2);
// linkedlist.print();
// data= readline.question("enter the data: ");
// while(data>=0)
// {
//     linkedlist.add(data);
//     data= readline.question("enter the data: ");
// }
// linkedlist.print();
