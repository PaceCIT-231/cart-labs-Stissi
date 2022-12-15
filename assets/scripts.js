const cart = {
    currentPrice: 0,
    items: [],
    addItem: function(cookie, price) {
       this.items.push(cookie); // add a cookie (string) to the items array

       this.currentPrice = this.currentPrice + price; //add the price (number) to the currentPrice properties

    },
    clear: function() {

        currentPrice = 0;
        this.items.length = 0;
        //reset the currentPrice and items properties
        
    },
}

function addToCart(cookie) {
    /* 
        PRICES
        peanut butter: 20
        sandies: 30
        party press: 35
        chocolate chip: 25
    */
   
   console.log('The user is adding this type of cookie to their cart: ' , cookie) 

   //document.getElementByID("cartItems").innerText = itemCount;
   //console.log(itemCount++); //adds 1 to the itemCount variable

  //this.items.length;

   if(cookie == 'peanut butter')
       cart.addItem(cookie, 20)
   if(cookie == 'sandies')
       cart.addItem(cookie, 30)
   if(cookie == 'party press')
       cart.addItem(cookie, 35)
   if(cookie == 'chocolate chip')
   cart.addItem(cookie, 25)

   document.getElementById("cartItems").innerText = cart.items.length;

   //console.log(currentPrice);

   //cart.currentPrice;
   document.querySelector("span").innerHTML = "$" + cart.currentPrice;

   //add the correct price to the currentPrice variable
   console.log(cart)
}

function checkout() {
    console.log('User is checking out.')
    //Let your customer know how many items they are purchasing and the price
    alert("Current Price="+currentPrice+" itemCount="+itemCount)
    prompt("Enter you Address and Name ")
   
    
    document.querySelector("span").innerHTML = "$" + cart.price;
   document.getElementById("cartItems").innerText = cart.items.length;

}

//dark mode lab 9
function darkMode() {
    console.log("yur ")
    document.querySelector("body").classList.toggle("darkMode");
    
    if (document.querySelector("body").classList.contains("darkMode")) {
      document.querySelector("button").innerHTML = "Engage Light Mode"
     
    
    } else {
      document.querySelector("button").innerHTML = "Engage Dark Mode"
    }
}
  
  // define the clearCart function
  function clearCart() {
    // reset the price and itemCount of the cart object
    cart.price = 0;
    cart.itemCount = 0;
  
    // output the reset price and itemCount
    console.log(`The cart has been cleared. The new price is ${cart.price} and the new item count is ${cart.itemCount}.`);
  }
  
  // call the clearCart function
  clearCart();
  
  // get the "Clear Cart" button from the DOM
let clearCartButton = document.getElementById('clear-cart-button');

// register the clearCart function as an event handler for the "Clear Cart" button
clearCartButton.addEventListener('click', clearCart);
  
// add a getSummary method to the cart object
getSummary: function(){
    return `The cart has a total price of ${this.currentPrice} and a total item count of ${this.itemCount}.`;
}
;

// call the getSummary method
console.log(cart.getSummary());
  
// get the element with an id of "summary-body" from the DOM
let summaryBody = document.getElementById('summary-body');

// set the innerHTML of the "summary-body" element using the cart's getSummary method
summaryBody.innerHTML = cart.getSummary();

// get the element with an id of "summary" from the DOM
let summary = document.getElementById('summary');

// set the style.display property of the "summary" element to "block"
summary.style.display = "block";