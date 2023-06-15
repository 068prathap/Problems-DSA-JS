let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

function sortByAge(arr)
{
    arr.sort(function(a, b)
    {
        return a.age - b.age
    })
}

console.log(arr[0].name);
console.log(arr[1].name);
console.log(arr[2].name);