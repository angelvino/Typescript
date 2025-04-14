class BaseClass
{
    task()
    {
        console.log("This is task method from base Class");
    }
}

class ChildClass extends BaseClass
{
    task()
    {
        console.log("This is task method from child Class");
    }
}

let cc:ChildClass = new ChildClass();
cc.task();
let bc:BaseClass = new BaseClass();
bc.task();


let obj:ChildClass = new BaseClass();
obj.task();