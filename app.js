// TYPE CONVERSION

// Number to String - String fx()
let val;
val = String(5);
val = String(4 + 4);

// Boolean to String
val = String(true);

// Date to string
val = String(new Date());

// Array to string
val = String([5, 8, 14, 55, 22, 26, 0, 4]);

// toString method
val = (5).toString();
val = false.toString();

// String to Number
val = Number('5');
val = Number('Hello-World');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number([1, 8, 5, 4, 6, 12, 28]);

val = parseInt('hello world');
val = parseInt('100.20');
val = parseFloat('100.20');

console.log(val);
console.log(typeof val);
console.log(val.toFixed(3));
