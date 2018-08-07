let newName;  
window.createList = () => {
  document.getElementById('newListName').value = ""; //limpiar el textarea
  //crear elemento div 
  const newList = document.createElement('div');
  newList.classList.add("list");//dar estilo
  showNewList.appendChild(newList); //parentesco
  // Obtenemos la referencia al elemento, antes de insertarlo 
  var sp2 = document.getElementById("addName");
  // Obten la referencia al elemento padre
  var parentDiv = sp2.parentNode;
  // Insertamos el nuevo elemento en el DOM antes de sp2
  parentDiv.insertBefore(newList, sp2);
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