var size=0;
var vertices=[];

class Graph
{
    constructor()
    {
        this.graph=new Map();
    }

    addVertex(vertex)
    {
        this.graph.set(vertex,[]);
        size+=1;
        vertices.push(vertex);
    }

    addEdge(source,destination)
    {
        this.graph.get(source).push(destination);
        this.graph.get(destination).push(source);
    }

    dfs()
    {
        var tf=[];
        this.printDFS(vertices[0],this.graph.get(vertices[0]),tf);
    }
    printDFS(key,con,tf)
    {
        if(tf.indexOf(key)==-1)
        {
            // console.log("hi");
            console.log(key);
            tf.push(key);
            for(var i=0;i<con.length;i++)
            {
                this.printDFS(con[i],this.graph.get(con[i]),tf);
            }
        }
    }

    adjMatrix(graph)
    {
        var mrx=[];
        // var vertices=graph.keys();
        // console.log(vertices);
        var a=0;
        var x=[];
        for(var i=0;i<vertices.length;i++)
        {
            var arr=graph.get(vertices[i]);
            for(var j=0;j<vertices.length;j++)
            {
                // console.log(vertices[j]);
                for(var k=0;k<arr.length;k++)
                {
                    if(vertices[j]==arr[k])
                    {
                        a=1;
                    }
                }
                // console.log(a);
                x.push(a);
                a=0;
            }
            mrx.push(x);
            x=[];
        }
        console.log(mrx);
    }
}
var graph=new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addVertex(6);
graph.addEdge(1,2);
graph.addEdge(1,4);
graph.addEdge(1,5);
graph.addEdge(2,3);
graph.addEdge(2,4);
graph.addEdge(3,4);
graph.addEdge(3,6);
graph.addEdge(4,5);
graph.addEdge(5,6);
console.log(graph.graph);
graph.dfs();
graph.adjMatrix(graph.graph);