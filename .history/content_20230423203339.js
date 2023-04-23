const form = document.querySelector('form');
const input = form.querySelector('textarea');

// create a button element
const button = document.createElement('button');
button.textContent = 'Type Text';
button.style.position = 'fixed';
button.style.bottom = '20px';
button.style.right = '20px';
document.body.appendChild(button);

// add click event listener to the button
button.addEventListener('click', () => {
  // set the value of the input field with the desired text
  input.value = 'Your text here';
});
