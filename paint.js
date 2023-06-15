var n=3,k=2;
var str="";
var cnt=0;
if(n==0)
{
    console.log(0);
}
else if(n==1)
{
    console.log(k);
}
else
{
    post(str);
    function post(str)
    {
        console.log(str);
        if(str.length==n)
        {
            cnt+=1;
        }
        else
        {
            for(var i=1;i<=k;i++)
            {
                if(str[str.length-1]!=i || str[str.length-2]!=i)
                {
                    post(str+i);
                }
            }
        }
    }
    console.log(cnt);
}