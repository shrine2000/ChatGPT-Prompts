// Load existing list items from localStorage
const storedItems = localStorage.getItem('listItems');
const parsedItems = storedItems ? JSON.parse(storedItems) : [];

const sidebarContainer = document.createElement('div');
sidebarContainer.classList.add('sidebar-container');
sidebarContainer.style.position = 'fixed';
sidebarContainer.style.top = '0';
sidebarContainer.style.right = '0';
sidebarContainer.style.width = '250px';
sidebarContainer.style.height = '100%';
sidebarContainer.style.backgroundColor = '#f1f1f1';

const closeButton = document.createElement('button');
closeButton.textContent = 'Close';
closeButton.classList.add('close-button');
closeButton.addEventListener('click', handleCloseButtonClick);

const listContainer = document.createElement('ul');
listContainer.style.height = 'calc(100% - 100px)';
listContainer.style.overflow = 'scroll';

const newItemInput = document.createElement('input');
newItemInput.type = 'text';
newItemInput.placeholder = 'Enter new item';

const addButton = document.createElement('button');
addButton.textContent = 'Add';
addButton.classList.add('add-button');
addButton.addEventListener('click', handleAddButtonClick);

sidebarContainer.append(closeButton, listContainer, newItemInput, addButton);
document.body.appendChild(sidebarContainer);

// Initialize the list items with the stored items
parsedItems.forEach((itemText) => {
  const listItem = createListItem(itemText);
  listItem.addEventListener('click', handleListItemClick);
  listContainer.appendChild(listItem);
});

function handleListItemClick(event) {
  const form = document.querySelector('form');
  const input = form?.querySelector('textarea');

  if (input == null) {
    const textarea = document.querySelector('textarea');
    const dataId = textarea.getAttribute('data-id');
    const inputarea = document.querySelector(`[data-id="${dataId}"]`);
    inputarea.value = event.target.textContent;
  } else {
    input.value = event.target.textContent;
  }
}

function createListItem(text) {
  const listItem = document.createElement('li');
  listItem.textContent = text;
  listItem.classList.add('list-item');
  return listItem;
}

function handleCloseButtonClick() {
  sidebarContainer.remove();
  closeButton.removeEventListener('click', handleCloseButtonClick);
}

function handleAddButtonClick() {
  const newItemText = newItemInput.value.trim();
  if (newItemText !== '') {
    const newItem = createListItem(newItemText);
    newItem.addEventListener('click', handleListItemClick);
    listContainer.appendChild(newItem);
    newItemInput.value = '';

    // Save the updated list items to localStorage
    parsedItems.push(newItemText);
    localStorage.setItem('listItems', JSON.stringify(parsedItems));
  }
}
