// number
var integer = 102
var float = 13.9
console.log(integer, float)

// convert
var basic = 34
var stringified = basic.toString()
console.log(typeof stringified)
console.log(stringified)

// round
var num = 1.5
var rounded = Math.round(num)
console.log(rounded)

// arithmetique
var test = 12
var bis = 5
console.log(test + bis)
console.log(test - bis)
console.log(test / bis)
console.log(test * bis)
console.log(test ** bis)
console.log(test % bis)

// Comparaison
var test = 143
var bis = 219
console.log(test < bis)
console.log(test <= bis)
console.log(test > bis)
console.log(test >= bis)
console.log(test == bis)
console.log(test === bis)
console.log(test != bis)
console.log(test !== bis)

// Condition
var limit = 50
var score = 3
var validScore = score >= limit

if (validScore) {
  console.log("Ok good!")
} else {
  console.log("Oh noooo!")
}

// Condition II
var password = "aze"
var passwordSecured = password.length > 5

if (passwordSecured) {
  console.log("The password is secure")
}

// Condition III
if (validScore && passwordSecured) {
  console.log("Everything is good")
} else if (validScore || passwordSecured) {
  console.log("Something is good")
} else {
  console.log("Nothing is good")
}

// Bonus 1
var min = 1
var max = 6
var random = Math.floor(Math.random() * (max - min + 1) + min)

if (random === 6) {
  console.log("Yes I win!")
} else {
  console.log("So close..")
}

// Bonus 2
var month = "October"

switch (month) {
  // winter
  case "December":
  case "January":
  case "February":
    console.log("Winter")
    break

  // spring
  case "March":
  case "April":
  case "May":
    console.log("Spring")
    break

  // summer
  case "June":
  case "July":
  case "August":
    console.log("Summer")
    break

  // Automn
  case "September":
  case "October":
  case "November":
    console.log("Autumn")
    break

  default:
    console.log("That's not a season")
}

// Bonus 3

// Solution de Karimou
var roundedNumber = 12.999999999

if (roundedNumber - 0.4 <= Math.floor(roundedNumber)) {
  console.log(Math.floor(roundedNumber))
} else {
  console.log(Math.ceil(roundedNumber))
}

// Solution de Jong
var roundedNumber = 12.99999
var mathCeil = Math.ceil(roundedNumber)
var mathFloor = Math.floor(roundedNumber)
var result = mathCeil - roundedNumber

if (result <= 0.5) {
  console.log(mathCeil)
} else {
  console.log(mathFloor)
}

// Solution d'Edouard
var roundedNumber = 12.1

if (roundedNumber > Math.ceil(roundedNumber) - 0.5) {
  roundedNumber = Math.ceil(roundedNumber)
} else {
  roundedNumber = Math.floor(roundedNumber)
}

console.log(roundedNumber)

// Solution d'Evan
var rNumber = 12.999999
var numberCeil = Math.ceil(rNumber) - rNumber

if(numberCeil <= 0.5){
    console.log(Math.ceil(rNumber))
} else {
    console.log(Math.floor(rNumber))
}

// Solution d'Ahmed
var roundedNumber = 12.4

if (roundedNumber % 1 >= 0.5) {
  console.log(Math.ceil(roundedNumber))
} else {
  console.log(Math.floor(roundedNumber))
}