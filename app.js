// WINDOWS OBJECT / METHOD / PROPERTIES

// // Alert
// alert(123);

// // Prompt
// prompt(); without the alert following prompt

// // Prompt with Alert
// const input = prompt();
// alert(input);

// // Confirm

// if (confirm('Are you sure')) {
//   console.log('yes');
// } else {
//   console.log('no');
// }

let val;

// Outer width & height
val = window.outerHeight;
val = window.outerWidth;

// Inner Height & Width
val = window.innerHeight;
val = window.innerWidth;

// Scroll Points
val = window.scrollY;
val = window.scrollX;

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.pathname;
val = window.location.origin;
val = window.location.port;
val = window.location.protocol;

// // Redirect
// window.location.href = 'https://google.com'; // It will redirect your web page to that URL

// // Reload
// window.location.reload(); It will continuously reload our window

// // History
// window.history.go(-1);
val = window.history.length;

// Navigator Object
val = window.navigator;
val = window.navigator.appCodeName;
val = window.navigator.appName;
val = window.navigator.onLine;
val = window.navigator.cookieEnabled;
val = window.navigator.platform;
val = window.navigator.userAgent;
val = window.navigator.geolocation;
console.log(val);
