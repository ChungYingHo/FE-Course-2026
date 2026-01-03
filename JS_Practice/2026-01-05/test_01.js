const classmates = [
  {
    name: "Alice",
    chinese: 85,
    math: 92,
    english: 88
  },
  {
    name: "Bob",
    chinese: 78,
    math: 81,
    english: 79
  },
  {
    name: "Charlie",
    chinese: 90,
    math: 87,
    english: 93
  }
]

// Please implement the following two functions:
function calcAverageScoresForStudents() {

}

function calcAverageScoresForClass() {

}

// Expected output:
const studentResult = calcAverageScoresForStudents(classmates)
console.log(studentResult)
// [
//   { name: "Alice", average: 88.33 },
//   { name: "Bob", average: 79.33 },
//   { name: "Charlie", average: 90.00 }
// ]

const classResult = calcAverageScoresForClass(classmates)
console.log(classResult)
// { chinese: 84.33, math: 86.67, english: 86.67 }