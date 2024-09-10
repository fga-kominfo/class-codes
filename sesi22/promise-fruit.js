function chopper(fruits) {
  return new Promise((resolve, reject) => {
    console.log('chopping fruits...');
    setTimeout(() => {
      const choppedFruits = fruits.map(
        fruit => `chopped-${fruit}`,
      );
      resolve(choppedFruits);
    }, 500);
  });
}

function juicer(choppedFruits) {
  return new Promise((resolve, reject) => {
    console.log('juicing fruits...');
    setTimeout(() => {
      const juices = choppedFruits.map(
        chopped => `${chopped.split('-')[1]}-juice`,
      );
      resolve(juices);
    }, 500);
  });
}

function startJuicing(fruits) {
  return new Promise((resolve, reject) => {
    resolve(fruits);
  });
}

const fruits = ['apple', 'mango', 'papaya', 'watermelon'];

startJuicing(fruits)
  .then(fruits => chopper(fruits))
  .then(choppedFruits => juicer(choppedFruits))
  .then(juices =>
    console.log(
      `${juices.join(', ')} is ready to be served...`,
    ),
  );
