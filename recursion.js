var stk=[1,2,3,4,5];
var a=stk[Math.floor(stk.length/2)];
recursion(stk.pop());
function recursion(value)
{
    if(stk.length!=0)
    {
        recursion(stk.pop());
    }
    if(value!=a)
    {
        stk.push(value);
    }
}
console.log(stk);