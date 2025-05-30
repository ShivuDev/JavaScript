// let myDate=new Date()
// // console.log(myDate.toDateString());
// const myDob=new  Date(2003,7,11)
// console.log(myDob.toDateString());
// console.log(myDob.toLocaleString());
// console.log(`Mark the ${myDob.toDateString()} day `);

let today = new Date()
console.log(today.toLocaleDateString('default',{
    dateStyle:"long"
  
}));

let todyTime= Date.now()
console.log(Math.floor(todyTime/1000));
console.log(Math.ceil(today.getTime()/1000));//we divide by 1000 to convert it into seconds 

