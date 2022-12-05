let currentPrice=0, itemCount=0

function addToCart(cookie) {
    /* 
        PRICES
        peanut butter: 20
        sandies: 30
        party press: 35
        chocolate chip: 25
    */
   
   console.log('The user is adding this type of cookie to their cart: ' , cookie) 

   console.log(itemCount++) //add 1 to the itemCount variable

   if(cookie == 'peanut butter')
       currentPrice = currentPrice + 20;
   if(cookie == 'sandies')
       currentPrice = currentPrice + 30;
   if(cookie == 'party press')
       currentPrice = currentPrice + 35;
   if(cookie == 'chocolate chip')
       currentPrice = currentPrice + 25;
   console.log(currentPrice);
   //add the correct price to the currentPrice variable
   document.querySelector("#cartItems").innerHTML = itemCount
   document.querySelector(".hoverText").innerHTML = currentPrice

}

function checkout() {
    console.log('User is checking out.')
    //Let your customer know how many items they are purchasing and the price
    alert("Current Price="+currentPrice+" itemCount="+itemCount)
    prompt("Enter you Address and Name ")
    currentPrice=0 
    itemCount=0
    document.querySelector("#cartItems").innerHTML = itemCount
   document.querySelector(".hoverText").innerHTML = currentPrice

}
 
function clearCart() {
   //clear the cart, reset price and item count to 0 lab 9
  
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