//Task 1
function oddEvenChecker(userInput) {
  if (userInput % 2 === 0) {
    console.log("Even Number")
  } else {

    console.log("Odd Number")
  }
}
oddEvenChecker(34)


//Task 2 

function squareCalculator(num) {
  return num * num
}

const res = squareCalculator(50)
console.log(res)



//Task 3

function maxNumber(num1, num2) {
  if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}`)
  } else if (num1 === num2) {
    console.log(`${num1} is equals to ${num2}`)
  } else {
    console.log(`${num2} is greater than ${num1}`)
  }
}

maxNumber(23, 34)

//Task 4

function stringConcat(str1, str2) {
  return str1 + str2
}

const result = stringConcat("hii", "i am shishu")
console.log(result)


// Task 5

const sumCalculate = (num1, num2) => {
  return num1 + num2;
}

const val = sumCalculate(4, 5)
console.log(val)


//Task 6

const checkString = (str, char) => {
  if (str.includes(char)) {
    return true
  } else {
    return false
  }
}


const boolVal = checkString("Chai aur code", 'u')
console.log(boolVal)

// Task 7

function findProduct(num1, num2 = 3) {
  return num1 * num2
}

const res2 = findProduct(5)
console.log(res2)

// Task 8

function greetMsg(str, age = 18) {
  return `Noice to see you ${str} i hope you are doing good at the age of ${age}`
}

const res3 = greetMsg("Shishu", 17)
console.log(res3)


// Task 9
function lowerFunc() {
  console.log("Hello")
}

function higherOrderFunc(func, number) {
  for (let i = 1; i <= number; i++) {
    func()
  }
}

higherOrderFunc(lowerFunc, 4)


// Task 10

const day1 = (x) => x = x + 1
const day2 = (x) => x = x * 8

function higherOrderFunc2(func1, func2, number) {
  return func2(func1(number))
}


const resultFinal = higherOrderFunc2(day1, day2, 3)
console.log(resultFinal)



















