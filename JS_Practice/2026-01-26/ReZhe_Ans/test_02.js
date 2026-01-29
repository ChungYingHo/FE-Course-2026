// Problem Description
// You are given a shopping cart stored in an array called cart.
// Each item in the cart is an object with the following properties:
// - name: the name of the product (string)
// - price: the price of the product (number)

// Task
// 1. Create a variable called total and set its initial value to 0.
// 2. Use a for...of loop to go through each item in the cart array.
// 3. Add each item's price to total.
// 4. Print the final total price to the console.

const cart = [
  { name: 'Book', price: 12.99 },
  { name: 'Headphones', price: 29.99 }
]

let total = 0

cart.forEach((money) => {
  total += money.price
})

console.log(total)
