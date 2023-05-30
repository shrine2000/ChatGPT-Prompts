// Load existing list items from localStorage
const storedItems = localStorage.getItem('listItems');
const parsedItems = storedItems ? JSON.parse(storedItems) : [];

const sidebarContainer = document.createElement('div');
sidebarContainer.classList.add('sidebar-container');
sidebarContainer.style.position = 'fixed';
sidebarContainer.style.top = '0';
sidebarContainer.style.right = '0';
sidebarContainer.style.width = '300px';
sidebarContainer.style.height = '100%';
sidebarContainer.style.backgroundColor = '#f1f1f1';
 
const closeButton = document.createElement('button');
closeButton.textContent = 'Open';
closeButton.classList.add('close-button');
closeButton.addEventListener('click', toggleSidebar);


const tabContainer = document.createElement('div'); 
tabContainer.classList.add('tab-container');

const tab1Button = document.createElement('button');
tab1Button.textContent = 'User';
tab1Button.classList.add('tab-button');
tab1Button.addEventListener('click', tabLoadUserPrompts);

const tab2Button = document.createElement('button');
tab2Button.textContent = 'Online';
tab2Button.classList.add('tab-button');
tab2Button.addEventListener('click', tabFetchPrompts);

const listContainer = document.createElement('ul');
listContainer.style.height = 'calc(100% - 100px)';
listContainer.style.overflow = 'scroll';

const inputContainer = document.createElement('div');
inputContainer.style.display = 'flex';
inputContainer.style.justifyContent = 'space-between';
inputContainer.style.margin = '10px 0';

const newItemInput = document.createElement('input');
newItemInput.type = 'text';
newItemInput.placeholder = 'Enter new item';
newItemInput.style.flex = '7';

const addButton = document.createElement('button');
addButton.textContent = 'Add';
addButton.classList.add('add-button');
addButton.style.flex = '3';
addButton.addEventListener('click', handleAddButtonClick);

sidebarContainer.append(closeButton, tabContainer, listContainer, inputContainer); 
tabContainer.append(tab1Button, tab2Button); 
inputContainer.append(newItemInput, addButton);
document.body.appendChild(sidebarContainer);


// Initialize the list items with the stored items
parsedItems.forEach((itemText) => {
  const listItem = createListItem(itemText);
  listItem.addEventListener('click', (event) => handleListItemClick(event, itemText));
  listContainer.appendChild(listItem);
});


function handleListItemClick(event, text = "") {
  const form = document.querySelector('form');
  const input = form?.querySelector('textarea');
  let inputarea; // Declare the inputarea variable

  if (input == null) {
    const textarea = document.querySelector('textarea');
    const dataId = textarea.getAttribute('data-id');
    inputarea = document.querySelector(`[data-id="${dataId}"]`);
    if (text !== "") {
      inputarea.value = text;
    } else {
      inputarea.value = event.target.textContent;
    }
  } else {
    inputarea = input; // Assign the value of input to inputarea
    if (text !== "") {
      inputarea.value = text;
    } else {
      inputarea.value = event.target.textContent;
    }
  }
}


function createListItem(text) {
  const listItem = document.createElement('li');
  listItem.textContent = text;
  listItem.classList.add('list-item');
  return listItem;
}

function handleCloseButtonClick() {
  toggleSidebar();
}

function toggleSidebar() {
  sidebarContainer.classList.toggle('open');
  closeButton.textContent = sidebarContainer.classList.contains('open') ? 'Close' : 'Open';
}

function handleAddButtonClick() {
  const newItemText = newItemInput.value.trim();
  if (newItemText !== '') {
    const newItem = createListItem(newItemText);
    newItem.addEventListener('click', (event) => handleListItemClick(event, newItemText));
    listContainer.appendChild(newItem);
    newItemInput.value = '';
    // Save the updated list items to localStorage
    parsedItems.push(newItemText);
    localStorage.setItem('listItems', JSON.stringify(parsedItems));
  }
}

function tabLoadUserPrompts() {
  listContainer.innerHTML = ''; // Clear existing list items
  parsedItems.forEach((itemText) => {
    const listItem = createListItem(itemText);
    listItem.addEventListener('click', (event) => handleListItemClick(event, itemText));
    listContainer.appendChild(listItem);
  });
}

function tabFetchPrompts() {
  listContainer.innerHTML = ''; // Clear existing list items

  fetch('https://raw.githubusercontent.com/f/awesome-chatgpt-prompts/main/prompts.csv')
    .then((resp) => resp.text()) // retrieve CSV content as text
    .then((csvContent) => {
      const lines = csvContent.split('\n');
      const prompts = [];

      // Parse CSV content into prompts array
      for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line !== '') {
          const [act, prompt] = line.split('","').map((field) => field.replace(/"/g, ''));
          prompts.push({ act, prompt });
        }
      }

      // Perform actions on each prompt
      for (const prompt of prompts) {
        const string = "Act: " + prompt.act + "\n Prompt: " + prompt.prompt + " \n\n";
        const listItem = createListItem(string);
        listItem.addEventListener('click', (event) => handleListItemClick(event, string));
        listContainer.appendChild(listItem);
      }
    })
    .catch((ex) => {
      console.error(ex);
    });
}
