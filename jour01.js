// 01 - Hello World 

console.log("Hello World !");

// 02 - String

var test = "My name is Alin";
console.log(test);

//03 - Concatenation 

var name ="Alin"
console.log("Nice to meet you " + name );

//04 - String Lenght

var testLenght = "I'm very long !";
console.log(testLenght.length);

//05 - Replace

var food = "croissant is meh";
food = food.replace("meh", "so good");
console.log(food);

//06 - Up and Down 

var basic = "This is Cool";
var basicUp = basic.toUpperCase();
var basicDown = basic.toLowerCase();
console.log(basic , basicUp , basicDown);

//07 - Split

var word ="banana";
var letters = word.split('');
console.log(letters)

//08 - Template 

var age = 35;
var template =`I'm ${age} years old`;
console.log(template);


// Bonus 

var changed = "Bonjour"

 // var changed ="Bonjour";
// console.log(changed.replace('o', 'a').replace('o', 'a'));


changed.replaceAll("a","o")
console.log(changed)