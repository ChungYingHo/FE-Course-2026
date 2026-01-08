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
function calcAverageScoresForStudents(classmatesArray) {
  const result = []

  const classmatesResult = classmates.forEach(classmates => {

    const course = (classmates.chinese + classmates.math + classmates.english)/3

    result.push({
      name: classmates.name,
      average: Number(course.toFixed(2))
    })
  })
  return result
}

function calcAverageScoresForClass(classArray) {

  let totalChinese = 0
  let totalMath = 0
  let totalEnglish = 0

  classArray.forEach ( students => {
    totalChinese = totalChinese + students.chinese
    totalEnglish = totalEnglish + students.english
    totalMath = totalMath + students.math
  })

  const score = classArray.length

  return{
    chinese : Number((totalChinese / score).toFixed(2)),
    english : Number((totalEnglish / score).toFixed(2)),
    math : Number((totalMath / score).toFixed(2))
  }
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