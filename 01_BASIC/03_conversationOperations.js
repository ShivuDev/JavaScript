let age=21;
let NumberInWords="twenty";
let isLoggedIn=true;

console.log(age)
console.log(typeof age)
let ageInString=String(age)
console.log(ageInString)
console.log(typeof ageInString)
console.log(age)// Terminal display Number in green

let boolInNum=Number(isLoggedIn)
console.log(boolInNum)

let name="";// ""=>fale in boolean
/*its an empty String if it undergoes conversation. to boolean it will be false*/
let name2="Shivu"// String"With value"=> true
let boolName=Boolean(name);
console.log(name);
console.log(boolName);
let nextBoolName=Boolean(name2);
console.log(nextBoolName);
let emptyStringtoNum=Number(name);
console.log(emptyStringtoNum)
let stillNum=null
console.log(stillNum)
let nullTostring=String(stillNum)
console.log(nullTostring)
console.log(typeof nullTostring)
let nullTonum=Number(stillNum)
console.log(typeof nullTonum)
console.log(nullTonum)