let products = [
    { name: "Laptop", price: 35000, category: "Electronics" },
    { name: "Headphones", price: 1500, category: "Assesories" },
    { name: "Mouse", price: 500, category: "Assesories" },
    { name: "Phone", price: 20000, category: "Electronics" },
    { name: "USB Cable", price: 150, category: "Assesories" },
    { name: "Smart Watch", price: 5000, category: "Electronics" }
];
products.sort(function (a, b) {
    return a.price - b.price;
});

product.forEach(function (product, index) {
    console.log(index + ": " + product.name + " - P" +
        product.price + " (" + product.category + ")");
});

let cart = [];

function addToCart(productName) {
    let found = false;
    for (let i = 0; i < product.length; i++) {
        if (products[i].name === productName) {
            cart.push(products[i]);
        
        console.log(productName + "added to card!");
        found = true;
        break;
        }
    }
    if (!found) {
        console.log("Product not found!");
    }
}

addToCart("Laptop");
addToCart("Mouse");
addToCart("Phone");

console.log("Current cart:", cart);

function removeLastItem() {
    if (cart.length > 0) {
        let removed = cart.pop();
        console.log(removed.name + "removed from cart");
    } else {
    console.log("Cart is empty!");
    }
}  

function removeFirstItem() {
    if (cart.length > 0) {
        let removed = cart.pop();
        console.log(removed.name + " removed from the cart");
    } else {
        console.log("Cart is empty!");
    }
}

function showCart() {
    console.log("=== CART (" = cart.length + " items) ===");
    cart.forEach(function(item, index) {
        console.log(index + ": " + item.name + " - P" + item.price);
    });
}

function getTotalPrice() {
    return cart.reduce(function(sum, item) {
        return sum + item.price;
    }, 0);
}

console.log("Total price: P" + getTotalPrice());
//Test sequence:

removeLastItem();
showCart();
console.log("Total price: P" + getTotalPrice());

function getElectronics() {
    return cart.filter(function(item) {
        return item.category === "Electronics";
    });
}

console.log("Electronics in cart:", getElectronics());

function applyDiscount(cartItems, discountPercent) {
    return cartItems.map(function(item) {
        return {
            name: item.name,
            originalPrice: item.price,
            discountedPrice: item.price * (1 - discountPercent / 100)
        };
    });
}

let discountedCart = applyDiscount(cart, 10);
console.log("Cart with 10% discount", discountedCart);

function  checkout() {
    let total = getTotalPrice();
    console.log("Original total: P" + total);

    if (total > 20000) {
        let discounted = applyDiscount(cart, 10);
        let discountedTotal = discounted.reduce(function(sum, item) 
        {
            return sum + item.discountedPrice;
        }, 0);
        console.log("Discount applied! New total: P" +
    discountedTotal.toFixed(2));
    } else {
        console.log("Total: P" + total);
    }
}

checkout();

function removeItemByName(productName) {
    for (let i = 0; i < cart.length; i++) {
        if (Cart[i].name === productName) {          
            cart.splice(i, 1);
            console.log(productName + " removed!");
            return;
        }
    }
    console.log("Item not found in cart!");    
}

//Test removal
addToCart("Headphones");
removeItemByName("Mouse");
showCart();

cart = []; // empty cart

addToCart("Laptop");
addToCart("Smart Watch");
addToCart("USB Cable");
addToCart("Headphones");

showCart();
checkout();

removeItemByName("USB Cable");
showCart;