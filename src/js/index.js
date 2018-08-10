let newName;  
let counter = 0;
let newCardOptionsId;
let newCardId;
let addCardButtonId;
let listSaved = [];
let currentButton = [];
var found; 
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
  //darle id a la tarjeta
  newList.id = "newList" + counter;
  newCardOptionsId = "newOp" + counter;
  newCardId = "newCard" + counter;
  addCardButtonId = "addCardButton" + counter; 
  saveCurrentButton();
  newList.innerHTML = `
  <div id="divListName">${listName}</div>
  <button id="masButton">...</button>
  <div id=${newCardId}></div>
  <div id=${newCardOptionsId}></div>
  <button id=${addCardButtonId} class="addCardButton" onclick="window.showAddCard(this.id)">+ Añada una tarjeta</button>`;
  listSaved.push(
    {
    name: listName,
    id: newList.id,
    cardId: newCardId,
    cardOptions: newCardOptionsId,
    addCardButtonId: addCardButtonId,
    }
  ); 
};

const saveCurrentButton = () =>{
  currentButton.push(addCardButtonId);
};

const findCurrentButton = () =>{
  var foundButton;
  var buttons = document.getElementsByTagName("button");
  var buttonsCount = buttons.length;
  for (var i = 0; i <= buttonsCount; i += 1) {
    buttons[i].onclick = function(e) {
        foundButton = this.id;
    };
  }
  var found = listSaved.find(function(element) {
      if (element.addCardButtonId === foundButton) { return element;  }
    });

  // // Obtenemos la referencia al elemento con el nombre 
  // var button = document.getElementById(`${addCardButtonId}`);
  // // Obten la referencia al elemento padre
  // var parentDiv = button.parentNode;
  // console.log(parentDiv.id);
  // var found; 
  // for(let a=0; a < listSaved.length; a++ ){
  //   if (listSaved[a].id === parentDiv.id){
  //   found = listSaved[a];} 
  // }
  window.showAddCard(found);
};

window.showAddCard = (buttonID) =>{
  
    for(let a=0; a < listSaved.length; a++ ){
    if (listSaved[a].addCardButtonId === buttonID){
      found = listSaved[a]; } 
  }
  // var found = listSaved.find(function(element) {
  //   currentButton.find(function(id){
  //     if (element.addCardButtonId === id) { break; }
  //   });
  //   return element; 
  // });
  document.getElementById(`${found.cardOptions}`).innerHTML = `
  <input id="newCardNameInput"class="txt input_text_post" placeholder="Introduzca un titulo para esta tarjeta...">
  <button class="btn btn-success" onclick="saveCard()" >Añadir tarjeta</button>
  <button class="closeButton"><i class="fas fa-times"></i></button>
  `;
  document.getElementById(`${found.addCardButtonId}`).style.display= "none";
};

const saveCard = () =>{
  var thisCard; 
  for(let a=0; a < listSaved.length; a++ ){
  if (listSaved[a].id === found.id){
    thisCard = listSaved[a]; } 
  }
  newName = document.getElementById('newCardNameInput').value;
  document.getElementById(`${thisCard.cardId}`).innerHTML +=  `<div class="newCard">${newName}</div>`;
  document.getElementById(`${thisCard.cardOptions}`).innerHTML = "";
  document.getElementById(`${thisCard.addCardButtonId}`).style.display= "block";
};