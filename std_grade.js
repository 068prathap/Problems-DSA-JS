var arr=[7,6,5,4,3,2,1];
var atn = new Array(arr.length).fill(1);
for(var i=1;i<arr.length;i++)
{
    if(arr[i]<arr[i-1] && atn[i]<=atn[i-1])
    {
        atn[i]=atn[i-1]+1;
    }
}
for(var i=arr.length-2;i>=0;i--)
{
    if(arr[i]<arr[i+1] && atn[i]<=atn[i+1])
    {
        atn[i]=atn[i+1]+1;
    }
}
console.log(atn);