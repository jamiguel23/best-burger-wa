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