var mtx=[[1, 1, 1, 1, 1, 1, 1, 1],
         [1, 1, 1, 1, 1, 1, 0, 0],
         [1, 0, 0, 1, 1, 0, 1, 1],
         [1, 2, 2, 2, 2, 0, 1, 0],
         [1, 1, 1, 2, 2, 0, 1, 0],
         [1, 1, 1, 2, 2, 2, 2, 0],
         [1, 1, 1, 1, 1, 2, 1, 1],
         [1, 1, 1, 1, 1, 2, 2, 1]];
var x=4,y=4;
var Old=mtx[x][y];
var New=3;
var row=mtx.length-1;
var clm=mtx[0].length-1;
// console.log(mtx);
change(x,y);
function change(x,y)
{
    if(x>0 && mtx[x-1][y]==Old)
    {
        mtx[x-1][y]=New;
        // console.log("t");
        change(x-1,y);
    }
    if(y<clm && mtx[x][y+1]==Old)
    {
        mtx[x][y+1]=New;
        // console.log("r");
        change(x,y+1);
    }
    if(x<row && mtx[x+1][y]==Old)
    {
        mtx[x+1][y]=New;
        // console.log("d");
        change(x+1,y);
    }
    if(y>0 && mtx[x][y-1]==Old)
    {
        mtx[x][y-1]=New;
        // console.log("l");
        change(x,y-1);
    }
}
console.log(mtx);