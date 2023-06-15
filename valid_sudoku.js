var mtx=[
[".",".","4",".",".",".","6","3","."],
[".",".",".",".",".",".",".",".","."],
["5",".",".",".",".",".",".","9","."],
[".",".",".","5","6",".",".",".","."],
["4",".","3",".",".",".",".",".","1"],
[".",".",".","7",".",".",".",".","."],
[".",".",".","5",".",".",".",".","."],
[".",".",".",".",".",".",".",".","."],
[".",".",".",".",".",".",".",".","."]];
var sdu=true;
for(var i=0;i<9;i++)
{
    var row=[];
    var clm=[];
    var box=[];
    for(var j=0;j<9;j++)
    {
        if(mtx[i][j]!='.' && row.indexOf(mtx[i][j])!=-1)
        {
            console.log("0hi : "+row.indexOf(mtx[i][j]));
            sdu=false;
        }
        else
        {
            row.push(mtx[i][j]);
        }
        if(mtx[j][i]!='.' && clm.indexOf(mtx[j][i])!=-1)
        {
            sdu=false;
        }
        else
        {
            clm.push(mtx[j][i]);
        }
        // console.log(clm);
        var idx = mtx[3* Math.floor(i/3) +Math.floor(j/3)][3*(i%3)+(j%3)];
        if(idx!='.' && box.indexOf(idx)!=-1)
        {
            sdu=false;
        }
        else
        {
            box.push(idx);
        }
    }
}
console.log(sdu);