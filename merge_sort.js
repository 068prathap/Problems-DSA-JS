const readline=require("readline-sync");
var arr=[];
var ele= readline.question("enter the data: ");
while(ele>=0)
{
    arr.push(ele);
    var ele= readline.question("enter the data: ");
}
// var arr=[38,3, 27, 43, 3, 9, 82, 10];
var arr3=mergeSort(arr);
function mergeSort(arr)
{
    var mid=Math.floor(arr.length/2);
    var arr1=[],arr2=[];
    for(var i=0;i<mid;i++)
    {
        arr1.push(arr[i]);
    }
    for(var i=mid;i<arr.length;i++)
    {
        arr2.push(arr[i]);
    }
    if(arr1.length>1)
    {
        arr1=mergeSort(arr1);
    }
    if(arr2.length>1)
    {
        arr2=mergeSort(arr2);
    }
    return sort(arr1,arr2);
}
function sort(arr1,arr2)
{
    var i=0,j=0;
    var arr4=[];
    // console.log(arr1+"-"+arr2);
    while(i<arr1.length && j<arr2.length)
    {
        if(arr1[i]<arr2[j])
        {
            arr4.push(arr1[i]);
            i+=1;
            if(i==arr1.length)
            {
                while(j<arr2.length)
                {
                    arr4.push(arr2[j]);
                    j+=1;
                }
            }
        }
        else
        {
            arr4.push(arr2[j]);
            j+=1;
            if(j==arr2.length)
            {
                while(i<arr1.length)
                {
                    arr4.push(arr1[i]);
                    i+=1;
                }
            }
        }
    }
    // console.log(arr4);
    return arr4;
}
console.log(arr3);