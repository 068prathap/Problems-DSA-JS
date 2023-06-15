var mtx=[[1, 1, 1, 0],
         [1, 1, 0, 1], 
         [0, 1, 0, 0],
         [1, 1, 1, 1]];
var row=mtx.length-1;
var clm=mtx[0].length-1;
// var sat=mtx[0][0];
var rue="";
var rah=0;
mtx[0][0]=0;
run(0,0,rue);
function run(i,j,rue)
{
    if(i>0)
    {
        if(mtx[i-1][j]==1)
        {
            // console.log("u");
            mtx[i-1][j]=0;
            run(i-1,j,rue+'u');
            mtx[i-1][j]=1;
        }
    }
    if(j<clm)
    {
        if(mtx[i][j+1]==1)
        {
            // console.log("r");
            if(i==row && j+1==clm)
            {
                console.log(rue+'r');
                rah=1;
            }
            else
            {
                mtx[i][j+1]=0;
                run(i,j+1,rue+'r');
                mtx[i][j+1]=1;
            }
        }
    }
    if(i<row)
    {
        if(mtx[i+1][j]==1)
        {
            // console.log("d");
            if(i+1==row && j==clm)
            {
                console.log(rue+'d');
                rah=1;
            }
            else
            {
                mtx[i+1][j]=0;
                run(i+1,j,rue+'d');
                mtx[i+1][j]=1;
            }
        }
    }
    if(j>0)
    {
        if(mtx[i][j-1]==1)
        {
            // console.log("l");
            mtx[i][j-1]=0;
            run(i,j-1,rue+'l');
            mtx[i][j-1]=1;
        }
    }
}
if(rah==0)
{
    console.log(-1);
}