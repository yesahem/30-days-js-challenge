// Task 1
function firstFunction() {
  throw new Error("Error throws intentionally");
}

try {
  firstFunction();
} catch (error) {
  // console.log("Errors: ", error);
}

// Task 2
function divideTwoNumbers(num, deno) {
  try {
    if (deno == 0) {
      throw new Error("Can't divide by zero");
    } else {
      return num / deno;
    }
  } catch (error) {
    console.log("Error: Can't Divide by zero");
  }
}

console.log(divideTwoNumbers(10, 0));

// Task 3
try {
  console.log("Inside the try block");
  throw new Error("error 404");
} catch (error) {
  console.log("Inside the catch block");
} finally {
  console.log("Inside the finally block ");
}

// Task 4
// will learn about extending classes and then solves this (see the attached question in this folder)

// Task 5
function validatesUserInput(str) {
  try {
    if (typeof str === "string" && str.length != 0) {
      console.log("Input is a string");
    } else {
      throw new Error("Validation Fails");
    }
  } catch (error) {
    console.log("Validation Fails");
  }
}

validatesUserInput("H");

// Task 6
const promise1 = new Promise((res, rej) => {
  const randomValue = Math.floor(Math.random() * 100 + 1);
  if (randomValue > 50 && randomValue < 100) {
    res("resolved"); // if no value is passed here then the function calling it (In this case handlePromiseError function) will get the undefined value
  } else {
    rej("rejected"); // if no value is passed here then the function calling it (In this case handlePromiseError function) will get the undefined value
  }
});

promise1
  .then(() => {
    console.log("Promise Resolves Sucessfully");
  })
  .catch(() => {
    console.log(
      "Promise Rejected randomly and handled gracefully in .catch statement",
    );
  });

// Task 7

async function handlePromiseError() {
  try {
    await promise1;
  } catch (err) {
    console.log("Error Message is: ", err);
  }
}

handlePromiseError();

// Task 8

fetch("https://api.githubs.com/users/yesahem")
  .then((data) => {
    const jsonifyData = data.json();
    return jsonifyData;
  })
  .then((data) => {
    console.log(data.name);
  })
  .catch((err) => {
    console.log("Error: No name attributes found");
  });

// Task 9

async function fetchFalseApi() {
  try {
    const data = await fetch("https://api.githusb.com/users/yesahem");
    const jsonData = data.json();
    console.log(jsonData.name);
  } catch (error) {
    console.log("Error: Requested URL not found ");
  }
}

fetchFalseApi();
