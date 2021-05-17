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
const groceryList = document.querySelector('.store--item-list');
const cartList = document.querySelector('.cart--item-list');

const state = {
  groceries: [
    {
      id: '001-beetroot',
      icon: String.raw`assets\icons\001-beetroot.svg`,
      name: 'beetroot',
      price: 0.35,
    },
    {
      id: '002-carrot',
      icon: String.raw`assets\icons\002-carrot.svg`,
      name: 'carrot',
      price: 0.45,
    },
    {
      id: '003-apple',
      icon: String.raw`assets\icons\003-apple.svg`,
      name: 'apple',
      price: 0.45,
    },
    {
      id: '004-apricot',
      icon: String.raw`assets\icons\004-apricot.svg`,
      name: 'apricot',
      price: 0.45,
    },
    {
      id: '005-avocado',
      icon: String.raw`assets\icons\005-avocado.svg`,
      name: 'avocado',
      price: 0.45,
    },
    {
      id: '006-bananas',
      icon: String.raw`assets\icons\006-bananas.svg`,
      name: 'bananas',
      price: 0.45,
    },
    {
      id: '007-bell-pepper',
      icon: String.raw`assets\icons\007-bell-pepper.svg`,
      name: 'bell-pepper',
      price: 0.45,
    },
    {
      id: '008-cherry',
      icon: String.raw`assets\icons\008-cherry.svg`,
      name: 'cherry',
      price: 0.45,
    },
    {
      id: '009-blueberry',
      icon: String.raw`assets\icons\009-blueberry.svg`,
      name: 'blueberry',
      price: 0.45,
    },
    {
      id: '010-eggplant',
      icon: String.raw`assets\icons\010-eggplant.svg`,
      name: 'eggplant',
      price: 0.45,
    },
  ],

  cart: [],
};

// RENDER GROCERIES AND CART ITEMS
function renderGroceries() {
  groceryList.innerHTML = '';
  cartList.innerHTML = '';

  state.groceries.forEach(renderGrocery);
  state.cart.forEach(renderCart);
}

//  RENDER STORE ITEMS
function renderGrocery(grocery) {
  const groceryEl = document.createElement('li');

  const groceryItemEl = document.createElement('div');
  groceryItemEl.setAttribute('class', 'store--item-icon');
  const groceryItemImgEl = document.createElement('img');
  groceryItemImgEl.setAttribute('alt', grocery.name);
  groceryItemImgEl.setAttribute('id', grocery.id);
  groceryItemImgEl.src = grocery.icon;

  const groceryAddToCartBtn = document.createElement('button');
  groceryAddToCartBtn.innerText = 'Add to cart';

  groceryItemEl.append(groceryItemImgEl);
  groceryEl.append(groceryItemEl, groceryAddToCartBtn);

  groceryEl.addEventListener('click', function () {
    let amount = 1;
    state.cart.amount = amount;
    amount + 1;
    state.cart.push(grocery);

    renderGroceries();
  });

  groceryList.append(groceryEl);
}

// RENDER CART ITEMS
function renderCart(grocery) {
  const cartItemEl = document.createElement('li');
  cartItemEl.setAttribute('class', 'cart-item');

  const cartImgEl = document.createElement('img');
  cartImgEl.setAttribute('class', 'cart--item-icon');
  cartImgEl.setAttribute('alt', grocery.name);
  cartImgEl.src = grocery.icon;

  const cartPEl = document.createElement('p');
  cartPEl.innerText = grocery.name;

  // remove btn
  const cartRemoveBtnEl = document.createElement('button');
  cartRemoveBtnEl.setAttribute('class', 'quantity-btn ');
  cartRemoveBtnEl.classList.add('remove-btn');
  cartRemoveBtnEl.classList.add('center');
  cartRemoveBtnEl.innerText = '-';

  //  span
  const cartSpanEl = document.createElement('span');
  cartSpanEl.setAttribute('class', 'quantity-text');
  cartSpanEl.classList.add('center');
  cartSpanEl.innerText = state.cart.amount;

  // add btn
  const cartAddBtnEl = document.createElement('button');
  cartAddBtnEl.setAttribute('class', 'quantity-btn ');
  cartAddBtnEl.classList.add('add-btn');
  cartAddBtnEl.classList.add('center');
  cartAddBtnEl.innerText = '+';

  cartItemEl.append(
    cartImgEl,
    cartPEl,
    cartRemoveBtnEl,
    cartSpanEl,
    cartAddBtnEl
  );

  cartRemoveBtnEl.addEventListener('click', function () {
    cartSpanEl.innerHTML = '';
    cartSpanEl.innerText = state.cart.amount -= 1;
    if (cartSpanEl.innerText === 0) {
      cartItemEl.remove();
      console.log(cartList);
    }
  });

  cartAddBtnEl.addEventListener('click', function () {
    cartSpanEl.innerHTML = '';
    cartSpanEl.innerText = state.cart.amount += 1;
  });
  cartList.append(cartItemEl);
}

renderGroceries();
