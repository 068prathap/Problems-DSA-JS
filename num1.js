const readline=require("readline-sync");
var data=readline.question("enter the data: ");
while(isNaN(data))
{
    data= readline.question("enter the data: ");
}
console.log(data);