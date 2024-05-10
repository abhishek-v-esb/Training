// String
const text = "this is abhishek";
const char = "a"
const multistr = "repeating sentence is repeating,so this is a repeating sentence";
const number1 = 45;
const number2 = "5";
const text1 = "this is text1";
const text2 = "this is text2";
const xtraspce  = "     extra spaces    "

// console.log(example);

// console.log(text.length);

// console.log(text.charAt(5));

// console.log(text.charCodeAt(5));

// console.log(text.at(2));

// console.log(text[2]);

// console.log(text.slice(-12,-6));

// console.log(text.substring(3,9));

// console.log(text.substr(3,18));

// console.log(text.toUpperCase());

// console.log(text.toLowerCase());

// console.log(text1.concat("_",text2," txt over"));

// console.log(xtraspce.trim());

// console.log(xtraspce.trimStart());

// console.log(xtraspce.trimEnd());

// console.log(text.padStart(4,"x"));
// console.log(number.padStart(5,"_"));

// console.log(typeof(number1.toString()));

// console.log(text.repeat(3));

// console.log(text.replace('this is','hello'));
// console.log(text.replace('THIS IS','hello'));
// console.log(text.replace(/THIS IS/i,'hello'));

// let example = multistr.replaceAll("repeating","not repeating");

// console.log(multistr.split(" "));

// console.log(multistr.indexOf("is"));

// console.log(multistr.lastIndexOf("is"));

// console.log(multistr.search("sentence"));

// console.log(multistr.match("repeating"));

// console.log(multistr.matchAll("repeating"));

// console.log(multistr.includes("is"));
// console.log(multistr.includes("not"));

// console.log(multistr.startsWith("repeating"));

// console.log(multistr.endsWith("sentence"));

// arrays

let array1 = ["there","is","1st","time","for","everything"];
let array2 = ["not","here"];
let array3 = [[2,4],[5,6],[7,8]];
let array4 = [2,4,5,6,7,8];
let dateArray = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
let iterator = array1.entries();

const isLowerThan = (currentValue) => currentValue < 7;

// console.log(array1.length);

// console.log(array1.toString());

// console.log(typeof(array1.toString()));

// console.log(array1.at(3));

// console.log(array1[2]);

// console.log(array1.join("_"));

// console.log(array1.pop());

// console.log(array1.push("not here"));

// console.log(array1.shift());

// console.log(array1.unshift("true"));

// console.log(array1.concat(array2));

// console.log(array1.copyWithin(0,4));

// console.log(array3.flat());

// console.log(array1.splice(1,3));

// console.log(array1.copyWithin(2,3,5));

// console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next().value)

// console.log(array4.every(isLowerThan) )

// console.log(array1.fill("not",2,4))

// console.log(array1.filter((word)=> word.length<5))

// console.log(array4.map((x)=> x*4))

// console.log(Array.from("hello"))
 
// console.log(array1.reverse())

console.log(dateArray.toLocaleString('en',{timezone:'ist'}))


