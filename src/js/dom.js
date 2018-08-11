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
  addElement.style.display = "none"; 
  addNameInput.style.display = "inline-grid";
});

saveButton.addEventListener('click', () => {
  listName = document.getElementById('newListName').value;
  showNewList.classList.add('show');
  showNewList.classList.remove('disappear');
  addElement.style.display = "inline-grid";
  addNameInput.style.display = "none";
  window.createList();
});
