const form = document.querySelector('form');
const input = form.querySelector('textarea');

// create buttons
const button1 = createButton('Convert this code in Java - ', '80px');
const button2 = createButton('Fix this code - ', '140px');
const button3 = createButton('Convert this passage into points', '200px');
const button4 = createButton('Please fix the grammar in my text - ', '260px');

// add buttons to the page
document.body.appendChild(button1);
document.body.appendChild(button2);
document.body.appendChild(button3);
document.body.appendChild(button4);

// add click event listener to all buttons
function handleButtonClick(event) {
  input.value = event.target.textContent;
}

button1.addEventListener('click', handleButtonClick);
button2.addEventListener('click', handleButtonClick);
button3.addEventListener('click', handleButtonClick);
button4.addEventListener('click', handleButtonClick);

// helper function to create button element
function createButton(text, bottom) {
  const button = document.createElement('button');
  button.textContent = text;
  button.style.position = 'fixed';
  button.style.bottom = bottom;
  button.style.right = '20px';
  button.classList.add('button-34');
  return button;
}
