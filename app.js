const form = document.getElementById('form');
const button = document.getElementById('button');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const seePassword = document.querySelector('.open')
const unseePassword = document.querySelector('.close')




const firstError = document.createElement('p')
firstError.classList.add('errors')

const lastError = document.createElement('p')
lastError.classList.add('errors')

const emailError = document.createElement('p')
emailError.classList.add('errors')

const passwordError = document.createElement('p')
passwordError.classList.add('errors')

const firstNameIcon = document.querySelector('.firstName-icon');
const lastNameIcon = document.querySelector('.lastName-icon');
const emailIcon = document.querySelector('.email-icon');
const passwordIcon = document.querySelector('.password-icon');


console.log(firstName);

// console.log(firstName, lastName, email, password);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;
  console.log(fName, lName, emailVal, passwordVal);

  if (firstError.parentElement) {
    firstError.parentElement.removeChild(firstError);
    firstNameIcon.classList.remove('js-icon');
  }

  if (lastError.parentElement) {
    lastError.parentElement.removeChild(lastError);
    lastNameIcon.classList.remove('js-icon');
  }

  if (emailError.parentElement) {
    emailError.parentElement.removeChild(emailError);
    emailIcon.classList.remove('js-icon');
  }

  if (passwordError.parentElement) {
    passwordError.parentElement.removeChild(passwordError);
    passwordIcon.classList.remove('js-icon');
  }
  // Check first name
  if (fName === '') {
    firstError.textContent = 'First Name cannot be empty'
    firstName.classList.add('error');
    firstName.insertAdjacentElement('afterend', firstError);
    firstNameIcon.classList.add('js-icon');
  } else {
    firstName.classList.remove('error');
  }
  // Check last name

  if (lName === '') {
    lastError.textContent = 'Last Name cannot be empty'
    lastName.insertAdjacentElement('afterend', lastError);
    lastName.classList.add('error');
    lastNameIcon.classList.add('js-icon');
  } else {
    lastName.classList.remove('error');
  }
  // Check email

  if (!validateEmail(emailVal) || emailVal === '') {
    email.insertAdjacentElement('afterend', emailError);
    emailError.textContent = 'Looks like this is not an email'
    email.classList.add('error');
    emailIcon.classList.add('js-icon');
  } else {
    email.classList.remove('error');
  }

  // Check password

  if (passwordVal === '') {
    password.insertAdjacentElement('afterend', passwordError);
    passwordError.textContent = 'Password cannot be empty'
    password.classList.add('error');
    passwordIcon.classList.add('js-icon');
    unseePassword.classList.add('js-close')
    seePassword.classList.add('js-close')
  } else {
    password.classList.remove('error');
  }
});

//Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


function togglePassword() {
  if (password.type === 'password') {
    password.type = 'text';
    seePassword.style.display = 'inline';
    unseePassword.style.display = 'none';
  } else {
    password.type = 'password';
    seePassword.style.display = 'none';
    unseePassword.style.display = 'inline';
  }
}
