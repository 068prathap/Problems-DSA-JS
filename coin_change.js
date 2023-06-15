var coins=[186,419,83,408];
var amount=6249;
if(amount==0)
{
    console.log(0);
}
else
{
    coins.sort(function(a, b){return b - a});
    var amt=amount,cnt=0,tcn=amount+1;
    add(amt,cnt,0);
    function add(amt,cnt,num)
    {
        if(coins.indexOf(amt)!=-1)
        {
            if(cnt+1<tcn)
            {
                tcn=cnt+1;
            }
        }
        else
        {
            for(var i=num;i<coins.length;i++)
            {
                if(coins[i]<amt)
                {
                    add(amt-coins[i],cnt+1,i);
                }
            }
        }
    }
    if(tcn==amount+1)
    {
        console.log(-1);
    }
    else
    {
        console.log(tcn);
    }
}