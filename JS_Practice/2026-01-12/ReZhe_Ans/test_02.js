// Problem Description
// You are given an array of temperatures in Celsius stored in an array called c.
// Each value in the array represents a temperature in degrees Celsius.

// Objective
// Practice using higher-order functions, specifically the map() method.

// Task
// 1. Create a new array called f by converting each Celsius value to Fahrenheit.
// 2. Use the formula: Fahrenheit = Celsius * 9 / 5 + 32.
// 3. Use the map() method to perform the conversion.
// 4. Print the resulting Fahrenheit array to the console.

const c = [0, 10, 20]

const f = c.map((c)=>{  //設定變數'f'，由於map會回傳回去弄成一個新的陣列，設定變數去接收他
  return c * 9 / 5 + 32  //將計算c*9/5+32的結果回傳回去
})

console.log(f) //把'f'印出來
