let newName;  
window.createList = () => {
  const newList = document.createElement('div'); //crear elemento div 
  showNewList.appendChild(newList);
  newList.innerHTML = `
  <div id="divListName">${listName}</div>
  <button id="masButton">...</button>
  <div id="newCardOptions"></div>
  <div id="newCards"></div>
  <button id="addCardButton" onclick="showAddCard()">+ Añada una tarjeta</button>`;
  
};


const showAddCard = () =>{
  newCardOptions.innerHTML = `
  <textarea id="newCardNameInput"class="txt col-12 input_text_post" placeholder="Introduzca un titulo para esta tarjeta..."></textarea>
  <button class="btn btn-success" onclick="saveCard()" >Añadir tarjeta</button>
  <button class="closeButton"><i class="fas fa-times"></i></button>
  `;
  document.getElementById('addCardButton').style.display= "none";
};

const saveCard = () =>{
  newName = document.getElementById('newCardNameInput').value;
  newCards.innerHTML += `<div class="newCard">${newName}</div>`;
  newCardOptions.innerHTML = "";
  document.getElementById('addCardButton').style.display= "block";
};