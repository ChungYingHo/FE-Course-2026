// 第一題:找出大於 50 的數字

const numbers = [10, 55, 32, 78, 90, 12, 44]

function findGreaterThanFifty(){

  const result = []

  for(let i = 0; i < numbers.length; i++){
    if(numbers[i] >= 50){
      result.push(numbers[i])
    }
  }
  return result
}

console.log(findGreaterThanFifty())

// 第二題:所有數字平方
// 輸出:[4, 16, 36, 64]

const number = [2, 4, 6, 8]

function allNumberSquare(){
  const result = []

  for(let i = 0; i < number.length; i++){
    result.push(number[i] ** 2)
  }
  return result
}

console.log(allNumberSquare())

// 第三題:計算總和
// 輸出:750

const prices = [120, 350, 80, 200]

function totalSum(){
  let total = 0

  for(let i = 0; i < prices.length; i++){
    total = total + prices[i]
  }
  return total
}

console.log(totalSum())

// 第四題:找出最貴商品
// 輸出:{ name: "Laptop", price: 30000 }

const products = [
  { name: 'Book', price: 300 },
  { name: 'Pen', price: 50 },
  { name: 'Laptop', price: 30000 },
  { name: 'Bag', price: 1500 }
]

const findExpensiveProduct = products.reduce((best, current) =>  {
  if(current.price > best.price){
    return current
  }else{
    return best
  }
})

console.log(findExpensiveProduct)

// 第五題:取出所有商品名稱
// 輸出:["Book","Pen","Laptop"]

const product = [
  { name: 'Book', price: 300 },
  { name: 'Pen', price: 50 },
  { name: 'Laptop', price: 30000 }
]

const getProductNames = product.map((item) => item.name)

console.log(getProductNames)


// 第六題:找出成年人，找出 18歲以上的人

const people = [
  { name: 'Tom', age: 15 },
  { name: 'Mary', age: 22 },
  { name: 'John', age: 18 },
  { name: 'Amy', age: 16 }
]

const adultPerson = people.find((person) => person.age >= 18)

console.log(adultPerson)

// 第七題:找出庫存商品
// 輸出:["Phone","Tablet"]

const electronicItems = [
  { name: 'Phone', inStock: true },
  { name: 'Laptop', inStock: false },
  { name: 'Tablet', inStock: true }
]

const findAllItem = electronicItems
  .filter(item => item.inStock)
  .map(item => item.name)

console.log(findAllItem)

// 第八題:找出第一個超過 100 的數字
// 輸出:120

const allNumbers = [20, 45, 80, 120, 60]

const result = allNumbers.find(num => num > 100)

console.log(result)


// 第九題:判斷是否有黑名單乘客

const passengers = [
  { name: 'Alice', blacklisted: false },
  { name: 'Bob', blacklisted: false },
  { name: 'Charlie', blacklisted: true }
]

const blacklisted = passengers.every((passenger) => passenger.blacklisted === true)

console.log(blacklisted)

// 第十題:統計商品總庫存

const electronicProducts = [
  { name: 'Phone', stock: 10 },
  { name: 'Laptop', stock: 5 },
  { name: 'Tablet', stock: 8 }
]

function getTotalStock() {
  let total = 0

  for (let i = 0; i < electronicProducts.length; i++) {
    total += electronicProducts[i].stock
  }

  return total
}

console.log(getTotalStock())



// 第十一題:扁平化學生資料
// 輸出:["Tom","Amy","John","Sara"]

const classes = [
  {
    className: 'A',
    students: ['Tom','Amy']
  },
  {
    className: 'B',
    students: ['John','Sara']
  }
]

const results = classes.flatMap(item => item.students)

console.log(results)

// 第十二題:找出平均分數最高學生
// 輸出:{ name:"John", avg:92.33 }

const students = [
  { name: 'Tom', scores: [80,90,85] },
  { name: 'Amy', scores: [70,75,78] },
  { name: 'John', scores: [95,92,90] }
]

function getAvg(scores){
  const sum = scores.reduce((total, score) => total + score, 0)
  return Number((sum / scores.length).toFixed(2))
}


const topStudent = students.reduce((best, current) => {

  const bestAvg = getAvg(best.scores)
  const currentAvg = getAvg(current.scores)

  if(currentAvg > bestAvg){
    return current
  } else {
    return best
  }

})

const resultant = {
  name: topStudent.name,
  avg: getAvg(topStudent.scores)
}

console.log(resultant)

// 第十三題:統計每個國家的用戶數量
// 輸出:{
//  USA:2,
//  Taiwan:2,
//  Japan:1
// }

const users = [
  { name:'Tom', country:'USA'},
  { name:'Amy', country:'Taiwan'},
  { name:'John', country:'USA'},
  { name:'Sara', country:'Japan'},
  { name:'Mike', country:'Taiwan'}
]

function countCountry(){
  const result = {}

  for(let i = 0; i < users.length; i++){

    const country = users[i].country

    if(result[country]){
      result[country]++
    }else{
      result[country] = 1
    }

  }

  return result
}

console.log(countCountry())

//第十四題:隨機取 3 張圖片
// 隨機取 3 張

const photos = [
  { id:1, author:'A'},
  { id:2, author:'B'},
  { id:3, author:'C'},
  { id:4, author:'D'},
  { id:5, author:'E'}
]

const randomPhotos = photos
  .slice()
  .sort(() => Math.random() - 0.5)
  .slice(0,3)

console.log(randomPhotos)

// 第十五題:找出全校最高平均分學生
// {
//  className:"B",
//  name:"John",
//  avg:92.33
// }

const classStudents = [
  {
    className: 'A',
    students: [
      { name: 'Tom', scores: [80,90,85] },
      { name: 'Amy', scores: [70,75,78] }
    ]
  },
  {
    className: 'B',
    students: [
      { name: 'John', scores: [95,92,90] },
      { name: 'Sara', scores: [60,65,70] }
    ]
  }
]

function getAverage(scores) {
  const sum = scores.reduce((total, score) => total + score, 0)
  return Number((sum / scores.length).toFixed(2))
}

const allStudents = classStudents.flatMap(leaner =>
  leaner.students.map(student => ({
    className: leaner.className,
    name: student.name,
    scores: student.scores
  }))
)

const top = allStudents.reduce((best, current) => {
  const bestAvg = getAvg(best.scores)
  const currentAvg = getAvg(current.scores)

  if (currentAvg > bestAvg) {
    return current
  } else {
    return best
  }
})

const response = {
  className: top.className,
  name: top.name,
  avg: getAvg(top.scores)
}

console.log(response)
