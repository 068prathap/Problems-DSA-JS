var pwd=[4,2,6,8,5,9];
var key=[[1,2,3],
         [4,5,6],
         [7,8,9]];
var adj=new Map();
for(var i=0;i<3;i++)
{
    for(var j=0;j<3;j++)
    {
        var k=key[i][j];
        var arr=[];
        if(i!=0)
        {
            arr.push(key[i-1][j]);
        }
        if(j!=2)
        {
            arr.push(key[i][j+1]);
        }
        if(i!=2)
        {
            arr.push(key[i+1][j]);
        }
        if(j!=0)
        {
            arr.push(key[i][j-1]);
        }
        adj.set(k,arr);
    }
}
console.log(adj);
var time=1;
for(var i=1;i<pwd.length;i++)
{
    if(pwd[i]!=pwd[i-1])
    {
        var arr=adj.get(pwd[i]);
        // console.log(arr);
        if(arr.indexOf(pwd[i-1])!=-1)
        {
            time+=1;
        }
        else
        {
            time+=2;
        }
    }
}
console.log(time);