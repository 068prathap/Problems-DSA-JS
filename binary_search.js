const readline=require("readline-sync");
var arr=[];
var ele= readline.question("enter the data: ");
while(ele>=0)
{
    arr.push(ele);
    var ele= readline.question("enter the data: ");
}
// var arr=[10, 20, 80, 30, 60, 50,110, 100, 130, 170];
var a=50;
var b=Math.floor(arr.length/2);
var i=0,n=0;
if(arr[b]>=a)
{
    i=0;
    n=b+1;
}
else if(arr[b]<a)
{
    i=b;
    n=arr.length;
}
// console.log(i+","+n);
for(var j=i;j<n;j++)
{
    if(arr[j]==a)
    {
        console.log(j);
    }
}