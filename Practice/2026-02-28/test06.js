// JoJo 去商店買東西，依序購買了 3 個物品，分別是：
// 1. 牛奶，價格為 50 元
// 2. 麵包，價格為 30 元
// 3. 蛋糕，價格為 80 元
// 請寫一陣列依序紀錄 JoJo 購買的物品名稱和價格，並計算總花費金額，最後輸出購買的物品清單和總花費金額。

const arr = []

arr.push(
  {product: '牛奶', price: 50}
)
arr.push(
  {product: '麵包', price: 30}
)
arr.push(
  {product: '蛋糕', price: 80}
)

let total = 0

arr.forEach((sum) => {
  total = total + sum.price
  console.log(`物品清單:${sum.product}  物品金額:${sum.price}元`)
})

console.log(`總花費:${total}元`)
