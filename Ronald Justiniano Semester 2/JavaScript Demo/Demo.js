//console.log("Welcome, to the JavaScript World!");

//Change Text Content
// document.getElementById("btnText").addEventListener("click", function() {
//     document.getElementById("demo").textContent = "Hello, World!";
// });

//Change Color
// document.getElementById("btnColor").addEventListener("click", function() {
//     document.getElementById("myDiv");
//     myDiv.style.color = "blue";
// });
//Show and Hide the div
// document.getElementById("btnHide").addEventListener("click", function() {
//     document.getElementById("myDiv").style.display = "none";
// });
// document.getElementById("btnShow").addEventListener("click", function() {
//     document.getElementById("myDiv").style.display = "block";
// });
//Change Image
// document.getElementById("btnImage").addEventListener("click", function() {
//     const img = document.getElementById("myImage");
//     img.src = img.src.includes("./Images/images1.png") ?
//          "./Images/Images1.png" : "./Images/images2.png";
// });
//Show Alert
// document.getElementById("btnAlert").addEventListener("click", function() {
//     alert("Welcome, this is a website");
// });
// console.log("JavaScript is working!");
// //Assignment operators
// let x = 10;
// console.log("Assignment: x = 10, x =", x);
// let $$$ = 103;
// console.log($$$/12);
// let y = 51;
// let myName = "John";
// console.log("My name is " + myName + " and I am " + y + " years old.");
// let h = 3, j = 4, i = 9, o = "myNigga";
// console.log(h, j, i, o);
// //Event Listeners
// const btn = document.getElementById('btn');
// btn,onclick = function() {
//     console.log('button clicked!');
//     console.log('Galing naman!');
// }
// const btn2 = document.getElementById('btn2');
// btn2,addEventListener('click', () => {
//     console.log('Button clicked!');
// });
// const input = document.getElementById('nameInput');
// const greetings = document.getElementById('greetings');

// input.addEventListener('input', () => {
//     greetings.textContent = 'Hello, ' + input.value + '!';
// });
// document.addEventListener('keydown', (event) => {
//     console.log('Key pressed: ' + event.key);
// });
//Control flow in JavaScript
//Conditional Statement /if/else/ 
//Switch Statement
//checking if the user isd old enough to enter your site
// const userAge = 19;
// if (userAge >= 18) {
//     console.log("Welcome to my website")
//     //code block to be executed if condityion is true
// }else {
//     console.log("Sorry, You must be atleast 18 years old to enter this site")
// }
// //grading system
// const score = 85;
// if (score >= 98) {
//     console.log("With Highest Honors")
// }else if (score >= 95) {
//     console.log("With High Honors")
// }else if (score >= 90) {
//     console.log("With Honors")
// }else if (score <= 75) {
//     console.log("You Failed Nigga")
// }else {
//     console.log("Congratulation, You did your best")
// }
// //Switch statement Examples
// switch(expression) {
//     case Value1:
//     //code to be executed if expression === value1
//     break;
// }
// //Example day of the week
// const day = 3;
// switch(day) {
//     case 1: 
//     console.log("Monday")
//     break;
//     case 2: 
//     console.log("Tuesday")
//     break;
//     case 3: 
//     console.log("Wednesday")
//     break;
//     case 4: 
//     console.log("Thursday")
//     break;
//     case 5: 
//     console.log("Friday")
//     break;
//     case 6: 
//     console.log("Saturday")
//     break;
//     case 7: 
//     console.log("Sunday")
//     break;
// default:
//     console.log("Invalid day number")    
// }
// You can also use string on switch and case
// Example
// const month = 'c';
// switch(month) {
//     case 'a':
//     console.log("January")
//     break;
//     case 'b':
//     console.log("Febraury")
//     break;
//     case 'c':
//     console.log("March")
//     break;
//     case 'd':
//     console.log("April")
//     break;
//     case 'e':
//     console.log("May")
//     break;
//     case 'f':
//     console.log("June")
//     break;
//     case 'g':
//     console.log("July")
//     break;
//     case 'h':
//     console.log("August")
//     break;
//     case 'i':
//     console.log("September")
//     break;
//     case 'j':
//     console.log("October")
//     break;
//     case 'k':
//     console.log("November")
//     break;
//     case 'l':
//     console.log("December")
//     break;
// }

//Repetition: Loops in JavaScript
//If loop is not attended. It can make your pc crash.
//#1 for loop
// for(initialization; condition; increment/decrement){

// }
// ++ = up, -- =down i think.
//console.log("For Loop:")
// for(let i = 1; i >= 1; i++) {
//     console.log("Welcome to JavaScript")
// }
//#2 While Loop
// let j = 4;
// console.log("While Loop:")
// while(j < 10) {
//     console.log("While Loop")
//     j++;
// }
//#3 Do-While Loop
// let k = 0;
// console.log("Do-While Loop:")
// do {
//     consolo.log("Welcome to JavaScript")
//     k++;
// } while(k < 5);
// //#4 Nested For-loop
// for(let l = 0; l < 5; l++) {
//     for(let m = 0; m < 5; m++) {
//         console.log("Nested For-Loop P1")
//     }
//     console.log(" ")      
// }
//#5 Nested For-loop Part II
// for(let l = 0; l < 5; l++) {
//     for(let m = 0; m < 5; m++) {
//         for(let n = 0; n < 5; n++) {
//             console.log("Nested For-Loop P2")
//         }
//         console.log(" ")      
//     }
//     console.log(" ")
// }
//Array
//1d 2d 3d
//data structure might need later in life ::::
// const car = ["Toyota", "BMW", "Tesla"];
// if you want it to be more complicated
// let car1 = "Toyota";
// let car2 = "BMW";
// let car3 = "Tesla";
// another type of array i think.
// const cars = [];
// cars = [1];
// cars = [2];
// cars = [3];
// JavaScript Array
// You can use between let or const but its normalized to use const
// const carse = ["Toyota", "Honda", "Ferari"];
// carse = [0] = "Honda"
// carse = [1] = "Toyota";
// carse = [2] = "Ferari";

// Adding and removing element
// carse.push("Ford");
// carse.pop("Toyota");
// Getting the number of your array
// console.log(carse.length);

// Looping through an array
// const fruits = ["Apple", "Banana", "Orange", "Grapes"]

// for (i = 1; i <= fruits.length -1; i++) {
//     console.log("Fruit #", [i], " ",fruits[i]);
// }

// //Mixing element types
// const mixedArr = [12, "Hello" , true, 95.54,"World"]
// console.log(mixedArr.length);

// //for loop vs for each
// let scores = [90, 85, 80, 75, 70]
// //using for loop
// for(let j = 0; j < scores.length; j++) {
//     console.log("Index" , j, ":" , scores[j]);
// }7

// //using for loop value only method
// for(let score of scores) {
//     console.log("Score :" , scores);
//     let sum = 0;
//     sum += score; //sum = sum + score
//     let avarage = sum / scores.length; //getting average
//     console.log("Sum: " , sum);
//     console.log("Avarage: " , avarage);
// }

// //using forEach method
// scores.forEach(function(score, index) {
//     console.log("index" , index, ":" , score);
// });

// //searching arrays
// const colors = ["Red", "Blue", "Green", "Yellow"]

// console.log(colors.indexOf("Green"));
// console.log(colors.includes("Black"));

// //using splice
// //remove 1 element at index 1 and add "Black" at the index 1
// colors.splice(1, 1, "Black");
// console.log(colors);
// console.log(colors.sort());

// //using map, filter, and reduce
// const ages = [18, 19, 20 ,21, 17 ,16];
// console.log("Original Ages: ", ages);
// //map transform each element
// let agesNextYear = ages.map(function(age){
//     return age + 1;
// });
// console.log(agesNextYear);
// //filter element based on condition
// let adultAges = ages.filter(function(age){
//     return ages >= 18;
// });
// console.log(adultAges);
// //reduce to get thr sum of all ages
// let ageTotal = ages.reduce(function(total, age){
//     return total = age;
// });
// console.log(ageTotal);

// //using sort
// console.log(ages.sort());
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

products.forEach(function(product, index) {
    console.log(index + ": " + product.name + " - P" +
        product.price + " (" + product.category + ")");
});

let cart = [];

function addToCart(productName) {
    let found = false;
    for (let i = 0; i < products.length; i++) {
        if (products[i].name === productName) {
            cart.push(products[i]);
        
        console.log(productName + " added to card!");
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
    console.log("=== CART (" + cart.length + " items) ===");
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
        if (cart[i].name === productName) {          
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