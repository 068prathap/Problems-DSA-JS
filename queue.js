class Node
{
    constructor(data)
    {
        this.data=data;
        this.next=null;
    }
}

class Queue
{
    constructor()
    {
        this.queue=null;
        this.size=0;
    }

    insert(data)
    {
        var node=new Node(data);
        if(this.queue==null)
        {
            this.queue=node;
            this.size+=1;
        }
        else
        {
            this.queue.next=node;
            this.size+=1;
        }
    }

    delete()
    {
        this.queue=this.queue.next;
        this.size-=1;
    }

    peek()
    {
        console.log(this.queue.data);
    }

    print()
    {
        var pnt=this.queue;
        while(pnt.next!=null)
        {
            console.log(pnt.data);
            pnt=pnt.next;
        }
        console.log(pnt.data);
    }
}
var queue=new Queue();
queue.insert(1);
queue.insert(2);
queue.peek();
queue.delete();
queue.insert(1);
queue.peek();

queue.print();