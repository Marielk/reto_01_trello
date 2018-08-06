  window.createList = (listName) => {
    showNewList.innerHTML = `
    <div id="divListName">${listName}</div>
    <button id="masButton">...</button>
    <button id="addCardButton" onclick="showAddCard()">+ Añada una tarjeta</button>`;
  };
let newName;  
const showAddCard = () =>{
  showNewList.innerHTML = `
  <div id="divListName">${listName}</div>
  <button id="masButton">...</button>
  <textarea id="newCardNameInput"class="txt col-12 input_text_post" placeholder="Introduzca un titulo para esta tarjeta..."></textarea>
  <button class="btn btn-success onclick="saveCard()" >Añadir tarjeta</button>
  <button class="closeButton"><i class="fas fa-times"></i></button>
  `;
  newName = document.getElementById('newCardNameInput').value;
};

const saveCard = () =>{
  console.log('ok');
  showNewList.innerHTML = `
  <div id="divListName">${listName}</div>
  <button id="masButton">...</button>
  <div>${newName}</div>
  <textarea id="newCardNameInput"class="txt col-12 input_text_post" placeholder="Introduzca un titulo para esta tarjeta..."></textarea>
  <button class="btn btn-success onclick="saveCard()" >Añadir tarjeta</button>
  <button class="closeButton"><i class="fas fa-times"></i></button>
  `;
};