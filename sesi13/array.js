const animals = [
  'dog',
  'cat',
  'sheep',
  'rabbit',
  'monkey',
  'tiger',
  'bear',
  'elephant',
  'lion',
  'zebra',
];

animals[1] = 'kucing';
const newAnimals = ['giraffe', 'dolphin', 'shark'];
const mergedAnimals = [
  ...animals.slice(0, 2),
  ...newAnimals,
  ...animals.slice(2),
];
mergedAnimals.push('whale'); // menambahkan 1 data ke dalam array di urutan terakhir
mergedAnimals.pop(); // menghilangkan 1 data terakhir dari dalam array
mergedAnimals.unshift('whale'); // menambahkan 1 data ke dalam array di urutan pertama
mergedAnimals.shift(); // menghilangkan 1 data pertama dari dalam array

// console.log(mergedAnimals, '<<before splice');

// const splicedAnimals = mergedAnimals.splice(1, 3);
// console.log(mergedAnimals); // "kucing"
// // console.log(splicedAnimals); // "kucing"
// const slicedAnimals = mergedAnimals.slice(0, 2);
// const joinedAnimals = animals.join(' ');
// const splittedAnimals = joinedAnimals.split(' ');
// // console.log(splittedAnimals); // "kucing"
// const numbers = [15, 2, 1];
// numbers.sort((a, b) => b - a);
// // console.log(numbers);
// const peta = [0, 0, 0, [0, [0, 1, 0], 0]];
// console.log(peta[3][1][1]);

const student = {
  firstName: 'Arrizal',
  lastName: 'Kurniawan',
  class: '1A',
  hobbies: ['game', 'food', 'code', 'travel'],
  address: {
    alamatKtp: {
      street: 'something',
      postalCode: 12345,
    },
    alamatDomisili: {
      street: 'lalala',
      postalCode: 12543,
    },
  },
  'ukuran sepatu': 45,
};

student.grades = [100, 100, 100, 100];
student.address.alamatKtp.street = 'pondok indah';
student.address.parentAddress = {};
student.address.parentAddress.street = 'parent street';
student.address.parentAddress.postalCode = 232323;
console.log(student['ukuran sepatu']);
const toFind = 'hobbies';
console.log(student[toFind]);
