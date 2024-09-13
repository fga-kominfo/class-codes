const api = 'https://pokeapi.co/api/v2/pokemon/';

async function getPokemonsSynchronous() {
  try {
    // get list pokemons
    const res = await fetch(api);
    const {results} = await res.json();
    const pokemons = [];

    // get pokemon details
    for (let i = 0; i < results.length; i++) {
      const pokemon = results[i];
      const {url} = pokemon;
      const res = await fetch(url);
      const detail = await res.json();

      pokemon.detail = detail;

      debugger;
      pokemons.push(pokemon);
    }

    // save pokemon list to json
    // await fs.writeFile(
    //   './pokemons2.json',
    //   JSON.stringify(pokemons, null, 2),
    // );
    console.log('pokemons json successfully created');
  } catch (error) {
    console.log(error);
  }
}

// async function getPokemonsPromiseAll() {
//   try {
//     const res = await fetch(api);
//     const {results} = await res.json();

//     const pokemons = await Promise.all(
//       results.map(async (pokemon, i) => {
//         const res = await fetch(pokemon.url);
//         const detail = await res.json();
//         return {
//           ...pokemon,
//           detail,
//         };
//       }),
//     );

//     await fs.writeFile(
//       './pokemons3.json',
//       JSON.stringify(pokemons, null, 2),
//     );
//     console.log('completed');
//   } catch (error) {
//     console.error(error);
//   }
// }

getPokemonsSynchronous();

// hasilnya => ditulis ke dalam pokemons.json
/*
    [
        {
            name: "Bulbasaur",
            url: "https://pokeapi.co/api/v2/pokemon/1/",
            details: {
                ...hasil fetch url https://pokeapi.co/api/v2/pokemon/1/
                    }
        }
    ]
*/

// cosnt something = 'aku'

// const nama = 'ari';
// console.log(nama.first.last);

// function isEven(num) {
//   if (num % 2 === 0) return false;
//   return true;
// }

// console.log(isEven(8));
// console.log(isEven(7));

// const firstName = 'arrizal';
// let myVar = 1;
// myVar++;
// myVar++;
// myVar++;
// debugger;
// myVar++;
// debugger;
// myVar++;

// console.log(myVar);
