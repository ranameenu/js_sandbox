// String Methods & Concatenation

const firstName = 'William';
const lastName = 'Johnson';
const age = 20;

//concatenation
val = firstName + ' ' + lastName;

// Append
val = 'brad ';
val += 'traversy';
val = 'Hello, my name is ' + firstName + " and i'am " + age;

// Escaping
val = "That's awsm and I can't wait"; //"That\'s nice I can\'t wait";

// Length
val = firstName.length;

// Concate
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// count string to array
val = firstName[2];

// indexOf()
val = firstName.indexOf('h');
val = firstName.lastIndexOf('h');

//CharAt()
val = firstName.charAt('2');

// Get last character()
val = firstName.charAt(firstName.length - 1);

// Substring()
val = firstName.substring(1, 4);

// Slice()
val = firstName.slice(1, 5); //same as substring in that case
val = firstName.slice(-3); //start from last

// Splite()
val = firstName.split(''); //Splite each of the character

let str = "hello world I'am brad traversy";
val = str.split(' ');

let str1 = 'web design,web developer,digital marketing ';
val = str1.split(',');

// Replace
val = str.replace('brad', 'a online instructor'); //replace something from the string

// Include
val = str.includes('brad'); // to check is this exist in the selected string

console.log(val);
