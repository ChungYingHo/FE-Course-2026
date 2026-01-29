// Problem Description
// You are asked to reverse a string entered by the user.

// Objective
// Practice working with strings and loops.

// Task
// 1. Ask the user to enter a word and store it in a variable called input.
// 2. Create an empty string called reversed.
// 3. Use a loop to go through the input string from the last character to the first.
// 4. Add each character to the reversed string.
// 5. Print the reversed string to the console.

const input = prompt('Enter a word:')
let reversed = '' //變數reversed，去創造空字串

for(let i = input.length; i >= 1; i--){  //使用for迴圈 i=length去取input長度
  reversed = reversed + input[i - 1]  //更新reversed,如果不加-1的話比如輸入'hello'會出現undefined
  // 因為在跑得時候不加的話跑0-5，而'5'不存在，所以加入-1會跑0-4就會變'olleh'
}

console.log(reversed) //用console印出來(f12)
