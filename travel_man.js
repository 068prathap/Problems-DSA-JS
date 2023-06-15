var mtx=[ 
        [0,0,0,0,0],
        [0,0,10,15,20],
        [0,5,0,9,10],
        [0,6,13,0,12],
        [0,8,8,9,0]];
var pit=mtx.length;
var map=new Map();
for(var i=1;i<pit;i++)
{
    var arr=[0];
    for(var j=1;j<pit;j++)
    {
        arr.push(mtx[i][j]);
    }
    map.set(i,arr);
}
console.log(map);
arr=map.get(1);
var str="1";
var dis=Number.MAX_VALUE;
for(var i=2;i<arr.length;i++)
{
    travel(map.get(i),str+i,arr[i]);
}
function travel(arr,str,sum)
{
    if(str.length==pit-1)
    {
        // console.log(str);
        // console.log(sum+arr[1]);
        if(dis>sum+arr[1])
        {
            dis=sum+arr[1];
        }
    }
    else
    {
        for(var i=2;i<arr.length;i++)
        {
            if(str.indexOf(i)==-1)
            {
                travel(map.get(i),str+i,sum+arr[i]);
            }
        }
    }
}
console.log(dis);