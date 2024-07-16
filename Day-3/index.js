//Task 1
const num = -9

if (num > 0) console.log("Positive Number")
else if (num === 0) console.log("Number is Zero")
console.log("Negative Number")

// Task 2

const age = 9

if (age >= 18) console.log("You are eligible to vote")
console.log("You are not eligible to vote")

// Task 3

const num1 = 2
const num2 = 4
const num3 = 8
let temp;
if (num1 <= num2) {
  temp = num2;
  if (temp <= num3) {
    temp = num3
  }
  console.log(temp)
} else if (num1 >= num2) {
  temp = num1;
  if (temp >= num3) {
    temp = num3;
  }
  console.log(temp)
}

//Task 4

const switchCase = 3;
switch (switchCase) {
  case 1:
    console.log("Monday")
    break;
  case 2:
    console.log("Tuesday")
    break;
  case 3:
    console.log("Wednesday")
    break;
  case 4:
    console.log("Thursday")
    break;
  case 5:
    console.log("Friday")
    break;
  case 6:
    console.log("Saturday")
    break;
  case 7:
    console.log("Sunday")
    break;
  default:
    console.log("Please enter a Valid number between 1 - 7")
}


// Task 5

const marks = 60
let grades

if (marks >= 86) grades = 'A'
if (marks >= 65 && marks < 86) grades = 'B'
if (marks >= 45 && marks < 65) grades = 'C'
if (marks < 45) grades = 'F'

switch (grades) {
  case 'A':
    console.log(grades)
    break;
  case 'B':
    console.log(grades)
    break
  case 'C':
    console.log(grades)
    break
  case 'F':
    console.log(grades)
  default:
    break;
}

// Task-6

const oddEven = 33;

oddEven % 2 == 0 ? console.log("Even Number") : console.log("Odd Number")


// Task-7

const leapYear = 2000
if (leapYear % 100 === 0) {
  if (leapYear % 4 === 0) {
    console.log("This is a leap year ")
  } else {
    console.log("This is not a leap year")
  }
} else if (leapYear % 4 === 0) {

  console.log("This is a leap year")

} else {
  console.log("This is not a leap year")
}


















