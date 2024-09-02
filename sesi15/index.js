/*
Buat login (tak perlu styling)
ketika klik button 'Login'
cek data di konstan users
kalau ada match tampilkan alert isinya => `Selamat datang ${fullName}!`
kalau username ada, tapi password salah alert isinya => 'Invalid username or password'
kalau username tidak ada alert isinya => 'User not found'
boleh menggunakan built in function
*/

const users = [
  {
    id: 1,
    fullName: 'Arrizal',
    username: 'ark123',
    password: '1234',
  },
  {
    id: 2,
    fullName: 'Deden',
    username: 'deden123',
    password: '1234',
  },
  {
    id: 3,
    fullName: 'Eko',
    username: 'eko123',
    password: '1234',
  },
  {
    id: 4,
    fullName: 'Fajar',
    username: 'fajar123',
    password: '1234',
  },
  {
    id: 5,
    fullName: 'Gita',
    username: 'gita123',
    password: '1234',
  },
  {
    id: 6,
    fullName: 'Hadi',
    username: 'hadi123',
    password: '1234',
  },
  {
    id: 7,
    fullName: 'Indra',
    username: 'indra123',
    password: '1234',
  },
];

const login = document.getElementById('login');
login.addEventListener('click', () => {
  let username = document.getElementById('username');
  let password = document.getElementById('password');
  console.log(username.value, password.value);
  let isValid = false;
  let isUsernameFound = false;

  for (let i = 0; i < users.length; i++) {
    if (
      username.value === users[i].username &&
      password.value === users[i].password
    ) {
      alert(`Welcome ${users[i].fullName}`);
      isValid = true;
      break;
    }
    if (
      username.value === users[i].username &&
      password.value !== users[i].password
    ) {
      isUsernameFound = true;
      break;
    }
  }

  if (!isValid && !isUsernameFound) {
    alert('Username not found');
  } else if (!isValid && isUsernameFound) {
    alert('Invalid username or password');
  }

  username.value = '';
  password.value = '';
});

//selector
const judul1 = document.getElementById('judul1');
// document.getElementsByTagName('h2')[0].id = 'subTitle';

judul1.style.color = 'blue';
judul1.style.textDecoration = 'underline';

document
  .getElementById('buttonRemove')
  .addEventListener('click', () => {
    judul1.innerHTML = '';
  });

const h2s = document.getElementsByTagName('h2');

for (let i = 0; i < h2s.length; i++) {
  if (i % 2 === 0) {
    h2s[i].id = 'subTitleEven';
  } else {
    h2s[i].id = 'subTitleOdd';
  }
}

const button = document.getElementById('clearPage');
button.addEventListener('click', () => {
  const content = document.getElementById('content');
  if (content.style.display === 'none') {
    content.style.display = 'block';
  } else {
    content.style.display = 'none';
  }
});

// contoh.innerText = '<h1>Kuda</h1>';

//element selector
const contoh = document.getElementById('contoh');

// for (let i = 1; i <= 10; i++) {
//   // element creator
//   const count = document.createElement('h2');
//   count.innerText = i;
//   // element concatenation
//   contoh.appendChild(count);
// }

const submitNumberButton =
  document.getElementById('submitNumber');

const numberInput = document.getElementById('numberInput');
numberInput.addEventListener('keyup', e => {
  contoh.innerHTML = '';
  const value = Number(e.target.value);
  for (let i = 1; i <= value; i++) {
    // element creator
    const count = document.createElement('h2');
    count.innerText = i;
    // element concatenation

    contoh.appendChild(count);
  }
});
submitNumberButton.addEventListener('click', () => {
  contoh.innerHTML = '';
  const value = Number(numberInput.value);
  for (let i = 1; i <= value; i++) {
    // element creator
    const count = document.createElement('h2');
    count.innerText = i;
    // element concatenation

    contoh.appendChild(count);
  }
  numberInput.value = '';
});

function something() {
  alert('aku terpencet');
}
