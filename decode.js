var str="my name is p atha";
var row=5;
var dcd="",sar="*";
var a=0,b=0;
for(var i=0;i<row;i++)
{
    var j=i;
    while(j<str.length)
    {
        if(str[j]==' ')
        {
            b=j;
            while(b+row<str.length)
            {
                // console.log(str[b+row]);
                if(str[b+row]!=' ')
                {
                    dcd+='*';
                    break;
                }
                b+=row;
            }
            // console.log(dcd);
        }
        else
        {
            dcd+=str[j];
        }
        j+=row;
    }
    console.log(dcd);
    if(i<row-1)
    {
        dcd+=sar;
        sar+="*";
    }
}
console.log(dcd);