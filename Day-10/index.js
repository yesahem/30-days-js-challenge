const btn = document.getElementById("btnClick");
btn.style.backgroundColor = "pink";
btn.style.borderRadius = "40px";

// Task 1
function onClickHandler() {
  const para = document.getElementById("para");
  para.innerText = "ParaGraph is changed";
}

// Task 2
function onDoubleClickHandler() {
  const img = document.getElementById("img");
  img.style.display = "none";
}

// Task 3
function mouseHoverHandler() {
  const hover = document.getElementById("changeBg");
  hover.style.backgroundColor = "green";
  hover.style.color = "black";
}

// Task 4
function mouseOutHandler() {
  const hover = document.getElementById("changeBg");
  hover.style.backgroundColor = "";
}

//Task 5
const inputField = document.getElementById("inputField");
inputField.addEventListener("keydown", (e) => {
  console.log(e.key);
});

// Task 6
const para = document.getElementById("para");
inputField.addEventListener("keyup", () => {
  para.textContent = inputField.value;
});

// Task 7
const form = document.getElementById("form");
const formInput = document.getElementById("formInput");
const submitBtn = document.getElementById("submitBtn");
form.addEventListener("submit", function submitEventHandler(e) {
  e.preventDefault();
  console.log("Username: ", formInput.value);
});

// Task 8
const select = document.getElementById("mySelect");
const paraTwo = document.getElementById("para2");
select.addEventListener("change", () => {
  paraTwo.textContent = select.value;
});

// Task 9

const list = document.getElementById("list");
list.addEventListener("click", (e) => {
  console.log(e.target.textContent);
});

//Task 10
const addChildButton = document.getElementById("addchild");
const parentElement = document.getElementById("parent");

let childCounter = 1;

function addNewChild() {
  const newChild = document.createElement("div");
  newChild.textContent = `Child: ${childCounter++}`;
  newChild.className = "child";
  parentElement.appendChild(newChild);
}

addChildButton.addEventListener("click", addNewChild);

parentElement.addEventListener("click", (e) => {
  if (e.target.classList.contains("child")) {
    alert(`Clicked on ${e.target.textContent}`);
    console.log(e);
  }
});
