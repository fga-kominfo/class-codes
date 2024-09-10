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

function chopper(fruits, cb) {
  console.log(fruits, 'chopping fruits...');

  setTimeout(() => {
    //logic mengubah fruits menjadi => 'chopped-{fruitName}'
    const choppedFruits = fruits.map(
      fruit => 'chopped-' + fruit,
    );
    cb(choppedFruits);
  }, 1000);
}

function juicer(choppedFruits, cb) {
  console.log(choppedFruits, 'juicing chopped fruits...');

  setTimeout(() => {
    //logic mengubah 'chopped-{fruitName}' menjadi => '{fruitName}-juice'
    const juices = choppedFruits.map(
      fruit => fruit.split('-')[1] + '-juice',
    );
    cb(juices);
  }, 1000);
}

function startJuicing(fruits) {
  //your code here
  chopper(fruits, choppedFruits => {
    juicer(choppedFruits, juices => {
      console.log(
        juices.join(', '),
        'is ready to be served',
      );
    });
  });
}

const fruits = ['apple', 'mango', 'papaya', 'watermelon'];

startJuicing(fruits);
