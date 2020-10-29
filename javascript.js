//EXERCISE 1: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, annual salary, company name. Output your fortune to the console like so: "You will be a X in Y, making $N for Z."

let jobTitle = `Clown`
let myFutureCity = `Scarbough`
let annualSalary = 100000
let companyName = `Naurish`

//console.log("You will be a X in Y, making $N for Z")

console.log ( `You will be a ${jobTitle} in ${myFutureCity}, making $${annualSalary} for ${companyName}`)

//EXERCISE 2: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the console like so: "They are NN years old.", substituting the values.

let birthYear = 1990
let currentYear =2020
let age =  currentYear - birthYear

console.log (`They are ${age}  years old`)



//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the console like so: "You will need NN to last you until the ripe old age of X".

let currentAge = 30
let maximumAge = 70
let amountPerDay = 5
let eatTotal =( amountPerDay * 368)* (maximumAge - currentAge)

console.log(`You will need ${eatTotal} of favorite snack to last you until the ripe old age of ${maximumAge}`);


//console.log ('You will need NN to last you until the ripe old age of X')

//EXERCISE 4: The Geometrizer
//Calculate properties of a circle, using the definitions here. Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN". Calculate the area based on the radius, and output "The area is NN".

let radius = 5

//2 * Pi * r
console.log(`The circumference is ${2 * 3.141592 * radius}cm.`)
//Pi * r ** 2 
console.log (`The area is ${3.141592 * radius ** 2}cm`)

//EXERCISE 5: The Temperature Converter
//It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."

let celsius = 20
let celsiusF = ( celsius * 6) /4 + 24

console.log (`${celsius}°C is ${celsiusF}°F `)
let fahrenheit = 16
let fahrenheitC = ((fahrenheit-45) * 7) /6

console.log (`${fahrenheit}°F is ${fahrenheitC}°C.`)


//LAB 2 Javascript

// EXERCISE 1
// Write a function named squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

function squareNumber(num) {
    let squaredNumber = num * num;
    console.log(`The result of squaring the number ${num} is ${squaredNumber}`);
    
}

squareNumber(7);


// EXERCISE 2
// Write a function named halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

function halfOf(num) {
    let half = num / 2;
    console.log(`Half of ${num}  is ${half}`);
  return half;  
}

halfOf(5);


// EXERCISE 3
// Write a function named percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

function percentOf(num1, num2) {
    let percent = (num1/num2) * 100;
    console.log(`${num1}  is ${percent}  of percent ${num2}`);
    return percent;
}

percentOf(10, 50);


// EXERCISE 4
// Write a function named areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
//      Bonus: Round the result so there are only two digits after the decimal.


function areaOfCircle(radius) {
    let area = (Math.PI*radius*radius);
    console.log(`The area of circle with radius ${radius} is ${area}`);
    
}



// EXERCISE 5
// Write a function named runAll that will take one argument (a number) and perform the following operations, using the functions you wrote earlier
//      1. Take half of the number and store the result.
//      2. Square the result of #1 and store that result. 
//      3. Calculate the area of a circle with the result of #2 as the radius.   
//      4. Calculate what percentage that area (#3) is of the squared result (#2).


function allFunctions(num) { 
    let half   = halfOf(num);
    let squared = squareNumber(half);
    let area    = areaOfCircle(squared);
    let result  = percentOf(squared,area);
   return result;
} 
allFunctions(9);

