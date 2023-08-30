import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onInput, 500));

function onInput(event) {
  let userData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(userData));
}

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  let userData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  console.log(userData);
  localStorage.removeItem(LOCALSTORAGE_KEY);
  event.target.reset();
}

window.addEventListener('load', onLoad);

function onLoad(event) {
  try {
    const savedData = localStorage.getItem(LOCALSTORAGE_KEY);
    const parsedData = JSON.parse(savedData);
    form.elements.email.value = parsedData.email;
    form.elements.message.value = parsedData.message;
  } catch {}
}
