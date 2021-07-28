/*

This is how an item object should look like

{
  id: "001-beetroot", // <- the item id matches the icon name in the assets/icons folder
  name: "beetroot",
  price: 0.35 // <- You can come up with your own prices
}

*/

const products = [
  {
      id: "001-beetroot",
      name: "beetroot",
      price: 0.35
  },
  {
      id: "002-carrot",
      name: "carrot",
      price: 0.25
  },
  {
      id: "003-apple",
      name: "apple",
      price: 0.50
  },
  {
      id: "004-apricot",
      name: "apricot",
      price: 0.60
  },
  {
      id: "005-avocado",
      name: "avocado",
      price: 1.50
  },
  {
      id: "006-bananas",
      name: "bananas",
      price: 1.35
  },
  {
      id: "007-bell-pepper",
      name: "bell-pepper",
      price: 0.72
  },
  {
      id: "008-berry",
      name: "berry",
      price: 0.99
  },
  {
      id: "009-blueberry",
      name: "blueberry",
      price: 0.98
  },
  {
      id: "010-eggplant",
      name: "eggplant",
      price: 1.29
  }
];




// 1.0 - create an array of objects in a data file, use the assets as reference for the objects;
// 2.0 - create the bridge for the li's: header --> ul
// 2.1 - render an li of all the elements of the page (products), (use for loop)
//     - use all the attributes they have (height, width, etc)
// 2.2 - add buttons add to cart (inner.text) to the li
// 2.3 - append the li to the ul
// 2.4 - append the ul to the header
 

let listEl = document.querySelector(".item-list.store--item-list"); //called both classes, why?
let

console.log("inside the UL: ", listEl);

function renderListItems(fruitsAndVeggies){

  for(i = 0; i < fruitsAndVeggies.length; i++){

    let listItemEl = document.createElement("li");

    let divEl = document.createElement("div");
    divEl.className = (".store--item-icon");

    let imageEl = document.createElement("img");

    // imageEl.src = "assets/icons/" + fruitsAndVeggies[i].id + ".svg"; --> will this concat have any issue in the future?
    imageEl.src = (`assets/icons/${fruitsAndVeggies[i].id}.svg`);  
    imageEl.setAttribute("alt", fruitsAndVeggies[i].name);
    
  
    let buttonEl = document.createElement("button");
    buttonEl.innerText = "Add to cart";

    divEl.append(imageEl);
    listItemEl.append(divEl);
    listEl.append(listItemEl);
    listItemEl.append(buttonEl);
    
    console.log(listItemEl);
  }
}
renderListItems(products);

// 3.0 - create the brigde for the cart item --> main section
// 3.1 - create renderCartItems function
//     - use for loop?

// function renderCartItems(){
  
// }



// ACTION FUCNTIONS
// addToCart()
// - Does the item exist in the cart?
// - If the item doesn't exist in the cart add it to cart with a quantity of 1
// - If the item does exist in the cart then update the quantity by + 1

// input: an object that represents a storeItem, an array for the cart
// output: ??

// const storeItems - array
// const cartItems - array


const cartItems = [];


function addToCart(storeItem , cartItems) {
  // console.log("Inside addToCart: ", storeItem, cartItems.length);

  // ONE JOB: Check if storeItem exists in cartItems
  // If it finds it... extract it!
 for (let i = 0; i < cartItems.length; i++){
const cartItem = cartItems[i];
const cartItemId = cartItem.item.id;
const storeItemId = storeItem.id;


  // ONE JOB: If storeItem exists update the quantity

   if(cartItemId === storeItemId){
    cartItem.quantity += 1;
  }
  
  const newCartItem = {
    item: storeItem,
    quantity: 1
  };

  // Else add storeItem to the cart
  cartItems.push(newCartItem);

  // }
    return cartItems;
}

addToCart(storeItems[0], cartItems);
addToCart(storeItems[0], cartItems);
addToCart(storeItems[1], cartItems);
addToCart(storeItems[1], cartItems);
