// Task 1
const mainDiv = document.getElementById("main-Div")
mainDiv.innerHTML = "Welcome To Chai Aur Code"

// Task 2

const parent = document.getElementsByClassName("parentDiv")  // Please Note that "getElementsByClassName" return a collection of html elements so it must be accessed one by one (Just like we access the elements of the array)
parent[0].style.backgroundColor = "pink"

// Task 3
const newDiv = document.createElement('div')
newDiv.innerHTML = "I am a new Div";

const body = document.getElementsByTagName('body')
body[0].appendChild(newDiv)

// Task 4

const ul = document.getElementsByTagName('ul')
const newLi = document.createElement('li')
const newLi2 = document.createElement('li')
newLi.innerHTML = 'This is an appended li elements'
newLi2.innerHTML = "This is another appended li elements"
ul[0].appendChild(newLi)
ul[0].appendChild(newLi2)

// Task 5

const selected = document.getElementsByTagName('ul')
selected[0].removeChild(newLi2)

// Task 6

body[0].removeChild(newDiv)

// Task 7

const img = document.getElementsByTagName('img')
img[0].src = "https://images.pexels.com/photos/7283/garden.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"


// Task 8
body[0].style.backgroundColor = 'gray'
body[0].style.backgroundColor = ''

// Task 9

const btn = document.getElementById('myBtn')
btn.onclick = function() {
  const para = document.getElementById('para')
  para.innerHTML = "Para contents has been changed "
}

// Task 10

const hoverElement = document.getElementById('hoverElement')
function onMouseOver() {

  console.log(hoverElement)
  hoverElement.style.backgroundColor = 'green'
  hoverElement.style.color = 'Blue'
}

function onMouseOut() {
  hoverElement.style.backgroundColor = ''
  hoverElement.style.color = 'Black'
}
