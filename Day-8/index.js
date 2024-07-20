// Task 1

const age = 18
const name = 'Shishu Ranjan'

console.log(`Hello, my name is ${name} and my age is ${age}`)

// Task 2
const string = `
The string text that will become part of the template literal. 
Almost all characters are allowed literally, including line breaks and other whitespace characters. However, invalid escape sequences will cause a syntax error, unless a tag function is used.`
console.log(string)

// Task 3

const arr = [1, 2, 3, 4, 5, 6]
let a, b, arr2;

[a, b, ...arr2] = arr;

console.log(a)
console.log(b)


// Task 4

const obj = {
  title: 'Focus of What Matters',
  author: 'Darius Forux',
  year: 2024
}

const { title, author } = obj;
console.log(title)
console.log(author)


// Task 5

// Task 3 me hi task 5 ka code daal diya gaya hai.

console.log(arr2)

// Task 6
function add(...arguments) {
  let sum = 0;
  for (const args in arguments) {
    sum += arguments[args];
  }
  return sum;
}

const total = add(1, 2, 3, 4)
console.log(total)

// Task 7
function resProduct(val1, val2 = 1) {
  return val1 * val2
}

console.log(resProduct(5, 7))
console.log(resProduct(12))

// Task 8

function method() {
  return 'Hello I am a Method (Generally a function)'
}

const prop = 23;
const prop2 = 45;

const object = { prop, prop2, method }
console.log(object)


// Task 9


// "Computed Property Names" is a term used when a variable is used as a key in object 
const keyName = 'name'

const obj2 = {
  [name]: 'Shishu Ranjan'
}

console.log(obj2[name])












