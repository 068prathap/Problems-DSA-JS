var coins=[1,2,5];
var amount=5;
coins.sort(function(a, b){return b - a});
var amt=amount,tcn=0;
add(amt,0);
function add(amt,num)
{
    if(amt==0)
    {
        tcn+=1;
    }
    else
    {
        for(var i=num;i<coins.length;i++)
        {
            if(coins[i]<=amt)
            {
                add(amt-coins[i],i);
            }
        }
    }
}
console.log(tcn);
// let rows = Array.from(new Array(9), () => new Array(9).fill(0));
// console.log(rows);