var str="baabaa",ptn="aab";
var cnt=ptn+"@"+str;
console.log(cnt);
var arr=[0];
var a=0,b=0;
for(var i=1;i<cnt.length;i++)
{
    while(cnt[a]==cnt[i+b])
    {
        b+=1;
        a+=1;
    }
    arr.push(b);
    a=0;
    b=0;
}
console.log(arr);
var idx=arr.indexOf(ptn.length)-(ptn.length+1);
console.log(idx);