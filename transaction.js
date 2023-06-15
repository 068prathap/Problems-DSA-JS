var prs=[1,2,4,2,5,7,2,4,9,0];
const trd = new Map();
var arr=[];
var sum=0;
for(var i=1;i<prs.length;i++)
{
    if(prs[i]>prs[i-1])
    {
        arr.push(prs[i]-prs[i-1]);
    }
    
    // for(var j=i+1;j<prs.length;j++)
    // {
    //     // console.log(prs[j]+","+prs[i]);
    //     if(prs[j]>prs[i])
    //     {
    //         // console.log("ji");
    //         arr.push(j);
    //     }
    //     // console.log(arr);
    // }
    // trd.set(i,arr);
    // arr=[];
}
arr.sort(function(a, b){return a-b});
for(var i=arr.length-1;i>=0;i--)
{
    sum+=arr[i];
}
// console.log(trd);
console.log(sum);
console.log(arr);

