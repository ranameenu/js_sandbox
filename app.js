// Arrays

const numbers = [45, 24, 65, 12, 9, 0, 78, 33, 19];
const numbers1 = new Array(45, 24, 65, 12, 9, 0, 78, 33, 19);

const fruits = ['apple', 'mango', 'banana', 'orange'];
const mixed = ['brad', 20, true, undefined, null, { a: 1, b: 2 }, new Date()];
let val;

// GET ARRAY LENGTH
val = numbers.length;

// CHECK IF IS ARRAY
val = Array.isArray(numbers);

// TO GET SINGLE VALUE FROM ARRAY
val = numbers[3];

// TO INSERT SOMETHING IN ARRAY
numbers[2] = 20;

// FIND INDEX OF THE VALUE
val = numbers.indexOf(33);

// Mutating Arrays
// Add value at the end
numbers.push(20);

// Add value at the front
numbers.unshift(44);

// Pop from the end
numbers.pop();

// pop from the front
numbers.shift();

// Splice Values()
numbers.splice(1, 3); //to remove values from to to

// reverse()
numbers.reverse();

// concatenate arrays
val = numbers.concat(numbers1);

// Sorting arrays
val = fruits.sort();
val = numbers.sort();
console.log(numbers);
console.log(val);
