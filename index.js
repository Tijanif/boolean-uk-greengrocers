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
      AddedTocart: false,
    },
    {
      id: '002-carrot',
      icon: String.raw`assets\icons\002-carrot.svg`,
      name: 'carrot',
      price: 0.45,
      AddedTocart: false,
    },
    {
      id: '003-apple',
      icon: String.raw`assets\icons\003-apple.svg`,
      name: 'apple',
      price: 0.45,
      AddedTocart: false,
    },
    {
      id: '004-apricot',
      icon: String.raw`assets\icons\004-apricot.svg`,
      name: 'apricot',
      price: 0.45,
      AddedTocart: false,
    },
    {
      id: '005-avocado',
      icon: String.raw`assets\icons\005-avocado.svg`,
      name: 'avocado',
      price: 0.45,
      AddedTocart: false,
    },
  ],
  showAddedTocart: false,
};

// console.log((state.groceries[0].name = 'apples'));
// console.log((state.showAddedTocart = true));
// console.log(state);

// RENDER GROCERIES AND CART ITEMS
function renderGroceries() {
  console.log('inside render groceries');
  const GroceryNotAddedToCart = state.groceries.filter(function (grocery) {
    return grocery.AddedTocart === false;
  });
  const GroceryAddedToCart = state.groceries.filter(function (grocery) {
    return grocery.AddedTocart === true;
  });

  groceryList.innerHTML = '';
  cartList.innerHTML = '';

  GroceryNotAddedToCart.forEach(renderGrocery);
  // GroceryAddedToCart.forEach(renderGroceryCart);
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

  groceryList.append(groceryEl);
  console.log(grocery);
}
console.log(groceryList);
renderGroceries();
