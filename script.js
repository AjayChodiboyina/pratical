const form = document.querySelector('.login-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = form.username.value;
  const password = form.password.value;
  if (username === 'admin' && password === 'password') {
    alert('Login successful!');
  } else {
    alert('Invalid username or password');
  }
});
