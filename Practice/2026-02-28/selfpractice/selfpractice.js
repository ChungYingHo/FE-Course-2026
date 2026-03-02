// 第一題:計算總和

const num = [10, 20, 30, 40, 50]

function total(){
  let sum = 0

  for(let i = 0; i < num.length; i++){
    sum += num[i]
  }
  return sum
}

console.log(total())

// 第二題:找出偶數

const nums = [3, 8, 15, 22, 7, 10]

function findEven(){
  const even = []

  for(let i = 0; i < nums.length; i++){
    if(nums[i] % 2 === 0){
      even.push(nums[i])
    }
  }
  return even
}

console.log(findEven())

// 第三題:反轉字串

const str = 'JoJo'

const reverse = str
  .split('')
  .reverse()
  .join('')

console.log(reverse)

// 第四題:陣列去重

const arr = [1, 2, 2, 3, 4, 4, 5]

const repeat = [...new Set(arr)]

console.log(repeat)

// 第五題:出現次數統計
// 輸出:{
//  apple: 3,
//  banana: 2,
//  orange: 1
// }

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']

function frequency(fruit){
  let result = {}

  for(let i = 0; i < fruit.length; i++){
    const item = fruit[i]

    if(result[item] === undefined){
      result[item] = 1
    }else{
      result[item]++
    }
  }
  return result
}

console.log(frequency(fruits))

// 第六題:找出高於 80 分的人

const students = [
  { name: 'Tom', score: 75 },
  { name: 'Amy', score: 88 },
  { name: 'John', score: 92 },
  { name: 'Sara', score: 60 }
]

function findHighPerson(){
  let high = []

  for(let i = 0; i < students.length; i++){
    if(students[i].score >= 80)
      high.push(students[i])
  }
  return high
}

console.log(findHighPerson())

// 第七題:承上題，只取名字
// 輸出:["Amy", "John"]

function getName(){
  let personName = []

  for(let i = 0; i < students.length; i++){
    if(students[i].score > 80){
      personName.push(students[i].name)
    }
  }
  return personName
}

console.log(getName())

// 第八題:加上等級
// 幫每個學生加上 grade：
// 90↑ → A
// 80↑ → B
// 70↑ → C
// 其他 → D

const newArr = students.map((student) => {
  let grade

  switch(true){
  case student.score >= 90:
    grade = 'A'
    break

  case student.score >= 80:
    grade = 'B'
    break

  case student.score >= 70:
    grade = 'C'
    break

  default:
    grade = 'D'
  }

  const result = {
    name: student.name,
    score: student.score,
    grade: grade
  }
  return result
})

console.log(newArr)

// 第九題:找最高分

function findHightStudent(students){
  let highStudent = students[0]

  for(let i = 1; i < students.length; i++){
    if(students[i].score > highStudent.score){
      highStudent = students[i]
    }
  }
  return highStudent
}

console.log(findHightStudent(students))

// 第十題:依分數排序（由高到低）

students.sort((a, b) => b.score - a.score)

console.log(students)

// 第十一題:計算平均分，算出全班平均分數（保留兩位小數）

function allAverageClass(students){
  let average = 0

  for(let i = 0; i < students.length; i++){
    average = average + students[i].score
  }
  const averageScore = average / students.length
  return Number(averageScore.toFixed(2))
}

console.log(allAverageClass(students))

// 第十二題:分組統計
// 輸出:{
//  food: 320,
//  drink: 130
// }

const orders = [
  { category: 'food', amount: 120 },
  { category: 'drink', amount: 80 },
  { category: 'food', amount: 200 },
  { category: 'drink', amount: 50 }
]

const group = orders.reduce((acc, item) => {
  if(acc[item.category] === undefined){
    acc[item.category] = 0
  }
  acc[item.category] = acc[item.category] + item.amount
  return acc
}, {})

console.log(group)

// 第十三題:判斷是否全部及格
// 是否所有學生都 >= 60？

const allStudentPass = students.every(student => student.score >= 60)

console.log(allStudentPass)

//第十四題:扁平化 + 統計平均
// 輸出:{
//  className: "B",
//  name: "John",
//  avg: 92.33
// }

const classes = [
  {
    className: 'A',
    students: [
      { name: 'Tom', scores: [80, 90, 85] },
      { name: 'Amy', scores: [70, 75, 78] }
    ]
  },
  {
    className: 'B',
    students: [
      { name: 'John', scores: [95, 92, 90] },
      { name: 'Sara', scores: [60, 65, 70] }
    ]
  }
]

function avg(scores){
  const sum  =scores.reduce((acc, n) => acc + n, 0)
  return Number((sum / scores.length).toFixed(2))
}

const allStudents = classes.flatMap(c => {
  return c.students.map(s => {
    return {
      className: c.className,
      name: s.name,
      scores: s.scores
    }
  })
})

const top = allStudents.reduce((best, current) => {
  if (avg(current.scores) > avg(best.scores)) {
    return current
  } else {
    return best
  }
})

const result = {
  className: top.className,
  name: top.name,
  avg: avg(top.scores)
}

console.log(result)


// 第十五題:API 思維題（模擬後端資料）
// 只顯示有庫存商品
// 計算所有有庫存商品總價
// 找出最貴商品
// 將商品價格由低到高排序

const products = [
  { id: 1, name: 'T-shirt', price: 500, inStock: true },
  { id: 2, name: 'Shoes', price: 1500, inStock: false },
  { id: 3, name: 'Hat', price: 300, inStock: true }
]

const inStockProducts = products.filter((product) => product.inStock === true)
console.log('有庫存商品:', inStockProducts)

const totalInStockPrice = inStockProducts.reduce((acc, product) => acc + product.price, 0)
console.log(totalInStockPrice)

const mostExpensive = products.reduce((best, current) => {
  if (current.price > best.price) {
    return current
  } else {
    return best
  }
})

console.log('最貴商品:', mostExpensive)

const sortPrice= products.slice().sort((a, b) => a.price - b.price)
console.log('由低到高排序:', sortPrice)

