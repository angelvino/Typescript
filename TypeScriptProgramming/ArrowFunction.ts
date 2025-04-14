let printMessage = () =>
{
    console.log("Hello TypeScripting...");
}

printMessage();


let printFullName = (firstName:string,lastName:string) =>
{
    console.log(firstName + " " + lastName);

    return firstName + " " + lastName;
}

printFullName("","");

let getFullName = (firstName:string,lastName:string):string =>
{
    return firstName + " " + lastName;
}

getFullName("","");