const saveCartItems = (save) => localStorage.setItem('cartItem', JSON.stringify(save)); 

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
