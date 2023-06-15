var str="AAAAABAAABA",ptn="AAAA";
var arr=[0];
var i=0,j=0,cnt=0;
for(i=1;i<ptn.length;i++)
{
    if(ptn[i]==ptn[j])
    {
        cnt+=1;
        j+=1;
        arr.push(cnt);
    }
    else
    {
        cnt=0;
        j=0;
        arr.push(cnt);
    }
}
console.log(arr);
i=0,j=0;
while(i<str.length)
{
    if(str[i]==ptn[j])
    {
        i+=1;
        j+=1;
    }
    else
    {
        if(j!=0)
        {
            j=arr[j-1];
        }
        else
        {
            i+=1;
        }
    }
    if(j==ptn.length)
    {
        console.log("index: "+(i-j));
        j=arr[j-1];
    }
}