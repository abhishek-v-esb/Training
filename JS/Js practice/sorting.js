// Selection sort
let array1 = ["z","s","e","c",7,6,3,9,2,0]
let array2 = ["f","a","o","z","0","6","2","4"];

for (let i = 0; i < array1.length-1; i++) {
   for (let j = i+1; j < array1.length; j++) {
      if(array1[i]>array1[j]){
         let temp = array1[i];
         array1[i]=array1[j];
         array1[j]=temp;
      }
      
   }
}
console.log(array1)

// bubble sort

for (let i = 0; i < array2.length-1; i++) {
   for (let j = 0; j < array2.length-i-1; j++) {
      if(array2[j]>array2[j+1]){
         let temp = array2[j];
         array2[j]=array2[j+1];
         array2[j+1]=temp;
      }
   }
    
}
console.log(array2) 

// let array=new Array(5);

// const input = require("readline");
// const num = input.createInterface({
//    input:process.stdin,
//    output:process.stdout,
// })
// num.question("enter number",function(answer){
//    array.push(num)
// });
// console.log(array)



