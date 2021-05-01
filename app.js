const person = {
  firstName: 'steve',
  lastName: 'smith',
  age: 30,
  email: 'steve@aol.com',
  hobbies: ['movies', 'music', 'swimming', 'sports'],
  address: {
    city: 'Miami',
    state: 'FL',
  },
  getBirthYear: function (current) {
    return current - this.age;
  },
};

let val;

val = person.firstName;
val = person['firstName'];
val = person.age;
val = person.hobbies;
val = person.address;
val = person.getBirthYear('1988');
val = person.hobbies[1];
val = person.address.city;
val = person.getBirthYear('2021');

console.log(val);

const people = [
  {
    name: 'mike',
    age: 29,
    job: 'developer',
  },
  {
    name: 'john',
    age: 35,
    job: 'front-end-developer',
  },
  {
    name: 'brad',
    age: 36,
    job: 'engineer',
  },
];

for (i = 0; i < people.length; i++) {
  console.log(people[i].name);
}
