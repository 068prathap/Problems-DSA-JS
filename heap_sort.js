const readline=require("readline-sync");
// var arr=[];
// var ele= readline.question("enter the data: ");
// while(ele>=0)
// {
//     arr.push(ele);
//     var ele= readline.question("enter the data: ");
// }
var arr=[12, 11, 13, 5, 6, 7];
var len=arr.length;
heapSort(arr,len);
function heapSort(arr,len)
{
    var lrg=Math.floor(len/2)-1;
    console.log(len);
    for(var i=lrg;i>=0;i--)
    {
        var l=(i*2)+1,r=(i*2)+2;
        console.log(l+"-"+r);
        if(arr[l]>arr[r] || r>=len)
        {
            if(arr[i]<arr[l])
            {
                temp=arr[i];
                arr[i]=arr[l];
                arr[l]=temp;
            }
        }
        else if(r<len)
        {
            if(arr[i]<arr[r])
            {
                temp=arr[i];
                arr[i]=arr[r];
                arr[r]=temp;
            }
        }
    }
    console.log(arr);
    len-=1;
    temp=arr[len];
    arr[len]=arr[0];
    arr[0]=temp;
    console.log("---"+arr);
    if(len>1)
    {
        heapSort(arr,len);
    }
}
console.log(arr);
Student = {


English :{
Prathap :45,
Ashwin:45}

Tamil:{
Prathap:43,
Ashwin:40}

Science :{
Prahtap:40,
Ashwin:43}}



OUTPUT:

STUDENT={

ASHWIN:{english:45,tamil:40,science:43}
PRATHAP:{}

