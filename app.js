// // FOR LOOP

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     console.log(i + ' is my favourite Number');
//     continue; //continue stop the current iteration and allow to next iteration
//   }
//   if (i === 7) {
//     console.log('Stop the loop');
//     break; // break stop the looping after the current iteration
//   }

//   console.log('Number ' + i);
// }

// // WHILE LOOP

// let i = 0;

// while (i < 10) {
//   console.log('Number ' + i);
//   i++;
// }

// // DO WHILE

// let i = 0;

// do {
//   console.log('Number ' + i);
//   i++;
// } while (i < 10);

// LOOP THROUGH ARRAY
// const cars = ['honda', 'toyota', 'audi', 'BMW'];

// for (i = 0; i < 4; i++) {
//   console.log(cars[i]);
// }

fruits = ['Apple', 'Mango', 'Banana', 'Orange', 'Grapes'];

// FOR EACH
fruits.forEach(function (fruit, index, array) {
  console.log(`${index}` + ' ' + fruit + ' ' + array);
});

// // MAP
// const users = [
//   {
//     id: 1,
//     name: 'Sara',
//   },
//   {
//     id: 2,
//     name: 'John',
//   },
//   {
//     id: 3,
//     name: 'Karen',
//   },
// ];
// const ids = users.map(function (user) {
//   return user.id;
// });
// console.log(ids);
