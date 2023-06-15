// const readline=require("readline-sync");
// var a=[];
// var ele= readline.question("enter the data: ");
// while(ele>=0)
// {
//     a.push(ele);
//     var ele= readline.question("enter the data: ");
// }
var a=[10, 80, 40, 90, 30, 50, 70];
var pvt=a[a.length-1];
var arr3=[];
quickSort(a,pvt);
function quickSort(arr,pvt)
{
    var arr1=[],arr2=[];
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]<pvt)
        {
            arr1.push(arr[i]);
        }
        if(arr[i]>pvt)
        {
            arr2.push(arr[i]);
        }
    }
    // console.log(arr1+"-"+pvt+"-"+arr2);
    sort(arr1,pvt,arr2);   
}
function sort(arr1,pvt,arr2)
{
    if(arr1.length>1)
    {
        quickSort(arr1,arr1[arr1.length-1]);
    }
    else
    {
        arr3=arr3.concat(arr1);
    }
    arr3=arr3.concat(pvt);
    if(arr2.length>1)
    {
        quickSort(arr2,arr2[arr2.length-1]);
    }
    else
    {
        arr3=arr3.concat(arr2);
    }
    // console.log("---"+arr3);
}
console.log(arr3);    