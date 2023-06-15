var arr=[2,1,5,6,2,3];
var temp=[0],lef=[0],rig=[arr.length-1];
var sum=0,ts=0;
for(var i=1;i<arr.length;i++)
{
    while(true)
    {
        if(temp.length==0)
        {
            temp.push(i);
            lef.push(0);
            break;
        }
        else if(arr[temp[temp.length-1]]<arr[i])
        {
            lef.push(temp[temp.length-1]+1);
            temp.push(i);
            break;
        }
        else
        {
            temp.pop();
        }
        // console.log("---"+temp);
        // console.log(arr[temp[temp.length-1]]);
    }
    // console.log(temp);
    // console.log(lef);
}
console.log(lef);
temp=[];temp.push(rig[0]);
for(var i=arr.length-2;i>=0;i--)
{
    while(true)
    {
        if(temp.length==0)
        {
            temp.push(i);
            rig.push(arr.length-1);
            break;
        }
        else if(arr[temp[temp.length-1]]<arr[i])
        {
            rig.push(temp[temp.length-1]-1);
            temp.push(i);
            break;
        }
        else
        {
            temp.pop();
        }
        // console.log("---"+temp);
        // console.log(arr[temp[temp.length-1]]);
    }
    // console.log(temp);
    // console.log(lef);
}
console.log(rig);
for(var i=0;i<arr.length;i++)
{
    sum=arr[i]*(rig[arr.length-1-i]-lef[i]+1);
    if(ts<sum)
    {
        ts=sum;
    }
}
console.log(ts);
 