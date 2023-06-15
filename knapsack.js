var val=[ 60, 100, 120 ];;
var wit=[ 10, 20, 30 ];
var cpy=70;
var len=val.length;
var arr=new Array(len+1);
for(var i=0;i<=len;i++)
{
    arr[i]=new Array(cpy+1);
    for(var j=0;j<=cpy;j++)
    {
        if(i==0 || j==0)
        {
            arr[i][j]=0;
        }
        else if(wit[i-1]<=j)
        {
            arr[i][j]=Math.max(arr[i-1][j],val[i-1]+arr[i-1][j-wit[i-1]]);
        }
        else
        {
            arr[i][j]=arr[i-1][j];
        }
    }
}
console.log(arr[len][cpy]);
var add=new Array(len);
// console.log(add);
var i=len-1,x=arr[len][cpy];
while(i>=0)
{
    if(arr[i].indexOf(x)==-1)
    {
        add[i]=1;
        x-=val[i];
    }
    else
    {
        add[i]=0;
    }
    i-=1;
}
console.log(add);
// var m = Array(4).fill(0).map(x => Array(4).fill(0));
// console.log(m);