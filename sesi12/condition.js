//upacara kondisi sequence
const isHat = true;
const isTie = false;
const isBelt = true;
const isSocks = false;
const isBlackShoes = false;
const firstName = 'Arrizal';
// 0, '', null, undefined, NaN, false ==> nilai falsy

// console.log('jeruk' - 5);

// if ('') {
//   console.log('Hello world');
// }
// if if
// let point = 0;
// if (isHat === false) {
//   point++;
// }
// if (isTie === false) {
//   point++;
// }
// if (isBelt === false) {
//   point++;
// }
// if (isSocks === false) {
//   point++;
// }
// if (isBlackShoes === false) {
//   point++;
// }

// if else if else
// if (point === 1) {
//   console.log('berdiri di lapangan');
// } else if (point === 2) {
//   console.log('sapu halaman');
// } else if (point === 3) {
//   console.log('pulang');
// } else if (point === 4) {
//   console.log('skors');
// }

const grade = 55;
const status = grade >= 80 ? 'passed' : 'failed'; // best practice penggunaan ternary operator
const symbolGrade =
  grade >= 80
    ? 'A'
    : grade >= 60
    ? B
    : grade >= 50
    ? 'C'
    : 'D';
// console.log(symbolGrade);
const gender = 'men';

// switch (gender) {
//   case 'male':
//   case 'men':
//     console.log('He is going to male dormitory');
//     break;
//   case 'female':
//   case 'women':
//     console.log('She is going to female dormitory');
//     break;
//   default:
//     console.log('Invalid');
//     break;
// }

const name = undefined;

// console.log(`Hello ${name ?? 'John Doe'}`);

// if (
//   (typeof grade === 'number' &&
//     grade >= 0 &&
//     grade <= 100) ||
//   grade === 'A'
// ) {
//   if (grade > 80 || grade === 'A') {
//     console.log('Pinter');
//   } else {
//     console.log('Kurang pinter');
//   }
// } else {
//   console.log('Invalid grade');
// }

const budget = 20;
// jika budget lebih dari 25, print beli motor baru, jika tidak print beli motor bekas
// pakai if else
if (budget > 25) {
  console.log('beli motor baru');
} else {
  console.log('beli motor bekas');
}
// pakai ternary
console.log(
  budget > 25 ? 'beli motor baru' : 'beli motor bekas',
);
