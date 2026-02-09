const stockPrices = [120, 130, 125, 140, 135, 150, 145]

// 這是一週 (星期一到日) 7 天的股價，如果當天股價比前一天高超過 10 元，則視為「大漲」，需要通知投資人。
// 如果比前一天低超過 10 元，則視為「大跌」，也需要通知投資人。
// 請寫一段程式碼，找出所有「大漲」和「大跌」的日期 (以陣列索引表示)，並分別存入 two arrays: bigRises 和 bigFalls。

const rise = []
const fail = []


for(let i = 0; i < stockPrices.length; i++){
  const price = stockPrices[i] - stockPrices[i - 1]

  if(price > 10) rise.push(i)
  if(price < -10) fail.push(i)
}

console.log(rise)
console.log(fail)
