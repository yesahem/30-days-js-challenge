// .mjs extension is used to explicitly tell that treat this js file as ES modules. And also using this .mjs extension there  is no need for package.json file configuration
// Task 1

export function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

// Task 2
export const person = {
  name: "shishu",
  contact: function () {
    console.log("Phone number 9087xxxx84 \n Email: shi.......@gmail.com");
  },
};

// Task 3
export function subtractTwoNum(num1, num2) {
  return num1 - num2;
}

// Task 4
/*
export default function multiplyTwoNumbers(num1, num2) {
  return num1 * num2;
}
*/

// Task 5

export const numValue = 69;
export function greet() {
  return "Hello, Welcome Back!!";
}
