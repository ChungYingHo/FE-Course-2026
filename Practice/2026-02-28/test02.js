const students = [
  { id: 1, name: 'Alice', score: 85 },
  { id: 2, name: 'Bob', score: 92 },
  { id: 3, name: 'Charlie', score: 78 },
  { id: 4, name: 'David', score: 90 },
  { id: 5, name: 'Eve', score: 88 },
  { id: 6, name: 'Frank', score: 75 }
]

// 且寫一個程式將學生名單按分數由高到低排序，並回傳排序後的學生名單

students.sort((a, b) => b.score -  a.score)

console.log(students)
