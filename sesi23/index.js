const content = document.getElementById('content');
// xhttp
// const fetchUsers = new XMLHttpRequest();
// fetchUsers.open(
//   'GET',
//   'https://randomuser.me/api/?results=10',
//   true,
// );
// fetchUsers.send();

// fetchUsers.onreadystatechange = function () {
//   if (this.status === 200) {
//     const users = JSON.parse(this.responseText).results;

//     for (let i = 0; i < users.length; i++) {
//       const user = users[i];
//       const p = document.createElement('p');
//       p.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`;
//       content.appendChild(p);
//     }
//   }
// };

//fetch promise
// fetch('https://randomuser.me/api/?results=10')
//   .then(res => res.json())
//   .then(data => {
//     const users = data.results;
//     for (let i = 0; i < users.length; i++) {
//       const user = users[i];
//       const p = document.createElement('p');
//       p.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`;
//       content.appendChild(p);
//     }
//   });

//fetch async await
async function getUsers() {
  const result = await fetch(
    'https://randomuser.me/api/?results=10',
  );
  const data = await result.json();
  const users = data.results;

  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const p = document.createElement('p');
    p.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`;
    content.appendChild(p);
  }
}

getUsers();
console.log('1');
console.log('2');
console.log('3');
