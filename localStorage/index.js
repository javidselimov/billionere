const name = document.querySelector('#name');
const password = document.querySelector('#password');
const button = document.querySelector('button');
const user = document.querySelector('.user');


const localUser = localStorage.getItem('user');
const localPassword = localStorage.getItem('password');


if (localPassword && localUser) {
  user.innerHTML = 'salam' + ' ' + localUser+`<button class='logout'>LOGOUT</button>`;
  const logout = document.querySelector('.logout');

  console.log(logout)
  logout.addEventListener('click', () => {
   localStorage.clear()
   window.location.reload()
  });

}

button.addEventListener('click', (e) => {
  const nameVal = name.value.trim();
  const passwordValue = password.value.trim();

  console.log(nameVal);
  console.log(passwordValue);

  //   The Logic for login with sending post request to API

  localStorage.setItem('user', nameVal);
  localStorage.setItem('password', passwordValue);
   window.location.reload();
});



