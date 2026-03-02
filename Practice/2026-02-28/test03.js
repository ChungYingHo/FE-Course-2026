const arr = [12, 58, 16, 32, 78, 16, 25, 12, 90, 45]

// 1. 請寫一程式輸出各數字出現的次數，ex: 12 出現了 2 次

function frequency(num){
  let count = 0

  for(let i = 0; i < arr.length; i++){
    if(arr[i] === num){
      count  ++
    }
  }
  return `${num} 出現了 ${count} 次`
}

console.log(frequency(60))

// 2. 請寫一程式去除陣列中重複的數字

const remove  = [...new Set(arr)]

console.log(remove)

// 3. 請寫一程式將去除重複後的陣列中的數字由小到大排序


const newRemove = remove.sort((a, b) => b - a)

console.log(newRemove)
