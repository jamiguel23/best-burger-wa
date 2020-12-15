//console.log("Hello, World!"); // "console echos Hello, World!""


//var firstName; //creating varible firstName     
//="Matt"; // firstName valued as Matt
//.log (firstName); 

var response;


function getUserPromt() { // create a message cariable to be used as argument 
    var promtQuestion = "Do you prefer a fries or onion rings?"; //delare 'promtQuestion' for the start up question
    var response = prompt(promtQuestion); // declared variable 'response' to write promtQuuestion
    response = response.toUpperCase();
    console.log (response); // logged response in console for later use
}

var alertMessage; // declare varible 'alertMessage'
var color; // declare variable color' 

function reloadWittyMessage (response) { // decalred function 'reloadWittyMessage'
    if(response === "fries") { //expected response 
    alertMessage = "Awesome! We prefer onion rings in this house"; // alert message 
    color = "#FFFF00"; //assigned 'fries a color

}  else if(response==="onion rings"){ //created else statement to if response is 'onion rings'
    alertMessage = "Dope! We prefer fries in this house"; //
    color = "#FFFFFF";

} else {
    alertMessage = " Gross. Have you tried fries or onion rings?"
    color = "#FF0000";

    var element = document.getElementById('response-output')
    element.innerText = alertMessage;
    element.style.color = color;
} }

getUserPromt ();
reloadWittyMessage (response);
alert(alertMessage);



