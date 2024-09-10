// function sum(a, b, cb) {
//   setTimeout(() => {
//     const result = a + b;
//     console.log(result, 'di dalam function');
//     return result;
//   }, 500);
// }

// const result = sum(2, 3);

// setTimeout(() => {
//   console.log(result);
// }, 1000);

// function sumCallback(a, b, callback) {
//   setTimeout(() => {
//     const result = a + b;
//     callback(result);
//   }, 500);
// }

// sumCallback(5, 6, num => {
//   console.log(num);
// });

function chopper(fruits) {
  console.log('chopping fruits...');

  setTimeout(() => {
    //logic mengubah fruits menjadi => 'chopped-{fruitName}'
  }, 1000);
}

function juicer(choppedFruits) {
  console.log('juicing chopped fruits...');

  setTimeout(() => {
    //logic mengubah 'chopped-{fruitName}' menjadi => '{fruitName}-juice'
  }, 1000);
}

function startJuicing(fruits) {
  //your code here

  console.log(`${juices.join(', ')} is ready to be served`);
}

const fruits = ['apple', 'mango', 'papaya', 'watermelon'];

startJuicing(fruits);
