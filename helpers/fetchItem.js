/* const fetch = require('node-fetch'); */

const requestAPI = async (idItem) => {
  const url = `https://api.mercadolibre.com/items/${idItem}`;  
  
  const request = await fetch(url);
  const json = await request.json();    
  const result = json;
  /* console.log(result); */
  return result; 
};

const fetchItem = async (params) => {
  if (params) {
    return requestAPI(params);
   }     
   throw new Error('You must provide an url');
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
