// Stacks and Heaps
 
/* Before getting into that in JS we have Two types of datatypes 1)Premivite 2)Non-Premitive (Refrence) */

// here the whole concept of Memory based on the datatype. Number,String,Bhoolean,Null,symbol,undefined,Bigint(7 types)
//Non-premitive :- Arrays,objects,Functions

//premitive :- Stack(makes a copy and gives)

let studentName="Shivu"
let officialName=studentName;

officialName="Shivakumara Swmay P"

console.table([studentName,officialName]);
// here the copy is cereated so if we change in the official name it won't affect the student name 
// but in Non-premitive heap which gives refrence so it chanes in the main data also

let userOne={
    name:"Shivu",
    age:22
}
let personOne= userOne;

personOne.name="Shivakumara Swamy P";

console.log(userOne.name);
console.log(personOne.name);

