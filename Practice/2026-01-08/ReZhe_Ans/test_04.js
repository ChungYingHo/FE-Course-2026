// Write a JavaScript program that:
// 1. Uses the array `[3, 17, 9, 42, 5]`.
// 2. Finds the largest number in the array.
// 3. Outputs the maximum value using `console.log()`.

const originArray = [3, 17, 9, 42, 5]
let maxNumber = originArray[0]

for(let i = 0; i < originArray.length; i++){
  if(maxNumber < originArray[i]){
    maxNumber = originArray[i]
  }
}

console.log(maxNumber)
