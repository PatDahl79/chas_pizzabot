const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//Javscript code:
alert (`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian}, and ${pepperoni}.`);


let orderName;
let quantity;

while (true) {
  // Asking the user for their order
  orderName = prompt("Enter the name of the pizza you want to order today, or type 'exit' to quit.");

  if (orderName.toLowerCase() === 'exit') {
    break;
  }

  // Check if the pizza is on the menu
  if (!checkOrderName(orderName)) {
    alert("Sorry, we don't have that pizza on the menu. Please choose another pizza.");
    continue;
  }

  // Ask for the quantity
  quantity = prompt(`How many of ${orderName} do you want?`);

  const orderTotal = totalCost(quantity);
  const time = cookingTime(quantity);

  // Display order details
  alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizzas will take ${time} minutes.`);
}

function checkOrderName(orderName) {
  return orderName === vegetarian || orderName === hawaiian || orderName === pepperoni;
}

function totalCost(orderQuantity) {
  return pizzaPrice * parseInt(orderQuantity);
}

function cookingTime(orderQuantity) {
  if (orderQuantity >= 6) {
    return 20;
  } else if (orderQuantity >= 3) {
    return 15;
  } else {
    return 10;
  }
}










