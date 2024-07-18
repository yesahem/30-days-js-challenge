// Task 1

const arr1 = [1, 2, 3, 4, 5]
console.log(arr1)

//Task 2

const arr2 = [1, 2, 3, 4, 5]
console.log(arr2[0])
console.log(arr2[arr2.length - 1])

// Task 3

const arr3 = [1, 2, 3, 4, 5]

arr3.push(56)
console.log(arr3)

// Task 4
const arr4 = [1, 2, 3, 4, 5]
arr4.pop(56)
console.log(arr4)

// Task 5
const arr5 = [1, 2, 3, 4, 5]
arr5.shift(34)
console.log(arr5)

// Task 6

const arr6 = [1, 2, 3, 4, 5]
arr6.unshift(34)
console.log(arr6)


// Task 7
const arr7 = [1, 2, 3, 4, 5]
const response = arr7.map((item) => item * 2)
console.log(response)

// Task 8
const arr8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const res = arr8.filter((x) => x % 2 === 0)
console.log(res)



// Task 9
const arr9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const finalRes = arr9.reduce((accu, currValue) => accu + currValue)
console.log(finalRes)

// Task 10
const arr10 = [1, 2, 3, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < arr10.length; i++) {
  console.log(arr10[i]);
}


// Task 11
const arr11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr11.forEach((element) => console.log(element))

// Task 12

const arr12 = [[1, 2, 3], [4, 5, 6]]

//First lets iterate over the array then will iterate over individual element of the array
for (let i = 0; i < arr12.length; i++) {
  let row = ''
  for (let j = 0; j < arr12[i].length; j++) {
    row += arr12[i][j] + ' '
  }
  console.log(row)
}


// Task 13 
const arr13 = [[1, 2, 3], [4, 5, 6], ['a', 'b', 'c']]
console.log(arr13[0][1])  //Accessing element 2

console.log(arr13[2][0])  //Accessing element 'a'











