class Employee 
{
    //Variables are used to store the data
    id:number;
    name:string;
    designation:string;
    salary:number;
}

let emp1:Employee = new Employee();
emp1.id = 1;
emp1.name = "Sachin";
emp1.designation = "Test Lead";
emp1.salary = 3500.00;

let emp2:Employee = new Employee();
emp2.id = 2;
emp2.name = "Dravid";
emp2.designation = "Test Manager";

console.log(emp2.id);
console.log(emp2.name);
console.log(emp2.designation);