const readline=require("readline-sync");
var length= readline.question("enter the length: ");
var a=length,b=length*length,c=1,d=1;
var str="";
for(var i=0;i<length;i++)
{
    for(var j=0;j<length-a;j++)
    {
        str+="  ";
    }
    for(var j=0;j<a;j++)
    {
        str=str+c+"*";
        c+=1;
    }
    for(var j=0;j<a;j++)
    {
        str=str+(b+d)+"*";
        d+=1;
    }
    console.log(str);
    str="";
    a-=1;
    b-=a;
    d=1;
}
