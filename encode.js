var ip="PAYPALISHIRING";
var row=4,idx=(row-1)+(row-1),a=0,i=0;
var op="";
while(a!=row)
{
    i=a;
    while(i<ip.length)
    {
        op+=ip.charAt(i);
        i+=idx;
        if(a!=0)
        {
            op+=ip.charAt(i);
            i+=a*2;
        }
        // console.log(op);
        // console.log(i);
    }
    a+=1;
    if(a==row-1)
    {
        idx=(row-1)+(row-1);
    }
    else
    {
        idx-=2;
    }
    // console.log(idx);
}
console.log(op);