let newName;  
let counter = 0;
let newCardOptionsId;
let newCardId;
let addCardButtonId;
window.createList = () => {
  document.getElementById('newListName').value = ""; //limpiar el textarea
  //crear elemento div 
  const newList = document.createElement('div');
  newList.classList.add("list");//dar estilo
  showNewList.appendChild(newList); //parentesco
  // Obtenemos la referencia al elemento, antes de insertarlo 
  var inputBox = document.getElementById("addList");
  // Obten la referencia al elemento padre
  var parentDiv = inputBox.parentNode;
  // Insertamos el nuevo elemento en el DOM antes de inputBox
  parentDiv.insertBefore(newList, inputBox);
  //crear id dinamico 
  counter = counter +1;
  newCardOptionsId = "newOp" + counter;
  newCardId = "newCard" + counter;
  addCardButtonId = "addCardButton" + counter; 
  newList.innerHTML = `
  <div id="divListName">${listName}</div>
  <button id="masButton">...</button>
  <div id=${newCardOptionsId}></div>
  <div id=${newCardId}></div>
  <button id=${addCardButtonId} class="addCardButton">+ Añada una tarjeta</button>`;
  document.getElementById(`${addCardButtonId}`).addEventListener('click', () => {showAddCard();});
};


const showAddCard = () =>{
  document.getElementById(`${newCardOptionsId}`).innerHTML = `
  <input id="newCardNameInput"class="txt input_text_post" placeholder="Introduzca un titulo para esta tarjeta...">
  <button class="btn btn-success" onclick="saveCard()" >Añadir tarjeta</button>
  <button class="closeButton"><i class="fas fa-times"></i></button>
  `;
  document.getElementById(`${addCardButtonId}`).style.display= "none";
};

const saveCard = () =>{
  newName = document.getElementById('newCardNameInput').value;
  document.getElementById(`${newCardId}`).innerHTML +=  `<div class="newCard">${newName}</div>`;
  document.getElementById(`${newCardOptionsId}`).innerHTML = "";
  document.getElementById(`${addCardButtonId}`).style.display= "block";
};