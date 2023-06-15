class Node
{
    constructor(data)
    {
        this.data=data;
        this.next=null;
    }
}

class Stack
{
    constructor()
    {
        this.stack=null;
        this.size=0;
    }

    push(data)
    {
        var node=new Node(data);
        if(this.stack==null)
        {
            this.stack=node;
            this.size+=1;
        }
        else
        {
            node.next=this.stack;
            this.stack=node;
            this.size+=1;
        }
    }

    pop()
    {
        if(this.size>=0)
        {
            this.stack=this.stack.next;
            this.size-=1;
        }
        else
        {
            console.log("empty");
        }
    }

    peek()
    {
        console.log(this.stack.data);
    }

    print()
    {
        var pnt=this.stack;
        while(pnt.next!=null)
        {
            console.log(pnt.data);
            pnt=pnt.next;
        }
        console.log(pnt.data);
    }
}
var stack=new Stack();
stack.push(1);
stack.push(2);
stack.pop();
stack.push(2);
stack.peek();

// stack.print();