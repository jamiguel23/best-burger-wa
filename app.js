//console.log("Hello, World!"); // "console echos Hello, World!""


//var firstName; //creating varible firstName     
//="Matt"; // firstName valued as Matt
//.log (firstName); 

var promtQuestion = "Do you prefer a fries or onion rings?"; //delare 'promtQuestion' for the start up question
var response = prompt(promtQuestion); // declared variable 'response' to write promtQuuestion
console.log (response); // logged response in console for later use

var alertMessage; // declare varible 'alertMessage'
var color; // declare variable color' 


if(response === "fries") {
    alertMessage = "Awesome! We prefer onion rings in this house";
    color = "#FFFF00"

}  else if(response==="onion rings"){
    alertMessage = "Dope! We prefer fries in this house";
    color = "#FFFFFF"

} else {
    alertMessage = " Gross. Have you tried fries or onion rings?"
    color = "#FF0000"
}

alert(alertMessage);

var element = document.getElementById('response-output')

element.innerText = alertMessage;
element.style.color = color;