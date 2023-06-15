var arr=[2,4,5,6,7,8,9,1,3];
var a=0;
for(var i=0;i<arr.length;i++)
{
    a=i;
    for(var j=i+1;j<arr.length;j++)
    {
        if(arr[a]>arr[j])
        {
            a=j;
        }
    }
    if(a!=i)
    {
        var temp=arr[i];
        arr[i]=arr[a];
        arr[a]=temp;
    }
}
// console.log(arr);
for(var i=1;i<arr.length-1;i++)
{
    var temp=arr[i+1];
    arr[i+1]=arr[i];
    arr[i]=temp;
    i+=1;
}
console.log(arr);