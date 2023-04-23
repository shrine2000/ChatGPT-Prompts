const form = document.querySelector('form');
const input = form.querySelector('textarea');

// create buttons
const button1 = document.createElement('button');
button1.textContent = 'Button 1';
button1.style.position = 'fixed';
button1.style.bottom = '20px';
button1.style.right = '80px';
button1.classList.add('button-34'); // add CSS class to the button element

const button2 = document.createElement('button');
button2.textContent = 'Button 2';
button2.style.position = 'fixed';
button2.style.bottom = '20px';
button2.style.right = '140px';
button2.classList.add('button-34'); // add CSS class to the button element

const button3 = document.createElement('button');
button3.textContent = 'Button 3';
button3.style.position = 'fixed';
button3.style.bottom = '20px';
button3.style.right = '200px';
button3.classList.add('button-34'); // add CSS class to the button element

const button4 = document.createElement('button');
button4.textContent = 'Button 4';
button4.style.position = 'fixed';
button4.style.bottom = '20px';
button4.style.right = '260px';
button4.classList.add('button-34'); // add CSS class to the button element




// add buttons to the page
document.body.appendChild(button1);
document.body.appendChild(button2);
document.body.appendChild(button3);
document.body.appendChild(button4);

// add click event listeners to the buttons
button1.addEventListener('click', () => {
  // set the value of the input field with the desired text
  input.value = 'Convert this code in java - ';
});

button2.addEventListener('click', () => {
  // set the value of the input field with the desired text
  input.value = 'Fix this code - ';
});

button3.addEventListener('click', () => {
  // set the value of the input field with the desired text
  input.value = 'Convert this passage into points';
});

button4.addEventListener('click', () => {
  // set the value of the input field with the desired text
  input.value = 'Fix grammar';
});
