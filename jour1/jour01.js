// Hello world
console.log("Hello world !")


// String
var test = "My name is Jong"
console.log(test)

// Concatenation
var firstName = "Jérémy"
console.log("Nice to meet you " + firstName)

// string length
var testLength = "I'm very long !"
console.log(testLength.length)

// Replace
var food = "croissant is meh"
console.log(food)
food = food.replace("meh", "so good")
console.log(food)

// Up and Down
var basic = "This is Cool"
var basicUp = basic.toUpperCase()
var basicDown = basic.toLowerCase()
console.log(basic)
console.log(basicUp)
console.log(basicDown)

// Split
var word = "banana"
var letters = word.split("")
console.log(letters)

// Template
var age = "26"
var template = `I'm ${age} years old`
// => équivaut a: var template = "I'm " + age + " years old"
console.log(template)


// Bonus
var sentence1 = "Je suis sur la premiere ligne, \nje suis sur la deuxieme ligne"
console.log(sentence1)

var sentence2 = "Je m'appelle \"Benoit\""
console.log(sentence2)

var sentence3 = 'Je m\'appelle "Benoit"'
console.log(sentence3)

var sentence4 = `Je suis la premiere ligne
je suis sur la deuxieme ligne`
console.log(sentence4)

var changed = "Bonjour"
changed = changed.replaceAll("o", "a")
console.log(changed)