const passengers = [
  { passengerNumber: 2569, name: 'Alice' },
  { passengerNumber: 1023, name: 'Bob' },
  { passengerNumber: 4785, name: 'Charlie' },
  { passengerNumber: 3890, name: 'David' },
  { passengerNumber: 1502, name: 'Eve' },
]

const passengerInfos = [
  { passengerNumber: 2569, withInfant: true, age: 30 },
  { passengerNumber: 1023, withInfant: false, age: 45 },
  { passengerNumber: 4785, withInfant: false, age: 25 },
  { passengerNumber: 3890, withInfant: true, age: 70 },
  { passengerNumber: 1502, withInfant: false, age: 29 },
]

// 請輸出一個陣列列出有帶嬰兒的乘客姓名
// 預期輸出：
// [ 'Alice', 'David' ]


// 年紀超過 60 的乘客需要特別關照，請輸出一個陣列列出這些乘客的姓名
// 預期輸出：
// [ 'David' ]
