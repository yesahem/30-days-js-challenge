// Task 1

const book = {
  title: 'Focus on What Matters',
  author: 'Darius Foroux',
  year: '2024',
  result: function() {  // This function does the "Task 7"
    console.log(this.title)
    return (`title: ${this.title} \nauthor :${this.author}`)
  },
  changeYear: function(newInput) {
    this.year = newInput;

  }
}

console.log(book)

// Task 2

console.log(book.title)
console.log(book.author)


// Task 3
console.log(book.result())

// Task 4
const changingYear = book.changeYear(2006)
console.log(book.year)


// Task 5
const library = {
  name: 'The Buddha Library',
  books: [{
    title: 'Dune',
    author: 'Frank Herbert',

  }, {
    title: 'Neuromancer',
    author: 'William Gibson'
  }, {
    title: 'The Left Hand of Darkness',
    author: 'Ursula K.Le Guin'
  }]
}

console.log(library)

// Task 6

console.log(library.name)
console.log(library.books.forEach((books) => console.log(books.title)))

// Task 7 already done in the above function 

// Task 8 

for (const property in book) {
  console.log(`${property} : ${book[property]}`)
}


// Task 9

const keys = Object.keys(book)
const value = Object.values(book)

console.log(`Here is the keys of Book object ${keys}`)
console.log(`Here is the value of Book object ${value}`)




