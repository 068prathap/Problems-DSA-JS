var bad=5;
// var sat=0;
var arr1=[],arr2=[],arr=[],clm=[],pd=[],nd=[];
str="";
if(bad==1)
{
    arr1.push('q');
    arr2.push(arr1);
    console.log(arr2);
}
else if(bad==2 || bad==3)
{
    arr2.push(arr1);
    console.log(arr2);
}
else
{
    for(var i=0;i<bad;i++)
    {
        for(var j=0;j<bad;j++)
        {
            if(j==i)
            {
                str+='Q';
            }
            else
            {
                str+='.';
            }
        }
        arr1.push(str);
        str+="";
        clm.push(i);
        pd.push(0+i);
        nd.push(0-i);
        position(1);
    }
}
function position(row);
{
    for(var i=0;i<bad;i++)
    {
        if(clm.indexOf(i)==-1 && pd.indexOf(row+i)==-1 && nd.indexOf(row-i)==-1)
        {
            for(var j=0;j<bad;j++)
            {
                if(j==i)
                {
                    str+='Q';
                }
                else
                {
                    str+='.';
                }
            }
            arr1.push(str);
            str="";
            if(row==bad-1)
            {
                arr2.push
            }
            else
            {
                position(row+1);
            }
        }
    }
    
}