// Think of a realistic scenario where you would use the `map` method to solve a problem.

// 答案:
// 學生、旅客、溫度不行

const users = [
  {id: 1, name: 'Alice', age: 23 },
  {id: 2, name: 'Ben', age: 18 },
  {id: 3, name: 'Joe', age: 28 },
  {id: 4, name: 'Leo', age: 15}
]

const newArr = users.map((user) => {
  let userIsAdult = user.age >= 20
  const result = {
    id: user.id,
    name: user.name,
    age: user.age,
    adult: userIsAdult
  }

  return result
})

console.log(newArr)

// 文字敘述:
// 這份模擬使用者年齡資料，透過map來去遍歷users裡面的物件，來去做出user的年齡有>=20歲的人就是大人
// 由於map會回傳一個新的陣列出來，所以在做一個變數result來做為回傳新陣列的資料。
