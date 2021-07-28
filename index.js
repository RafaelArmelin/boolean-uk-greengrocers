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
// 3.0 - 

let listEl = document.querySelector(".item-list.store--item-list");

console.log("inside the UL: ", listEl);

function renderListItems(fruitsAndVeggies){

  for(i = 0; i < fruitsAndVeggies.length; i++){

    let listItemEl = document.createElement("li");
    let divEl = document.createElement("div");
    divEl.className = (".store--item-icon");
    let imageEl = document.createElement("img");
    imageEl.src = "assets/icons/" + fruitsAndVeggies[i].id + ".svg";
    imageEl.setAttribute("alt", fruitsAndVeggies[i].name)
    let buttonEl = document.createElement("button");
    buttonEl.innerText = "Add to cart";

    divEl.append(imageEl);
    listItemEl.append(divEl);
    listItemEl.append(buttonEl);
    
    listEl.append(listItemEl);
    
    console.log(listItemEl);
  }
}
renderListItems(products);
