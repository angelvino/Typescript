function Addition(a:string,b:string):string;
function Addition(a:number,b:number):number;
function Addition(a:string,b:number):string;
function Addition(a:number,b:string):string;
function Addition(a:boolean,b:string):boolean;

//Number of parameters should be same.
function Addition(a:any,b:any):any
{
    return a+b;
}

console.log(Addition("Sachin","Tendulkar"));
console.log(Addition(10,20));
console.log(Addition("Sachin",10))
console.log(Addition(true,"Sachin"))