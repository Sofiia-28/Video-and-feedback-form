import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onInput, 500));

function onInput(event) {
  event.preventDefault();
  localStorage.setItem(
    LOCALSTORAGE_KEY,
    JSON.stringify({
      email: form.elements.email.value,
      message: form.elements.message.value,
    })
  );
}

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  console.log({
    email: form.elements.email.value,
    message: form.elements.message.value,
  });
  localStorage.removeItem(LOCALSTORAGE_KEY);
  form.reset();
}

window.addEventListener('load', onLoad);

const savedData = localStorage.getItem(LOCALSTORAGE_KEY);
const parsedData = JSON.parse(savedData);
function onLoad(event) {
  form.elements.email.value = parsedData.email;
  form.elements.message.value = parsedData.message;
}
