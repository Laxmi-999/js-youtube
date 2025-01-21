const score = 50;
console.log(score); // it gives only number

const number = new Number(5000); // this returns with its datatypes as well.
console.log(number);

console.log(number.toString().length);
console.log(number.toFixed(3)); // to give the fixed value of the largest number and the "3" denotes that add only three digits after decimal point. 




const newNumber = 2199.456;
console.log(newNumber.toPrecision(3)); 
console.log(typeof newNumber);


const hundreds = 1000000;

console.log(hundreds.toLocaleString('en-IN')); // by default separate the number by comma with US standard, can give local standard as well.


///////////////////////////// MATHS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

console.log(Math); /// provides lots of methods for maths calculations
console.log(Math.abs(-5)); // gives positive value.
console.log(Math.round(7.8)); // gives value after round off
console.log(Math.ceil(8.9)); // gives max or ceiling value.
console.log(Math.floor(4.6)); // gives min or floor value.
console.log(Math.min(2,5,1,7,0,5)); // gives min value
console.log(Math.max(2,5,1,7,0,5)); // gives max value


//Math.random ===> takes any value between 0 to 1
console.log(Math.random());
console.log(Math.random() * 10 +1); // to avoid 0 in output.
console.log(Math.floor(Math.random() *10 +1)); // to get min value.


/// in the case of MIN and Max

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max-min)) + min); // to get value greater than min value.















