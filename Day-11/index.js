// Task 1
const newPromise = new Promise(() => {
  setTimeout(() => {
    console.log("Hii There")
  }, 2000)
})

// Task 2 (Using Error Syntax)
const newPromise2 = new Promise((res, rej) => {
  setTimeout(() => {
    rej(new Error("Fetching rejected"))
  }, 2000)
})
newPromise2.catch((rej) => {
  console.log(rej.message)
})

// Alt Task 2 approach 
const newPromise2B = new Promise((res, rej) => {
  setTimeout(() => {
    rej("Rejected the work")
  }, 2000)
})

newPromise2B.catch((error) => {
  console.log(error)
})

// Task 3 and Task 6

const newPromise3 = new Promise((resolve, reject) => {
  const data = fetch("https://api.github.com/users/yesahem")
  resolve(data)
})


newPromise3
  .then((data) => {
    // console.log(data)
    return data.json();

  })
  .then((data) => {
    console.log(data.name)
  })
  .catch((err) => {
    console.log("something went wrong")
  })

// Task 4

async function newPromise4() {
  const data = await fetch('https://api.github.com/users/github')
  const jsonify = await data.json()
  console.log("async await function")
  console.log(jsonify)
}

newPromise4()

// Task 5 and Task 7
async function newPromise5() {
  try {
    const response = await fetch('https://api.github.com/users/yesahemh')
    const jsonify = await response.json()
    if (jsonify.status != 200) {
      throw new Error(jsonify)

    }
  } catch (error) {
    console.log('Something went Wrong: ')
  }
}

newPromise5()



const newPromise8 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 9(1)")
  }, 2000)
})

const newPromise8B = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 9(2)")
  }, 2000);

})

const newPromise8C = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 9(3)")
  }, 2002)
})

Promise.all([newPromise8, newPromise8B, newPromise8C])
  .then((value) => {
    console.log(value)
  })
  .catch((error) => {
    console.log(error)
  })

Promise.race([newPromise8, newPromise8B, newPromise8C])
  .then((firstCommer) => {
    console.log(firstCommer)
  })
  .catch((err) => {
    console.log(err)
  })
