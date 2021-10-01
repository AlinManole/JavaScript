// Nombres pairs
var start = 11
var end = 47
var sum = 0

for (var i = start; i < end; i++) {
  if (i % 2 === 0) {
    console.log(i)
    sum = sum + i
  }
}

console.log(sum)
console.log("")
console.log("")

// Nombres impairs
var start = 109
var end = 588
var sum = 0

for (var i = start; i < end; i++) {
  if (i % 2 !== 0) {
    console.log(i)
    sum = sum + i
  } 
}

console.log(sum)
console.log("")
console.log("")

// Puissance et racine carrée
var numbers = [1, 2, 3, 4, 5]
var squares = []
var roots = []

for (var i = 0; i < numbers.length; i++) {
  var power = numbers[i] * numbers[i]
  squares.push(power)
}

console.log(squares)

for (var i = 0; i < squares.length; i++) {
  var racine = Math.sqrt(squares[i])
  roots.push(racine)
}

console.log(roots)
console.log("")
console.log("")

// Table de multiplication v1
var table = 3

for (var i = 0; i <= 10; i++) {
  var result = table * i
  console.log(`${table} x ${i} = ${result}`)
}

console.log("")
console.log("")

// Table de multiplication v2
for (var i = 0; i < 11; i++) {  
  for (var j = 0; j < 11; j++) {
    var result = i * j
    console.log(`${i} x ${j} = ${result}`)
  }

  console.log("")
}

console.log("")
console.log("")

// Factorielle v1
var factorial = 7

for (var i = 1; i < 7; i++) {
  factorial = factorial * i
}

console.log(factorial)
console.log("")
console.log("")

// Factorielle v2
for (var i = 0; i <= 8; i++) {
  var factorial = 1

  for (var j = 1; j <= i; j++) {
    factorial = factorial * j
  }

  console.log(`Resultat factorielle ${i} = ${factorial}`)
}

console.log("")
console.log("")

// Sum Carrés
var sumSquare = 0

for (var i = 5; i <= 10; i++) {
  var square = i * i
  sumSquare = sumSquare + square
}

console.log(sumSquare)
console.log("")
console.log("")

// Comptons
var count = 0

for (var i = 100; i <= 1000; i++) {
  if (i % 7 === 0) {
    count++
  }
}

console.log(count)
console.log("")
console.log("")

// Chanceux
var min = 1
var max = 6
var sum = 0

for (var i = 0; i < 20; i++) {
  var random = Math.floor(Math.random() * (max - min + 1) + min)

  if (random >= 5) {
    console.log(random)
    sum = sum + random
  }
}

console.log(`sum = ${sum}`)
console.log("")
console.log("")

// Des boites

// 10
// 34
// 17
// 30
// 14

console.log("")
console.log("")

// D'autres boites
// 12
// 24
// 33
// 39
// 42
// 0

console.log("")
console.log("")

// Encore des boites
// 0
// 3
// -3
// 2
// -2
// 5
// -4

console.log("")
console.log("")

// Amstrong
for (var i = 0; i <= 10000; i++) {
  var stringifiedNumer = i.toString()
  var sum = 0

  for(var j = 0; j < stringifiedNumer.length; j++) {
    sum = sum + (Number(stringifiedNumer.charAt(j)) ** stringifiedNumer.length)
  }

  if (sum === i) {
    console.log(`${i} is an Amstrong number`)
  }
}