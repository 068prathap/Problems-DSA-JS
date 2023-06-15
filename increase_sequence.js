var mtx=[[7,6,5,3,4,5],
         [8,2,4,2,1,8],
         [5,4,3,5,6,7],
         [9,8,2,1,8,0],
         [6,5,1,4,3,1],
         [3,8,8,7,6,4]]
var len=0,tvl=0;
row=mtx.length-1;
clm=mtx[0].length-1;
for(var i=0;i<=row;i++)
{
    for(var j=0;j<=clm;j++)
    {
        sequence(i,j,tvl+1);
    }
}
function sequence(i,j,tvl)
{
    if(len<tvl)
    {
        len=tvl;
    }
    if(i>0 && mtx[i-1][j]>mtx[i][j])
    {
        sequence(i-1,j,tvl+1);
    }
    if(j<clm && mtx[i][j+1]>mtx[i][j])
    {
        sequence(i,j+1,tvl+1);
    }
    if(i<row && mtx[i+1][j]>mtx[i][j])
    {
        sequence(i+1,j,tvl+1);
    }
    if(j>0 && mtx[i][j-1]>mtx[i][j])
    {
        sequence(i,j-1,tvl+1);
    }
}
console.log(len);