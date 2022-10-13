// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições! 

// Fique a vontade para modificar o código já escrito e criar suas próprias funções!

/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const saveCart = () => {
  const save = [];
  const array = document.querySelectorAll('li');
  Array.from(array).forEach((element) => {
  save.push(element.id);
 });
 saveCartItems(save);
};

/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */

 const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  const text = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  li.innerText = text;
  li.id = id;  
  li.onclick = () => {
    document.getElementById(id).remove();
    saveCart();
  };   
  return li;
};

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  if (element === 'button') {
    e.onclick = async (target) => {
      const cart = document.querySelector('.cart__items');
      const idItem = target.path[1].children[0].innerText;
      const data = await fetchItem(idItem);
      const { id, title, price } = data;
      cart.appendChild(createCartItemElement({ id, title, price }));
      saveCart();
    };  
  }
  
  return e;
};

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto. 
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */
const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  
  return section;
};

/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */
const getIdFromProductItem = (product) => product.querySelector('span.id').innerText;

const createPage = async () => {
  const items = document.querySelector('.items');
  const data = await fetchProducts('computador');
  const { results } = data;
  results.forEach((result) => {
    const { id, title, thumbnail } = result;
  items.appendChild(createProductItemElement({ id, title, thumbnail }));
  });
};

const loadCartItems = () => {
  const array = getSavedCartItems('cartItem'); 
  if (array) {
    array.forEach(async (item) => {
      const cart = document.querySelector('.cart__items');  
    const data = await fetchItem(item);
    const { id, title, price } = data;
    cart.appendChild(createCartItemElement({ id, title, price }));
    }); 
  }
};

window.onload = () => {
  createPage();
  loadCartItems();
 };
