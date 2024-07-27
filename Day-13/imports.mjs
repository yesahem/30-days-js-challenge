// Task 2
import { person } from "./exports.mjs";
console.log(person.name);
console.log(person.contact());

// Task 3
import { addTwoNumbers, subtractTwoNum } from "./exports.mjs";
console.log(addTwoNumbers(3, 4));
console.log(subtractTwoNum(5, 2));

// Task 4
// import multiplyTwoNumbers from "./exports.mjs";
// console.log(multiplyTwoNumbers(5, 4));

// Task 5

import * as objectModule from "./exports.mjs";

console.log(objectModule.greet());
console.log(objectModule.numValue);

// Task 6
import array from "lodash";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArr = array.chunk(arr, 2);
console.log(newArr);

// Task 7
import axios from "axios";

axios
  .get("https://api.github.com/users/yesahem")
  .then(function (response) {
    console.log(response);
    console.log("data: ", response.data.name);
  })
  .catch((err) => {
    console.log("Some error occured");
  });

// Task 8 in webpack.config.js file (using a js bundler)
