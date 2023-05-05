// Create list container element
const listContainer = document.createElement('ul');
 
// Create list items
const listItem1 = createListItem('Convert this code into java.');
const listItem2 = createListItem('Fix this code.');
const listItem3 = createListItem('Convert this passage into bullet points.');
const listItem4 = createListItem('Fix the grammar in this text.');
listContainer.append(listItem1, listItem2, listItem3, listItem4);

// Add event listeners to list items
listContainer.addEventListener('click', handleListItemClick);

// Find input field
const form = document.querySelector('form');
const input = form?.querySelector('textarea');

// Add event listener to input field
if (input) {
  input.addEventListener('keydown', handleInputKeydown);
} else {
  const textarea = document.querySelector('textarea[data-id]');
  const dataId = textarea.getAttribute('data-id');
  const inputarea = document.querySelector(`[data-id="${dataId}"]`);
  inputarea.addEventListener('keydown', handleInputKeydown);
}

// Create list item element
function createListItem(text) {
  const listItem = document.createElement('li');
  listItem.textContent = text;
  listItem.classList.add('list-item');
  return listItem;
}

function handleInputKeydown(event) {
  // Check if the key pressed was "/"
  if (event.key === '/') {
    console.log('User typed /');
    event.preventDefault();
    handleTextareaInput();
  } else if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
    event.preventDefault();
    const listItems = listContainer.querySelectorAll('li');
    let selectedListItemIndex = -1;
    listItems.forEach((listItem, index) => {
      if (listItem.classList.contains('selected')) {
        selectedListItemIndex = index;
      }
      listItem.classList.remove('selected');
    });
    if (event.key === 'ArrowUp') {
      if (selectedListItemIndex > 0) {
        selectedListItemIndex--;
      } else {
        selectedListItemIndex = listItems.length - 1;
      }
    } else if (event.key === 'ArrowDown') {
      if (selectedListItemIndex < listItems.length - 1) {
        selectedListItemIndex++;
      } else {
        selectedListItemIndex = 0;
      }
    }
    listItems[selectedListItemIndex].classList.add('selected');
    handleListItemClick({ target: listItems[selectedListItemIndex] });
  }
}



// Handle textarea input
function handleTextareaInput() {
  const parentElement = document.querySelector('.absolute.bottom-0.left-0.w-full.border-t.md\\:border-t-0.dark\\:border-white\\/20.md\\:border-transparent.md\\:dark\\:border-transparent.md\\:bg-vert-light-gradient.bg-white.dark\\:bg-gray-800.md\\:\\!bg-transparent.dark\\:md\\:bg-vert-dark-gradient.pt-2');
  const newElement = listContainer;
  parentElement.insertBefore(newElement, parentElement.firstChild); // Use insertBefore() method to insert the listContainer above parentElement
}



// Handle list item click
function handleListItemClick(event) {
  const form = document.querySelector('form');
  const input = form?.querySelector('textarea');

  if (input) {
    input.value = event.target.textContent;
  } else {
    const textarea = document.querySelector('textarea[data-id]');
    const dataId = textarea.getAttribute('data-id');
    const inputarea = document.querySelector(`[data-id="${dataId}"]`);
    inputarea.value = event.target.textContent;
  }

  listContainer.remove();
}

// Handle document click
function handleDocumentClick(event) {
  if (!listContainer.contains(event.target)) {
    listContainer.remove();
  }
}
