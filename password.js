const readline=require("readline-sync");

var pwd=[4,2,6,8,5,9];
var key=[[1,2,3],
         [4,5,6],
         [7,8,9]];
var tim=1,idx=0,a=0;
for(var i=1;i<pwd.length;i++)
{
    if(pwd[i]!=pwd[i-1])
    {
        for(var j=0;j<3;j++)
        {
            if(key[j].indexOf(pwd[i-1])!=-1)
            {
                idx=key[j].indexOf(pwd[i-1]);
                // console.log("idx: "+idx);
                if(j!=0)
                {
                    if(key[j-1].indexOf(pwd[i])==idx)
                    {
                        tim+=1;
                        a=1;
                    }
                }
                if(a!=1 && idx!=2)
                {
                    if(key[j].indexOf(pwd[i])==idx+1)
                    {
                        tim+=1;
                        a=1;
                    }
                    
                }
                if(a!=1 && j!=2)
                {
                    if(key[j+1].indexOf(pwd[i])==idx)
                    {
                        tim+=1;
                        a=1;
                    }
                    
                }
                if(a!=1 && idx!=0)
                {
                    if(key[j].indexOf(pwd[i])==idx-1)
                    {
                        tim+=1;
                        a=1;
                    }
                }
                if(a==0)
                {
                    tim+=2;
                }
                a=0;
                break;
            }
        }
        // console.log("---"+a);
    }
    // console.log("--"+tim);
}
console.log(tim);
// console.log(key[0].indexOf(1));