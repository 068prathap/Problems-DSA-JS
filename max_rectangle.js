var mtx=[["1","0","1","0","0"],
         ["1","0","1","1","1"],
         ["1","1","1","1","1"],
         ["1","0","0","1","0"]];
var ara=0,prw=mtx.length*mtx[0].length+1;
if(mtx.length==1 && mtx[0].length==1 && mtx[0][0]==1)
{
    console.log(1);
}
else if(mtx.length==1 && mtx[0].length==1 && mtx[0][0]==0)
{
    console.log(0);
}
else
{
    for(var i=0;i<mtx.length;i++)
    {
        for(var j=0;j<mtx[i].length;j++)
        {
            if(mtx[i][j]==1)
            {
                rows(i,j,0,1);
                prw=201;
            }
        }
    }
    function rows(i,j,row,clm)
    {
        // console.log(ara);
        var x=i;
        while(i<mtx.length && mtx[i][j]==1)
        {
            row+=1;
            i+=1;
        }
        row=Math.min(row,prw);
        prw=row;
        if(ara<row*clm)
        {
            ara=row*clm;
        }
        if(j<mtx[0].length-1)
        {
            rows(x,j+1,0,clm+1);
        }
    }
    console.log(ara);
}