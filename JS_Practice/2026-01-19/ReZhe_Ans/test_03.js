const studentsScore = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 92 },
  { name: 'Charlie', score: 78 },
  { name: 'David', score: 90 },
  { name: 'Eve', score: 88 }
]


// 1. 請計算班級的平均分數並輸出
function classHighScore(){
  let classScore = 0

  studentsScore.forEach((student) => {
    classScore += student.score
  })
  console.log(classScore / studentsScore.length)
}

classHighScore()

// 2. 請找出分數最高的學生並輸出其姓名和分數
function highestScore(students){
  if(students.length === 0) return null

  let maxScore = students[0].score
  for(let i = 1; i < students.length; i++){
    if(students[i].score > maxScore){
      maxScore = students[i].score
    }
  }
  const topStudent = students.find((studentsHigh) => studentsHigh.score === maxScore)
  return topStudent
}

const topScore = highestScore(studentsScore)
console.log(`最高分學生：${topScore.name}，分數：${topScore.score}`)

// 3. 請找出分數高於 90 分的學生並輸出其姓名列表
function secondHighScore(student){
  const result = []

  for(let i = 0; i < student.length; i++){
    if(student[i].score > 90){
      result.push(student[i].name)
    }
  }
  return result
}

console.log(secondHighScore(studentsScore))

// 4. 請找出 Alice 的分數並輸出
const findAlice = studentsScore.find(student => student.name === 'Alice')

if(findAlice){
  console.log(`Alice 的分數是 ${findAlice.score}`)
}else{
  console.log('找不到 Alice')
}
