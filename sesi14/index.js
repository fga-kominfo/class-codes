const fs = require('fs');
// function default
function capitalizer(str) {
  var myName = 'lulu';
  if (typeof str !== 'string') {
    return 'invalid string';
  }
  return str.toUpperCase();
}

// console.log(capitalizer('ujang'));
const umur = 22;

if (umur > 17) {
  var myName = 'Arrizal';
}
// console.log(myName);

// anonymous function
// const myFunc = function () {
//   console.log(this);

//   console.log('Hello world');
// };

// myFunc();

// myFunc();
// fs.writeFile(
//   './something.json',
//   JSON.stringify({greetings: 'Hello World'}, null, 2),
//   err => {
//     console.log(err);
//   },
// );

// arrow function
// const myFunc = () => {
//   console.log(this);
//   console.log('Hello World');
// };

// myFunc();
const dictionary = str =>
  str === 'male' ? 'Laki Laki' : 'Perempuan';

// console.log(dictionary('male'));
const arr = [1, 6, 2, 3, 19];
setTimeout(() => {
  console.log('Halo Arrizal');
}, 2000);
arr.sort((a, b) => a - b);
