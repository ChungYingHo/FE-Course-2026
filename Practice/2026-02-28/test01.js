const arr = [
  [25, 36, 17, 48, 59],
  [12, 23, 34, 45, 56],
  [67, 78, 89, 90, 91],
  [10, 20, 30, 40, 50],
  [96, 87, 76, 65, 54]
]

// 請寫一個程式接收一個參數 num，並回傳它的第一個出現位置，ex: 34 出現在第二列、第三行
// 若找不到位置請輸出「找不到位置」

function newArr(num){
  for(let i = 0; i < arr.length; i++){
    const whereFirst = arr[i]

    for(let j = 0; j < whereFirst.length; j++){
      const target = whereFirst[j]

      if(num === target){
        return(num, `出現在第${[i + 1]}列、第${[j + 1]}行`)
      }
    }
  }
  return '找不到位置'
}

console.log(newArr(34))
