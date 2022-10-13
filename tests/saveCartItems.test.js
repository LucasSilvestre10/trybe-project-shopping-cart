const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Teste se, ao executar saveCartItems com um cartItem como argumento, o método localStorage.setItem é chamado', () => {
    saveCartItems('MLB2757256961');
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  })
  it('Teste se, ao executar saveCartItems com um cartItem como argumento, o método localStorage.setItem é chamado com dois parâmetros, sendo o primeiro a chave MLB2187832413 e o segundo sendo o valor passado como argumento para saveCartItems', () => {
    const value = '\"MLB2757256961\"'
    saveCartItems('MLB2757256961');    
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItem', value);
  })
});
