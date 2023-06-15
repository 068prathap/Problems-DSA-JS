var str="GEEKS FOR GEEKS",ptn="GEEK";
let pie = 101,tc=256;
var hash=0;
for(var i=0;i<ptn.length-1;i++)
{
    hash=(hash*tc)%pie;
}
var ph=0,th=0;
for(var i=0;i<ptn.length;i++)
{
    ph=(tc*ph+ptn[i].charCodeAt())%pie;
    th=(tc*th+str[i].charCodeAt())%pie;
}
for(var i=0;i<=str.length-ptn.length;i++)
{
    if(ph==th)
    {
        var cnt=0;
        for(var j=0;j<ptn.length;j++)
        {
            if(str[j]==ptn[j])
            {
                cnt+=1;
            }
            else
            {
                break;
            }
        }
        if(cnt==ptn.length)
        {
            console.log("index: "+i);
        }
    }
    if(i<str.length-ptn.length)
    {
        th=(tc*(th-str[i].charCodeAt()*hash)+str[i+ptn.length].charCodeAt())%pie;
        if(th<0)
        {
            th=(th+pie);
        }
    }
}