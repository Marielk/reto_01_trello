var assert    = require("chai").assert;
var index = require("../src/js/index");

describe("testear funcion en index que crea una lista NUEVA", () => {

  it('debería ser una funcion', () => {
    assert.equal(typeof index.createList, 'function');
  });
  
});