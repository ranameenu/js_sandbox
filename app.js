let val;

const today = new Date();

val = today;
val = String(today);
val = today.toString();

const birthday = new Date('19 aug 1991 09:20:00 PM');

val = birthday.getMonth();
val = birthday.getDate();
val = birthday.getFullYear();
val = birthday.getDay();
val = birthday.getHours();
val = birthday.getMinutes();
val = birthday.getSeconds();
val = birthday.getMilliseconds();
val = birthday.getTime();

// SET METHOD TO SET ANY THING IN DATE OBJECT
val = birthday.setMonth(2);
val = birthday.getMonth();

console.log(val);
