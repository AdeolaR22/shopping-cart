// select the shopping cart items
let cartItems = document.querySelectorAll(".cart-item");
console.log(cartItems);


// INCREASE PRODUCT QUANTITY

let increaseButtons = document.querySelectorAll(".increase-btn");

increaseButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        let cartItem = button.closest(".cart-item");

        let quantity = cartItem.querySelector(".quantity");

        let currentQuantity = Number(quantity.textContent);

        currentQuantity++;

        quantity.textContent = currentQuantity;

        calculateTotal();

    });

});


// DECREASE PRODUCT QUANTITY

let decreaseButtons = document.querySelectorAll(".decrease-btn");

decreaseButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        let cartItem = button.closest(".cart-item");

        let quantity = cartItem.querySelector(".quantity");

        let currentQuantity = Number(quantity.textContent);

        if (currentQuantity > 1) {
            currentQuantity--;
        }

        quantity.textContent = currentQuantity;

        calculateTotal();

    });

});


// DELETE PRODUCT

let deleteButtons = document.querySelectorAll(".delete-btn");

deleteButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        let cartItem = button.closest(".cart-item");

        cartItem.remove();

        calculateTotal();

    });

});


// LIKE PRODUCT

let likeButtons = document.querySelectorAll(".like-btn");

likeButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        button.classList.toggle("liked");

    });

});


// CALCULATE TOTAL PRICE

function calculateTotal() {

    let total = 0;

    let cartItems = document.querySelectorAll(".cart-item");

    cartItems.forEach(function(cartItem) {

        let price = Number(cartItem.dataset.price);

        let quantity = Number(cartItem.querySelector(".quantity").textContent);

        let itemTotal = price * quantity;

        total = total + itemTotal;

    });

    document.querySelector("#total-price").textContent = total;

}


// CALCULATE TOTAL WHEN PAGE OPENS

calculateTotal();
