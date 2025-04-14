// let ids:number[] = [100,200];//creating/declaring an array and assigning/initializing values to array in single

// let values:number[];
// values = [1,2,3,4,5,6];


// let names:string[] = ["Sachin","Dravid","Dhoni","Sehwag","Yuvraj"];

// // console.log(names[0]);
// // console.log(names[1]);
// // console.log(names[2]);
// // console.log(names[3]);
// // console.log(names[4]);


// for(let i=0;i<names.length;i++)
// {
//     console.log(names[i])
// }

// names.push("Zaheer");
// console.log("-----------------------")
// for(let i=0;i<names.length;i++)
// {
//     console.log(names[i])
// }

// names.pop();
// console.log("-----------------------")
// for(let i=0;i<names.length;i++)
// {
//     console.log(names[i])
// }

// let twodim:number[][] = [ [1,2],[2,3],[4,5] ];

// console.log(twodim[1][1]);

// let muldim = [[1,2,3],[4,5,6],[7,8,9]]

// console.log(muldim[0][0]);


// let names:string[] = ["Sachin","Dravid","Dhoni","Sehwag","Yuvraj"];

// for(let n of names)
// {
//     console.log(n);
// }

let muldim = [[1,2,3],[4,5,6],[7,8,9]]

// //rows
// for(let i=0;i<muldim.length;i++)
// {
//     //col in a row
//     for(let j=0;j<muldim[i].length;j++)
//     {
//         console.log(muldim[i][j]);
//     }
// }

for(let row of muldim)
{
    for(let value of row)
    {
        console.log(value);
    }
}