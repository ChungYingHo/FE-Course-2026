// Think of a realistic scenario where you would use the `some` and `every` method to solve a problem.

const beverageShops = [
  {name: 'macu', product: 'green tea', price: 30},
  {name: 'Coco', product: 'mango green tea', price: 55},
  {name: 'KEBUKE', product: 'rouge black tea', price: 35},
  {name: 'milksha', product: 'jasmine green tea latte', price: 50}
]

const hasExpensive = beverageShops.some((beverageShop) => beverageShop.price >= 40)

console.log(hasExpensive)


const priceUnder40 = beverageShops.every((beverageShop) => beverageShop.price <= 40)

console.log(priceUnder40)


// 文字敘述:
// 模擬一份飲料店資料，使用some來確認說商品的價格有沒有>=40，如果有的話就輸出true
// 使用every來確認全部的商品價格有沒有<=40，由於every是要全部都符合條件，所以資料裡面沒有符合條件的話就會回傳false
