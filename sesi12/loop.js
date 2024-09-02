let index = 5;

// while (index <= 3) {
//   console.log('Perulangan ke:', index);
//   index += 3;
// }
// do {
//   console.log('Perulangan ke:', index);
//   index++;
// } while (index <= 3);

const count = 3;
// for (let i = 1; i < count; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }

for (let i = 0; i < count; i++) {
  console.log(i);
  for (let i = 0; i < count; i++) {
    console.log('  ', i);
  }
}
