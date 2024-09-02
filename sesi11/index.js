// //global variable
// //var
// var number = 5;
// var number = 8; // bisa di redeclare
// number = 3; // bisa di reassign
// // console.log(number);

// // scoped varible
// //let
// let name = 'a';
// // let name = 'abcd'; // tidak bisa di redeclare
// name = 'abcd'; // bisa di reassign
// // console.log(name);

// //const
// const cow = 'sapi';
// // const cow = 'kerbau' // tidak bisa di redeclare
// // cow = 'burung'; // tidak bisa di reassign
// // console.log(cow);
// // vegetable = 'buncis';
// console.log(vegetable);

// const name = 'Arrizal';
// function something() {
//   console.log('Hello', name);
// }

// if (true) {
//   const number = 10;
//   if (number > 5) {
//     const number = 88;
//     console.log(number, 'di dalam if if');
//   }
//   console.log(number, 'di dalam if');
// }
// something();
// const userFirstName = 'Arrizal';
// const adminFirstName = 'Baba';

// function something() {
//   var age = 17;
//   console.log('Umur saya', age);
// }

// something();
// let age = 12;
// // console.log('umur adik saya', age);
// if (age > 7) {
//   let age = 40;
//   console.log('umur emak saya', age);
// }

// console.log('umur saya', age);

// const grades = [100, 90, 80, 22, 'sadfas', 123, 432];
// const coordinates = [
//   [234234, 234785348],
//   [34534895, 234958739],
//   [345934, 34857348],
// ];

// coordinates.push('data baru');
// coordinates.unshift('data pertama');
// coordinates.shift();
// coordinates.pop();

// console.log(coordinates);

// const person = {
//   firstName: 'arrizal',
//   lastName: 'kurniawan',
//   gender: 'male',
//   age: 20,
//   ktp: '23458347843',
//   grades: [100, 90, 95, 100],
//   address: {
//     street: 'something',
//     city: 'Jakarta',
//     country: 'Indonesia',
//   },
// };

// person.lastName = 'Wawan';
// console.log(person.address.country);
let value = '';
const result = document.getElementById('result');
function renderTitle() {
  result.innerText = value;
  console.log(value, '<<<');
}
function handleSubmit() {
  const input = document.getElementById('fname');

  value = input.value;
  renderTitle();
  return false;
}
