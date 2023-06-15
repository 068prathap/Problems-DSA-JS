var sprl=[[1,2,3,4,5],
        [6,7,8,9,10],
        [11,12,13,14,15],
        [16,17,18,19,20],
        [21,22,23,24,25]];
var a=0,b=sprl.length-1,c=0,rud=0,rud1=0;
if(sprl.length%2==0)
{
    rud1=sprl.length/2;
}
else
{
    rud1=Math.floor(sprl.length/2)+1;
}
while(rud!=rud1)
{
    for(var i=a;i<=b;i++)
    {
        console.log(sprl[a][i]);
    }
    // a=clm-1;
    a+=1;
    for(var i=a;i<=b;i++)
    {
        console.log(sprl[i][b]);
    }
    a=b;
    // b=row-1;
    // a-=1;
    b=c;
    c+=1;
    for(var i=a-1;i>=b;i--)
    {
        console.log(sprl[a][i]);
    }
    // a=c;
    // c+=1;
    // b-=1;
    for(var i=a-1;i>b;i--)
    {
        console.log(sprl[i][b]);
    }
    // console.log("b: "+b);
    // console.log("a: "+a);
    var temp=a-1;
    a=b+1;
    b=temp;
    rud+=1;
}