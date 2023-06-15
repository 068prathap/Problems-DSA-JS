const readline=require("readline-sync");

var height=0,h1=1,sum=0,lmax=0,rmax=0,l1=0,r1=0,hd=0;

class Node
{
    constructor(data)
    {
        this.left=null;
        this.data=data;
        this.right=null;
    }
}

class BinarySearchTree
{
    constructor()
    {
        this.tree=null;
    }

    add(data)
    {
        var node=new Node(data);
        if(this.tree==null)
        {
            this.tree=node;
            height+=1;
        }
        else
        {
            var temp=this.tree;
            var val=true;
            while(val)
            {
                if(node.data<temp.data)
                {
                    if(temp.left==null)
                    {
                        temp.left=node;
                        val=false;
                        h1+=1;
                        l1+=1;
                        r1-=1;
                    }
                    else
                    {
                        temp=temp.left;
                        h1+=1;
                        l1+=1;
                        r1-=1;
                    }
                }
                if(node.data>temp.data)
                {
                    if(temp.right==null)
                    {
                        temp.right=node;
                        val=false;
                        h1+=1;
                        r1+=1;
                        l1-=1;
                    }
                    else
                    {
                        temp=temp.right;
                        h1+=1;
                        r1+=1;
                        l1-=1;
                    }
                }
                if(node.data==temp.data)
                {
                    val=false;
                }
            }
            if(height<h1)
            {
                height=h1;
            }
            h1=1;
            if(l1>lmax)
            {
                lmax=l1;
            }
            l1=0;
            if(r1>rmax)
            {
                rmax=r1;
            }
            r1=0;
        }
    }

    inorder(node)
    {
        if(node!=null)
        {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }

    preorder(node)
    {
        if(node!=null)
        {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    postorder(node)
    {
        if(node!=null)
        {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }

    bfs()
    {
        for(var i=1;i<=height;i++)
        {
            this.bfs1(this.tree,i);
        }
    }
    bfs1(node,level)
    {
        if(level==1)
        {
            console.log(node.data);
        }
        else
        {
            if(node.left!=null)
            {
                this.bfs1(node.left,level-1);
            }
            if(node.right!=null)
            {
                this.bfs1(node.right,level-1);
            }
        }
    }

    commonAncestor(data1,data2)
    {
        var val=true;
        var temp=this.tree;
        while(val)
        {
            if(data1<temp.data && data2<temp.data)
            {
                if(temp.left!=null)
                {
                    temp=temp.left;
                }
            }
            else if(data1>temp.data && data2>temp.data)
            {
                if(temp.right!=null)
                {
                    temp=temp.right;
                }
            }
            else
            {
                console.log(temp.data);
                val=false;
            }
        }
    }

    deleteRightleaf(node)
    {
        if(height>1)
        {
            if(node.right!=null)
            {
                if(node.right.left==null && node.right.right==null && node.left==null)
                {
                    node.right=null;
                }
                else
                {
                    this.deleteRightleaf(node.right);
                }
            }
            if(node.left!=null)
            {
                this.deleteRightleaf(node.left);
            }
        }
    }

    addSCnode(node)
    {
        if(node!=null)
        {
            if(node.right==null && node.left!=null || node.left==null && node.right!=null)
            {
                sum+=node.data;
            }
            if(node.left!=null)
            {
                this.addSCnode(node.left);
            }
            if(node.right!=null)
            {
                this.addSCnode(node.right);
            }
        }
    }

    verticalOrder()
    {
        for(var i=lmax;i>=0;i--)
        {
            this.VOl(this.tree,i,l1);
        }
        l1=0;
        for(var i=1;i<=rmax;i++)
        {
            this.VOr(this.tree,i,r1);
        }
        r1=0;
    }
    VOl(node,level,l1)
    {
        if(node!=null)
        {
            if(l1==level)
            {
                console.log(node.data);
            }
            this.VOl(node.left,level,l1+1);
            this.VOl(node.right,level,l1-1);
        }
    }
    VOr(node,level,r1)
    {
        if(node!=null)
        {
            if(r1==level)
            {
                console.log(node.data);
            }
            this.VOr(node.right,level,r1+1);
            this.VOr(node.left,level,r1-1);
        }
    }

    mirror(node)
    {
        if(node!=null)
        {
            this.mirror(node.left);
            // console.log("1--"+node.data);
            var temp=node.left;
            node.left=node.right;
            node.right=temp;
            this.mirror(node.left);
            // console.log("2--"+node.data);
        }
    }
}
var binary_search_tree=new BinarySearchTree();
// var ele= readline.question("enter the data: ");
// while(ele>=0)
// {
//     binary_search_tree.add(parseInt(ele));
//     var ele= readline.question("enter the data: ");
// }
binary_search_tree.add(8);
binary_search_tree.add(3);
binary_search_tree.add(10);
binary_search_tree.add(1);
binary_search_tree.add(6);
binary_search_tree.add(14);
// binary_search_tree.add(4);
// binary_search_tree.add(7);
// binary_search_tree.add(13);
// binary_search_tree.add(15);
// console.log(height);
// binary_search_tree.bfs();
// binary_search_tree.commonAncestor(6,14);
// binary_search_tree.deleteRightleaf(binary_search_tree.tree);
// binary_search_tree.inorder(binary_search_tree.tree);
// binary_search_tree.addSCnode(binary_search_tree.tree);
// console.log(sum);
// console.log(lmax);
// console.log(rmax);
// binary_search_tree.verticalOrder();
binary_search_tree.mirror(binary_search_tree.tree);
// binary_search_tree.inorder(binary_search_tree.tree);