class ChildClass
{
    name:string
}

class BaseClass extends ChildClass
{
    id:number
}

let bc:BaseClass = new BaseClass();
let cc:ChildClass = new ChildClass();
