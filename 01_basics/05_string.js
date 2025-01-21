
const name = "lax";

const repoCount = 50;
// console.log(name + repoCount +"value"); this is not good idea for concatnation, instead of it we it is good to use

console.log(`my name is ${name} and my repoCount is ${repoCount}`);

// another way of defining string

const gameName = new String("laxxy");
// we can access index number, charater of the string, length and prototype and its methods  as well in the following ways

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));// to find character at particular index.
console.log(gameName.indexOf("x")); // to find index of particular character.


const newString = gameName.substring(0,2); // to divide string into substring
console.log(newString);


const anotherString = gameName.slice(-5,3); // we can slice string from reverse as well
console.log(anotherString); 


const newStringOne = "  laxmi   ";
console.log(newStringOne);

console.log(newStringOne.trim()); // to remove the spaces before and after the strings, usefull in forms where users unknowingly add spacess while filling inputs fields.


const url = "https://lax.com/laxmi%20regmi" // browser doenot understand the spaces in URL, so it automatically converts the spaces into "%20".
console.log(url.replace("%20", "-")); // first value is for search and second value is for replace.

console.log(url.includes("lax")); // u can ask if the given keywords are in the url or not.


const strigOne = "hi-i-am-laxmi"

console.log(strigOne.split('-'));// spliting string based on '-', returns array of strings









