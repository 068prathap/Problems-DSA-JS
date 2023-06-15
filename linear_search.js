const readline=require("readline-sync");
var arr=[];
var ele= readline.question("enter the data: ");
while(ele>=0)
{
    arr.push(ele);
    var ele= readline.question("enter the data: ");
}
// var arr=[10, 20, 80, 30, 60, 50,110, 100, 130, 170];
var a=110;
for(var i=0;i<arr.length;i++)
{
    if(arr[i]==a)
    {
        console.log(i);
        break;
    }
}