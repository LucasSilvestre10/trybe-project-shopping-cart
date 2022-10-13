const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Teste se, ao executar getSavedCartItems com um cartItem como argumento, o método localStorage.setItem é chamado', () => {
    getSavedCartItems('cartItem');
    expect(localStorage.setItem).toHaveBeenCalled();
  })  
});

