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
  const listContainer = document.createElement('ul');
  listContainer.style.position = 'fixed';
  listContainer.style.bottom = '80px';
  listContainer.style.right = '20px';
  listContainer.style.height = '200px';
  listContainer.style.overflow = 'scroll';

  const listItem1 = createListItem('convert this code into java - ');
  const listItem2 = createListItem('fix this code - ');
  const listItem3 = createListItem('convert this passage into points - ');
  const listItem4 = createListItem('fix the grammar in this text - ');

  listContainer.appendChild(listItem1);
  listContainer.appendChild(listItem2);
  listContainer.appendChild(listItem3);
  listContainer.appendChild(listItem4);

  listItem1.addEventListener('click', handleListItemClick);
  listItem2.addEventListener('click', handleListItemClick);
  listItem3.addEventListener('click', handleListItemClick);
  listItem4.addEventListener('click', handleListItemClick);

  document.body.appendChild(listContainer);

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

    listContainer.remove();
  }

  function createListItem(text) {
    const listItem = document.createElement('li');
    listItem.textContent = text;
    listItem.classList.add('list-item');
    return listItem;
  }

  document.body.addEventListener('click', handleDocumentClick);

  function handleDocumentClick(event) {
    if (!listContainer.contains(event.target) && event.target !== fab) {
      listContainer.remove();
    }
  }
}
