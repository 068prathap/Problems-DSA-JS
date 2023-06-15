var str="123sdlkn45";
var str1="";
var sum=0,a=-1;
// for(var i=0;i<str.length;i++)
// {
//     secound: for(var j=i;j<str.length;j++)
//     {
//         a+=1;
//         if(isNaN(str.charAt(j)))
//         {
//             break secound;
//         }
//         else
//         {
//             str1+=str.charAt(j);
//         }
//         // console.log(str1);
//     }
//     sum+= +str1;
//     str1="";
//     i+=a;
//     a=-1;
//     // console.log(sum);
// }

for(var i=0;i<str.length;i++)
{
    if(isNaN(str.charAt(i)))
    {
        sum+= +str1;
        str1="";
    }
    else
    {
        str1+=str.charAt(i);
    }
}
sum+= +str1;
console.log(sum);
