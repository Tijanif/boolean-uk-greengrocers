/*
Description
In this exercise we explore a common scenario in eCommerce, adding and removing items from the cart, and calculating the total.

Deliverables
- A user can view a selection of items in the store
- From the store, a user can add an item to their cart
- From the cart, a user can view and adjust the number of items in their cart
    - If an item's quantity equals zero it is removed from the cart
- A user can view the current total in their cart

Instructions
- Use this template as a starting point => https://codesandbox.io/s/js-exercise-greengrocer-template-grqi6
- Create a state object
- Create action functions that update state
- Create render functions that read from state

Tips
- Start with the logic first, use console.log(state) to check your logic is working; when the logic is working as expected move onto styling
- Taking HTML semantics into consideration, use a button when an action is happening on the same page

Challenge
Create a json-server, and make your app persist the data 

Challenge 2
- Add filters to the store ie. filter by item type; when a user clicks a filter they will only see items of that type
- Add sorting to the store ie. sort by price or sort alphabetically; when a user clicks sort they will see a sorted list of items


This is how an item object should look like

{
      id: "001-beetroot", <- the item id matches the icon name in the assets/icons folder
      name: "beetroot",
      price: 0.35 <- You can come up with your own prices
    }

*/

// QUERY SELECTING THE MAIN SECTIONS
// const groceryUL = document.querySelector('.store--item-list');
// const cartEl = document.querySelector('#cart');
// const totalEl = document.querySelector('.total-section');
const storeListEl = document.querySelector('.store--item-list');
const cartListEl = document.querySelector('.cart--item-list');

const state = {
  store: [
    {
      id: '001-beetroot',
      name: 'beetroot',
      price: 0.35,
    },
    {
      id: '002-carrot',

      name: 'carrot',
      price: 0.45,
    },
    {
      id: '003-apple',

      name: 'apple',
      price: 0.45,
    },
    {
      id: '004-apricot',

      name: 'apricot',
      price: 0.45,
    },
    {
      id: '005-avocado',

      name: 'avocado',
      price: 0.45,
    },
    {
      id: '006-bananas',

      name: 'bananas',
      price: 0.45,
    },
    {
      id: '007-bell-pepper',

      name: 'bell-pepper',
      price: 0.45,
    },
    {
      id: '008-cherry',

      name: 'cherry',
      price: 0.45,
    },
    {
      id: '009-blueberry',

      name: 'blueberry',
      price: 0.45,
    },
    {
      id: '010-eggplant',
      name: 'eggplant',
      price: 0.45,
    },
  ],

  cart: [],
};

function getImagePath(item) {
  return `./assets/icons/${item.id}.svg`;
}
// CREATE STORE ITEMS
function createStoreItem(item) {
  const liEl = document.createElement('li');

  const iconDiv = document.createElement('div');
  iconDiv.setAttribute('class', 'store--item-icon');

  const imageEl = document.createElement('img');
  imageEl.setAttribute('src', getImagePath(item));
  imageEl.setAttribute('alt', item.name);

  iconDiv.append(imageEl);

  const addToCartButton = document.createElement('button');
  addToCartButton.innerText = 'Add to cart';

  addToCartButton.addEventListener('click', function () {
    console.log('inside of the onclick btn');
    cartListEl.innerHTML = '';
    addItemToCart(item);
    renderCartItems();
  });

  liEl.append(iconDiv, addToCartButton);

  return liEl;
}

// RENDER STORE ITEMS
function renderStoreItems() {
  for (const item of state.store) {
    const liEl = createStoreItem(item);
    storeListEl.append(liEl);
  }
}

//  CREATE CART ITEMS
function createCartItem(cartItem) {
  const storeItem = state.store.find(function (item) {
    return item.id === cartItem.id;
  });

  const liEl = document.createElement('li');
  liEl.setAttribute('class', 'cart-item');

  const cartImgEl = document.createElement('img');
  cartImgEl.setAttribute('class', 'cart--item-icon');
  cartImgEl.setAttribute('alt', storeItem.name);
  cartImgEl.setAttribute('src', getImagePath(cartItem));

  const cartPEl = document.createElement('p');
  cartPEl.innerText = storeItem.name;

  // remove btn
  const cartRemoveBtnEl = document.createElement('button');
  cartRemoveBtnEl.setAttribute('class', 'quantity-btn remove-btn center');

  cartRemoveBtnEl.innerText = '-';

  //  span
  const cartSpanEl = document.createElement('span');
  cartSpanEl.setAttribute('class', 'quantity-text center');

  cartSpanEl.innerText = cartItem.quantity;

  // add btn
  const cartAddBtnEl = document.createElement('button');
  cartAddBtnEl.setAttribute('class', 'quantity-btn  add-btn center');
  cartAddBtnEl.innerText = '+';

  liEl.append(cartImgEl, cartPEl, cartRemoveBtnEl, cartSpanEl, cartAddBtnEl);
  return liEl;
}

// RENDER CART ITEMS
function renderCartItems() {
  for (const item of state.cart) {
    const liEl = createCartItem(item);
    cartListEl.append(liEl);
  }
}

//  ADD ALL ITEMS TO CART
function addItemToCart(targetItem) {
  // IS THIS ITEM ALREADY IN THE CART
  // APPROACH 1
  // let itemIsInCart = false;
  // for (const item of state.cart) {
  //   if (item.id === targetItem.id) {
  //     itemIsInCart = true;
  //     item.quantity++;
  //   }
  // }

  // if (!itemIsInCart) {
  //   const cartItem = {
  //     id: targetItem.id,
  //     quantity: 1,
  //   };

  //   state.cart.push(cartItem);
  // }

  // APPROACH 2
  const foundItem = state.cart.find(function (cartItem) {
    return cartItem.id === targetItem.id;
  });

  if (foundItem === undefined) {
    const cartItem = {
      id: targetItem.id,
      quantity: 1,
    };

    state.cart.push(cartItem);
  } else {
    foundItem.quantity++;
  }
}
// RENDER ALL ITEMS
function renderAllItems() {
  storeListEl.innerHTML = '';
  cartListEl.innerHTML = '';
  renderStoreItems();
  renderCartItems();
}

renderStoreItems();
renderCartItems();
// renderAllItems();
