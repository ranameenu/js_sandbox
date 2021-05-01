const color = 'pink';

switch (color) {
  case 'red':
    console.log('red');
    break;
  case 'blue':
    console.log('blue');
    break;
  case 'green':
    console.log('green');
    break;
  default:
    console.log('yellow');
}

let day;

switch (new Date().getDay()) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thrusday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
    break;
}

console.log(day);
