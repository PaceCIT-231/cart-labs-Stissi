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

}

function checkout() {
    console.log('User is checking out.')
    //Let your customer know how many items they are purchasing and the price
    alert("Current Price="+addedToCart.getTotalCost+" itemCount="+addedToCart.getItemCount)
}