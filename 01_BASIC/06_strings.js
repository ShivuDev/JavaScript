console.log("Hi This file is about Strings")
// old and not so god prctice of concatinating stings 
const age=22
const name="Shivakumara Swamy P"
console.log(name + " is " + age +" old");
// so we have consept in js called string interpolation
console.log(`${name} is ${age} old`);
 // another way of declaring string in object type
const myName = new String('Shivakumara Swamy P')
// let perform some string operation
console.log(myName.at(1))//gives letter at 1st key position
console.log(myName.charAt(1));//same as pervious
console.log(myName.slice(2,5));//gives from pos 2 to 4
console.log(myName.split(" "));// divides string based on spacw
console.log(myName.bold());
const editedName= myName.replace('P','Prakashmurty')// repalce the p with full name

console.log(editedName);
