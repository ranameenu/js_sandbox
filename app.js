var a = 1;
let b = 2;
const c = 3;

// function test() {
//   var a = 4;
//   let b = 5;
//   const c = 6;

//   console.log(
//     `function Scope of variable a, b, c are respectively ${a}, ${b} & ${c} `
//   );
// }
// test();

if (true) {
  var a = 7;
  let b = 8;
  const c = 9;
  console.log(`Block Scope ${a}, ${b}, ${c}`);
}

console.log(
  `Global Scope of variable a, b, c are respectively ${a}, ${b} & ${c} `
);
