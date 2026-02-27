// Think of a realistic scenario where you would use the `forEach` method to solve a problem.

const drinks = [
  {shopName: '7-11', product: 'tea', price: 25},
  {shopName: 'FamilyMart', product: 'soda', price: 35},
  {shopName: 'Hi-Life', product: 'milk tea', price: 30},
  {shopName: 'OKmart', product: 'black tea', price: 28}
]

let total = 0

drinks.forEach((drink) => {
  total += drink.price
})

console.log(total)

// 文字敘述:
// 模擬一份商店飲料資料，來做總價格，透過使用foreach的方式來遍歷drinks裡面的物件，再算出總價格。
