//tomando al elemento añadir lista
const addElement = document.getElementById('addList');
//guardar lugar donde se ingresa el nombre de la nueva lista
const addNameInput = document.getElementById('addName');
//guardar el boton para guardar el nombre de la nueva lista
const saveButton = document.getElementById('saveButton');
//guardar lugar donde se mostrara la nueva lista creada
const showNewList = document.getElementById('placeNewList');
//guardando el valor del input 
let listName; 
//dandole interaccion, ejecuta la funcion 
addElement.addEventListener('click', () => {
  addElement.classList.add('disappear');
  addElement.classList.remove('show');
  addNameInput.classList.add('show');
  addNameInput.classList.remove('disappear');   
});

saveButton.addEventListener('click', () => {
  listName = document.getElementById('newListName').value;
  addNameInput.classList.add('disappear');
  addNameInput.classList.remove('show');
  showNewList.classList.add('show');
  showNewList.classList.remove('disappear');
  window.createList(listName);
});
