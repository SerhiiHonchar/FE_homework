// перше завдання

let shoppingList = [
  {
    name: 'lemon',
    amount: 2,
    bought: true,
    priceItem: 10,
    totalPrice: 20,
  },

  {
    name: 'apple',
    amount: 6,
    bought: false,
    priceItem: 5,
    totalPrice: 30,
  },

  {
    name: 'cheese',
    amount: 3,
    bought: true,
    priceItem: 50,
    totalPrice: 150,
  },

  {
    name: 'spinach',
    amount: 4,
    bought: false,
    priceItem: 15,
    totalPrice: 60,
  },

  {
    name: 'avocado',
    amount: 1,
    bought: true,
    priceItem: 30,
    totalPrice: 30,
  },
];

shoppingList.sort(function(x, y) {
  return (x === y)? 0 : x.bought? 1 : -1;
});



function buyItems (items) {
  for (let i = 0; i < shoppingList.length; ++i) {
      if (items == shoppingList[i].name) {
          shoppingList[i].bought = true;
      }
  }

  console.log(buyItems(items));
}


function needToBuyItems(items) {
  let list = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i].bought == false) {
      list.push(items[i]);
    }
    
  }
  console.log(list);
}

console.log(shoppingList);


