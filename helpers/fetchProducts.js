/* const fetch = require('node-fetch'); */

const requestApi = async (param) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${param}`;  
  
    const request = await fetch(url);
    const json = await request.json();    
    const result = json;
    return result;    
};

const fetchProducts = async (param) => {
  if (param) {
   return requestApi(param);
  }     
  throw new Error('You must provide an url');  
};

/* console.log(fetchProducts('computador')); */

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
