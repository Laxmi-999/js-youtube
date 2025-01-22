// declaration and access of arrays

const numbers = [1,2,3,4];
const myHeros = ["rocket", "groot", "quil", "mantis"]
const mixed = [1,2,3,4,"lela", "maya"]


console.log(numbers[0]);
//shallow copy ==> shared same reference points, changes in original array as well.
//deep copy ===> properties do not shared same refernce points, changes only in copies.


numbers.push(39); // add the value to the array at the end of the array.
numbers.pop() // remove the value from the end of the array.
numbers.unshift(8); // add the value at the start of the array.
numbers.shift(); // remove the value from the start of the array.


// u can ask  js for the following 
console.log(numbers);
console.log(numbers.includes(4));
console.log(numbers.indexOf (5));


const newNumbers = numbers.join();

console.log(numbers);

console.log(newNumbers); // convert array into string and bind as well.
console.log(typeof newNumbers);

const myArr = [2,3,6,8,4,7];
console.log("A", myArr);

const myArr1= myArr.slice(2,6); // do not includes last value
console.log("X", myArr1);


console.log("B", myArr);

const myArr2 = myArr.splice(2,6); // includes last value
console.log("Y", myArr2);










