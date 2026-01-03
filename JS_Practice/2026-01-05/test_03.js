/**
 * There is a bug in the following code that calculates the average score of students.
 * Identify and fix the bug so that the code works as intended.
 * You should not change the overall structure of the code.
 * All you need to do is to fix the bug(s).
 */

const students = [
  { name: "Alice", scores: [80, 90, 100] },
  { name: "Bob", scores: [70, 85, 90] }
]

function calculateAverage(scores) {
  let total = 0
  for (let i = 0; i <= scores.length; i++) {
    total += scores[i]
  }
  return total / scores.length
}

function getStudentAverages(students) {
  return students.map(student => {
    return {
      name: student.name,
      average: calculateAverage(student.scores)
    }
  })
}

const result = getStudentAverages(students)
console.log(result)

/**
 * Expected output:
 * [
 *   { name: "Alice", average: 90 },
 *   { name: "Bob", average: 81.67 }
 * ]
 */
