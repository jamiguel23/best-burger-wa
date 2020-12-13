console.log("Hello, World!"); // "console echos Hello, World!""


var firstName; //creating varible firstName     
firstName="Matt"; // firstName valued as Matt
console.log (firstName); 

var promtQuestion = "Do you prefer a fries or onion rings?";
var response = prompt(promtQuestion);
console.log (response);

var alertMessage;
var color;


if(response === "fries") {
    alertMessage = "Awesome! We prefer onion rings in this house";

}  else if(response==="onion rings"){
    alertMessage = "Dope! We prefer fries in this house";

} else {
    alertMessage = " Gross. Have you tried fries or onion ring?"
}

alert(alertMessage);

