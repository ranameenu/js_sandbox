// Template literals

var name = 'john';
var age = 20;
var job = 'developer';
var city = 'delhi';
let html;

// Without template literals (es5)
html =
  '<ul><li>Name: ' +
  name +
  '</li><li>Age: ' +
  age +
  '</li><li>Job: ' +
  job +
  '</li><li>City: ' +
  city +
  '</li></ul>';

//   With template literals (es6)
function hello(instructor) {
  return instructor;
}

html = `
<ul>
<li>Name:  ${name} </li>
<li>Age:  ${age}</li>
<li>Job: ${job}</li>
<li>City: ${city}</li>
<li> ${4 + 4}</li>
<li> ${hello('brad')}</li>
<li> ${age > 30 ? 'you are old' : 'you are so young'}</li>
</ul>`;

document.body.innerHTML = html;
