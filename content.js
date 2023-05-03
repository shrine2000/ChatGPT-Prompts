const form = document.querySelector('form');
const input = form.querySelector('textarea');

const fab = document.createElement('button');
fab.classList.add('fab');
fab.textContent = '+';
fab.style.position = 'fixed';
fab.style.bottom = '50px';
fab.style.right = '20px';

fab.classList.add('floating-action-button');
fab.addEventListener('click', handleFabClick);

document.body.appendChild(fab);

function handleFabClick() {
  // create list container
  const listContainer = document.createElement('ul');
  listContainer.style.position = 'fixed';
  listContainer.style.bottom = '80px';
  listContainer.style.right = '20px';
  listContainer.style.height = '200px';
  listContainer.style.overflow = 'scroll';

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

  // add click event listener to all list items
  function handleListItemClick(event) {
    input.value = event.target.textContent;
    listContainer.remove(); // remove the list container after an item is clicked
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

  // add click event listener to the document body
  document.body.addEventListener('click', handleDocumentClick);

  function handleDocumentClick(event) {
    if (!listContainer.contains(event.target) && event.target !== fab) {
      listContainer.remove(); // remove the list container if the user clicks outside of it
    }
  }

  document.body.appendChild(listContainer);
}

