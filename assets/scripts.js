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
    currentPrice=0 
    itemCount=0
    cart.clear();
    
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