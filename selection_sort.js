const readline=require("readline-sync");
var arr=[];
var ele= readline.question("enter the data: ");
while(ele>=0)
{
    arr.push(ele);
    var ele= readline.question("enter the data: ");
}
// var arr=[64, 25, 12, 22, 11];
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
    var temp=arr[a];
    arr[a]=arr[i];
    arr[i]=temp;
}
console.log(arr);