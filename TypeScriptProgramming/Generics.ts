// function identity(value:any):any
// {
//     return value;
// }

// identity(100);

// identity("Sachin");//Error

function identity<T>(value:T):T
{
    return value;
}

let id = identity(1);
let name2 = identity("Sachin");
let test = identity(true);