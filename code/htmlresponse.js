// Js response 
document.getElementById('pizzaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const orderName = document.getElementById('pizzaType').value;
    const orderQuantity = document.getElementById('quantity').value;
    const responseElement = document.getElementById('response');

    function checkOrderName(orderName) {
        return orderName === "Vegetarian Pizza" || orderName === "Hawaiian Pizza" || orderName === "Pepperoni Pizza";
    }

    function totalCost(orderQuantity) {
        return 80 * parseInt(orderQuantity);
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

    if (!checkOrderName(orderName)) {
        responseElement.innerHTML = "<p>Sorry, we don't have that pizza on the menu. Please choose another pizza.</p>";
    } else {
        const orderTotal = totalCost(orderQuantity);
        const time = cookingTime(orderQuantity);
        responseElement.innerHTML = `<p>Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizzas will take ${time} minutes.</p>`;
    }
});

document.getElementById('pizzaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const orderName = document.getElementById('pizzaType').value;
    const orderQuantity = document.getElementById('quantity').value;
    const responseElement = document.getElementById('response');

    function checkOrderName(orderName) {
        return orderName === "Vegetarian Pizza" || orderName === "Hawaiian Pizza" || orderName === "Pepperoni Pizza";
    }

    function totalCost(orderQuantity) {
        return 80 * parseInt(orderQuantity);
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

    if (!checkOrderName(orderName)) {
        responseElement.innerHTML = "<p>Sorry, we don't have that pizza on the menu. Please choose another pizza.</p>";
    } else {
        const orderTotal = totalCost(orderQuantity);
        const time = cookingTime(orderQuantity);
        responseElement.innerHTML = `<p>Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizzas will take ${time} minutes.</p>`;
    }
});




















