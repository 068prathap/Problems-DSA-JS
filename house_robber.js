var arr=[2,7,9,3,1];
if(arr.length==1)
{
    console.log(arr[0]);
}
else if(arr.length==2)
{
    console.log(Math.max(arr[0],arr[1]));
}
else
{
    var i=1,total=0;
    while(i<arr.length)
    {
        i=(arr[i-1]+arr[i+1] > arr[i]) ? i-1 : i;
        total+=arr[i];
        if(i==arr.length-4)
        {
            i+=2;
            total+=Math.max(arr[i],arr[i+1]);
            break;
        }
        if(i==arr.length-3)
        {
            i+=2;
            total+=arr[i];
            break;
        }
        i+=3;
    }
}
console.log(total);