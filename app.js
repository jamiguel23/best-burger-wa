//console.log("Hello, World!"); // "console echos Hello, World!""


//var firstName; //creating varible firstName     
//="Matt"; // firstName valued as Matt
//.log (firstName); 

var response;

var alertMessage; // declare varible 'alertMessage'
var color; // declare variable color'
var promtQuestion = "Do you prefer a fries or onion rings?"; //delare 'promtQuestion' for the start up question

function validateUserPassword() {
    var storedPassword = "Yo";
    var userPassword =  "";

    while(userPassword !== storedPassword) {
        userPassword= prompt('Type "Yo"');
    }
}

function getUserPromt() { // create a message cariable to be used as argument  
    var response = prompt(promtQuestion); // declared variable 'response' to write promtQuuestion
    response = response.toLowerCase();
    return response;
    console.log (response); // logged response in console for later use
}

function reloadWittyMessage (response) { // decalred function 'reloadWittyMessage'
    if(response === "fries") { //expected response 
        alertMessage = "Awesome! We prefer onion rings in this house"; // alert message 
        color = "#FFFF00"; //assigned 'fries a color
    } else if(response==="onion rings"){ //created else statement to if response is 'onion rings'
        alertMessage = "Dope! We prefer fries in this house"; //
        color = "#FFFFFF";
    } else {
        alertMessage = " Gross. Have you tried fries or onion rings?"
        color = "#FF0000";
    }

    var element = document.getElementById('response-output')
    element.innerText = alertMessage;
    element.style.color = color;
}

function addImage() {
    var numberOfBurgers = prompt("How many burgers do you want?");
    for (var i = 0; i < numberOfBurgers; i++) {
        console.log (i)
        document.write('<img src="Burger.png" width="100" height="100">'); }
                
}



// function addBurgerPhoto (favSandwich, description) {
//     if(favSandwich === cheeseburger) {
//         description = "does this look good?";
//     }

    // document.write ("<div> \5
    //                     <h2>" + favSandwich + "</h2> \
    //                     <img src=\"images/" + addBurgerPhoto + ".png\"> \
    //                 <p>" + favSandwich + description + ".</p> \
    //                 </div>");

// }

// var favSandwich = "burgers";
// var description = "are you hungry?"
// addBurgerPhoto(favSandwich, description);                    

// function counter() { 
//     for ( var i = 0; i<10; i++){
//     console.log(i);
//     }
// }

validateUserPassword ()
var fries=getUserPromt();
reloadWittyMessage (fries);
alert(alertMessage);
// counter ()
addImage () ;



