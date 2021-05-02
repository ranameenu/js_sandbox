// function greet() {
//   return 'hello';
// }

// function info(firstName, lastName) {
//   return 'hello ' + firstName + ' ' + lastName;
// }
// console.log(info('john', 'doe'));

// // IF ARGUMENT NOT DEFINE AT THE TIME OF CALL
// function info(firstName, lastName) {
//   if (typeof firstName === 'undefined') {
//     firstName = 'john';
//   }
//   if (typeof lastName === 'undefined') {
//     lastName = 'Doe';
//   }
//   return 'Hello ' + firstName + ' ' + lastName;
// }

// console.log(info());

// // ARGUMENT PASSING IN CALL WILL OVERRIDE
// function info(firstName, lastName) {
//   if (typeof firstName === 'undefined') {
//     firstName = 'john';
//   }
//   if (typeof lastName === 'undefined') {
//     lastName = 'Doe';
//   }
//   return 'Hello ' + firstName + ' ' + lastName;
// }

// console.log(info('steve', 'smith'));

// // IN ES6 Can directly pass with the argument
// function info(firstName = 'John', lastName = 'Doe') {
//   return 'Hello ' + firstName + ' ' + lastName;
// }

// console.log(info());

// // FUNCTION EXPRESSIONS
// const sqr = function (x) {
//   return x * x;
// };

// console.log(sqr(8));

// //IIFE - Immediate invoke function expression
// (function () {
//   console.log('IIF Expression');
// })();

// (function (name) {
//   console.log('Hello ' + name);
// })('brad');

// // FUNCTION INSIDE THE IIFS
// (function () {
//   function sum() {
//     console.log('john');
//   }
//   sum();
//   console.log('Hello');
// })();

// // PROPERTY OBJECT
// // when a function put inside the object is called method

// const todo = {
//   add: function () {
//     console.log('Add Todo...');
//   },
//   edit: function (id) {
//     console.log(`The id is ${id}`);
//   },
// };
// todo.add();
// todo.edit(5);

// todo.delete = function () {
//   //we can append the object by adding the function poutside the object todo
//   console.log('delete this function');
// };
// todo.delete();
