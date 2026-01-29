const studentsScore = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 92 },
  { name: 'Charlie', score: 78 },
  { name: 'David', score: 90 },
  { name: 'Eve', score: 88 }
]


// 1. 請計算班級的平均分數並輸出
function averageScore(){
  let total = 0

  studentsScore.forEach((student) => {
    total += student.score
  })
  console.log(total / studentsScore.length)
}

averageScore()

// 2. 請找出分數最高的學生並輸出其姓名和分數
function highScore(student){
  let maxScore = 0

  for(let i = 0; i < student.length; i++){
    if( maxScore < student[i].score){
      maxScore = student[i].score
    }
  }
  console.log(maxScore)
}

highScore(studentsScore)

// 3. 請找出分數高於 90 分的學生並輸出其姓名列表
function secondHighStudent(student){
  let newStudent = []

  for(let i = 0; i < studentsScore.length; i++){
    if(student[i].score > 90){
      newStudent.push(student[i].name)
    }
  }
  return(newStudent)
}

console.log(secondHighStudent(studentsScore))

// 4. 請找出 Alice 的分數並輸出
const findAlice = studentsScore.find((student) => student.name )

if(findAlice){
  console.log(`${findAlice.score}`)
}else{
  console.log(undefined)
}

console.log(findAlice)
