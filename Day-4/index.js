for (let i = 1; i <= 10; i++) console.log(i)

for (let i = 1; i <= 10; i++) console.log(i * 5)

let sumValue = 0
for (let i = 0; i < 10; i++) {
  sumValue += i
}
console.log(sumValue)

let i = 10
while (i > 0) {
  console.log(i)
  i--;
}

i = 1
do {
  console.log(i)
  i++
} while (i <= 5);


let num = 5;
let val = 1
do {
  val *= num;
  num--
} while (num >= 1)
console.log(val)


// Printing Stars (IMP)
for (let i = 1; i <= 5; i++) {
  let stars = ''
  for (let j = 1; j <= i; j++) {
    stars += "*"
  }
  console.log(stars)
}
