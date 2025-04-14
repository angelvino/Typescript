class Employee
{
    //variables
    id:number;
    name:string;
    address:string;

    //methods
    getAddress():string
    {
        return this.address;
    }

    constructor(id:number,name:string,address:string)
    {
        this.id = id;
        this.name = name;
        this.address = address;
    }
}

// let emp1:Employee = new Employee(); //created Object
// emp1.id = 1; //assigned the values
// emp1.name = "Sachin";
// emp1.address = "Bangalore";
// let address = emp1.getAddress();
// console.log(address);

let emp1:Employee = new Employee(1,"Sachin","Bangalore");//created object and assigned the values of that object in single line
let emp2:Employee = new Employee(2,"Dravid","Chennai");//constructor will be called at the time of creating object

console.log(emp2.id);
console.log(emp2.name);
console.log(emp2.address);
console.log(emp2.getAddress())
//Constructor looks like a function but it is not a function
//difference between function and constructor - function name can be anything but Constructor name shiuld be same as Class Name.