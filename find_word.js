var arr=["coding","cot","oatlmgrl","hgfjn","artm"];
var mtx=[['c','o','d','k','x','t'],
         ['g','t','i','n','g','p'],
         ['l','k','o','l','m','w'],
         ['g','a','a','r','a','l'],
         ['k','f','t','g','r','f'],
         ['z','w','l','m','t','o']];
// console.log(mtx);
// console.log(mtx[0].length);
var appearence=false;
var len=0;
for(var k=0;k<arr.length;k++)
{
    var str=arr[k];
    first:for(var i=0;i<mtx.length;i++)
    {
        for(var j=0;j<mtx[0].length;j++)
        {
            if(mtx[i][j]==str[0])
            {
                check(i,j,1);
                // console.log(appearence);
                if(len==str.length-1)
                {
                    // appearence=true;
                    console.log(str);
                    break first;
                }
            }
        }
    }
}

function check(i,j,idx)
{
    if(i>0 && mtx[i-1][j]==str[idx])
    {
        // idx+=1;
        // console.log("t: "+idx);
        if(idx==str.length-1)
        {
            len=idx;
            // return true;
        }
        else
        {
            check(i-1,j,idx+1);
        }
    }
    if(j<mtx[0].length-1 && mtx[i][j+1]==str[idx])
    {
        // idx+=1;
        // console.log("r: "+idx);
        if(idx==str.length-1)
        {
            len=idx;
            // return true;
        }
        else
        {
            check(i,j+1,idx+1);
        }
    }
    if(i<mtx.length-1 && mtx[i+1][j]==str[idx])
    {
        // idx+=1;
        // console.log("d: "+idx);
        if(idx==str.length-1)
        {
            len=idx;
            // return true;
        }
        else
        {
            check(i+1,j,idx+1);
        }
    }
    if(j>0 && mtx[i][j-1]==str[idx])
    {
        // idx+=1;
        // console.log("l: "+idx);
        if(idx==str.length-1)
        {
            len=idx;
            // return true;
        }
        else
        {
            check(i,j-1,idx+1);
        }
    }
    // if(idx==1 && len==str.length-1)
    // {
    //     return true;
    // }
    // else
    // {
    //     return false;
    // }
}
// console.log(appearence);