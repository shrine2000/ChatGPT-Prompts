const form = document.querySelector('form');
const input = form.querySelector('textarea');

// create list container
const listContainer = document.createElement('ul');
listContainer.style.position = 'fixed';
listContainer.style.bottom = '80px'; // set the initial position of the container
listContainer.style.right = '20px';
listContainer.style.height = '200px'; // set the height of the container
listContainer.style.overflow = 'scroll'; // enable scrolling

// create list items
const listItem1 = createListItem('Convert this code in Java - ');
const listItem2 = createListItem('Fix this code - ');
const listItem3 = createListItem('Convert this passage into points - ');
const listItem4 = createListItem('Please fix the grammar in my text - ');

// add list items to the container
listContainer.appendChild(listItem1);
listContainer.appendChild(listItem2);
listContainer.appendChild(listItem3);
listContainer.appendChild(listItem4);

// add list container to the page
document.body.appendChild(listContainer);

// add click event listener to all list items
function handleListItemClick(event) {
  input.value = event.target.textContent;
}

listItem1.addEventListener('click', handleListItemClick);
listItem2.addEventListener('click', handleListItemClick);
listItem3.addEventListener('click', handleListItemClick);
listItem4.addEventListener('click', handleListItemClick);

// helper function to create list item element
function createListItem(text) {
  const listItem = document.createElement('li');
  listItem.textContent = text;
  listItem.classList.add('list-item');
  return listItem;
}
