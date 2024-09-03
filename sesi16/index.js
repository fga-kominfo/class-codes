// function doSomethingDealyed() {
//   console.log("I'm a delayed function");
// }

// setTimeout(doSomethingDealyed, 3000);
const farmAnimals = [
  {
    name: 'Cow',
    sound: 'Moo',
    produce: 'Milk',
    weight: 1000,
  },
  {
    name: 'Chicken',
    sound: 'Cluck',
    produce: 'Egg',
    weight: 5,
  },
  {
    name: 'Sheep',
    sound: 'Baa',
    produce: 'Wool',
    weight: 80,
  },
  {
    name: 'Pig',
    sound: 'Oink',
    produce: 'Bacon',
    weight: 150,
  },
];

function greetings(animals) {
  const result = [];
  for (let i = 0; i < animals.length; i++) {
    result.push(
      `${animals[i].name} went ${animals[i].sound}-${animals[i].sound}`,
    );
  }

  return result;
}

const animalGreetings = greetings(farmAnimals);
console.log(animalGreetings);
// const animalProduces = farmAnimals.map(animal => {
//   return `${animal.name} produces ${animal.produce}`;
// });
// console.log(animalProduces);
const animalProduces = [];
farmAnimals.forEach(animal => {
  animalProduces.push(
    `${animal.name} produces ${animal.produce}`,
  );
});
console.log(animalProduces);

// const bigAnimals = farmAnimals.map(animal => {
//   if (animal.weight > 100) {
//     return animal;
//   }
// });

const bigAnimals = farmAnimals.filter(e => e.weight > 100);
console.log(bigAnimals);

const totalWeight = farmAnimals.reduce(
  (prev, current) => prev + current.weight,
  0,
);
console.log(totalWeight);

const sounds = farmAnimals.reduce(
  (prev, current) => prev + current.sound + '-',
  '',
);

console.log(sounds);
