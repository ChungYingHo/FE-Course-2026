// Write a JavaScript program that:
// 1. Uses `prompt()` to ask the user for a number.
// 2. Counts down from that number to 1.
// 3. Outputs each number in the countdown using `console.log()`.

const number = Number(prompt('請輸入數字'))

for(let i = number; i >= 1 ; i--){
  console.log(i)
}
