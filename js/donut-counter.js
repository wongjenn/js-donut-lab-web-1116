//JS Donut Counter Lab
var guests = 0;
var donuts = 0;
//declare 2 variables one for guests and one for donuts
//use prompt method to bring up a dialog box in the browser for the user to insert the number of guests and donuts.
//use parseInt to convert the users answer from a string to an integer.
no_of_guests = prompt("Please enter the number of guests:");
no_of_donuts = prompt("Please enter the number of donuts:");
//write a conditional to check if there are enough donuts
  alert(`These are ${no_of_donuts} donuts and there are ${no_of_guests} guests.`);
if (no_of_guests > no_of_donuts){
    alert(`There is not enought donuts for all the guests. Please try again.`);
}
//alert the user with a message telling them the numbers of donuts and guests, and if there are enough donuts for each guest.
