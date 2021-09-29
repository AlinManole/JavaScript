//01 - Number

var integer = 102;
var float = 13.9;
console.log(integer , float);

//02 - Comvert

var basic = 34;
var stringified = basic.toString();
console.log(stringified);

//03 - Round 

var num = 1.5;
var rounded = Math.round(num);
console.log(rounded);

//04 - Arithmetique

var test = 12;
var bis = 5

console.log(test + bis);
console.log(test - bis);
console.log(test * bis);
console.log(test / bis);
console.log(test ** bis);
console.log(test % bis);


//05 - Comparaison

var test = 143;
var bis = 219
console.log(test > bis);
console.log(test < bis);
console.log(test >= bis);
console.log(test <= bis);
console.log(test == bis);
console.log(test === bis);
console.log(test != bis);
console.log(test !== bis);

//06 - Condition

var limit = 50;
var score = 64;

if( score >= limit ) {
    console.log("Ok good !");
} else {
    console.log("Oh nooo...")
}


//07 - Condition II

var password = "azer";

if (password.length > 5) {
    console.log("The password is secure")
}

//08 - Condition III

if (score >= limit && password.length > 5) {
    console.log("Everything is good")
} else if ( score >= limit || password.length > 5 ) {
    console.log("Something is good")
} else {
    console.log("Nothing is good")
}



//Bonus

var min = 1;
var max = 6;

var random = Math.floor(Math.random() * (max - min) + min)
if (random === 6) {
    console.log("Yes I win!")
} else {
    console.log("So close..the number was " + random)
}

//Bonus II

var month = "June"

switch (month) {
	case "January": 
		console.log("Winter");
		break;
	case "February": 
		console.log("Winter");
		break;
	case "March": 
		console.log("Spring");
		break;
	case "April": 
		console.log("Spring");
		break;
	case "May": 
		console.log("Spring");
		break;
	case "June": 
		console.log("Summer");
		break;
	case "July": 
		console.log("Summer");
		break;
    case "August": 
		console.log("Summer");
		break;
    case "September": 
		console.log("Autumn");
		break;
    case "October": 
		console.log("Autumn");
		break;
    case "November": 
		console.log("Autumn");
		break;
    case "December": 
		console.log("Winter");
		break;
}


// Bonus 3

var roundedNumber = 3.6;

if (r)