const marvelHeros = ["thor", "ironman", "spiderman"];

console.log(marvelHeros);

const DC_heros = ["superman", "flash", "batman"];
console.log(DC_heros);

// u need to bind those two array

//  const all_heros = marvelHeros.push(DC_heros); // this gives u array inside array

// console.log(marvelHeros[3][1]);


const all_new_heros = marvelHeros.concat(DC_heros); // this concat two array without nestig one array inside another array
console.log(all_new_heros);

const all_final_heros = [...marvelHeros, ...DC_heros]; // spreadout all the array elements into individual elements// this is best practic
console.log(all_final_heros);



const another_array = [1,4,5,[2,5,7,4],4,5,[6,6,8,[3,6,9,0]]];
console.log(another_array);

const actual_another_array = another_array.flat(Infinity); // flat gives u all the subarray to the single array by spreadout all th elements
console.log(actual_another_array);


console.log(Array.isArray("laxmi")); // returns boolean value
console.log(Array.from("laxmi")); //converts the given value into array
console.log(Array.from({name :"laxmi"})); // retruns empty arrat bcoz can not directly convert into the array, needs to defined the key or value to convert.

let score1 =100;
let score2 = 500;
let score3 = 600;

console.log(Array.of(score1, score2, score3)); // arrayof converts the given element's value into an array










