const students = [
  { id: 1, name: 'Alice', scores: { chinese: 85, math: 92, english: 88 }, tags: ['leader', 'active'] },
  { id: 2, name: 'Bob', scores: { chinese: 78, math: 81, english: 79 }, tags: ['quiet'] },
  { id: 3, name: 'Charlie', scores: { chinese: 90, math: 87, english: 93 }, tags: ['active'] },
  { id: 4, name: 'David', scores: { chinese: 60, math: 58, english: 55 }, tags: ['needs-help', 'quiet'] },
  { id: 5, name: 'Eve', scores: { chinese: 95, math: 94, english: 96 }, tags: ['leader'] },
]

const classes = [
  {
    className: 'A',
    students: [
      { name: 'Ann', scores: [80, 90, 70] },
      { name: 'Ben', scores: [60, 55, 72] },
      { name: 'Cat', scores: [88, 91, 84] },
    ],
  },
  {
    className: 'B',
    students: [
      { name: 'Dan', scores: [95, 92, 98] },
      { name: 'Eli', scores: [70, 73, 68] },
    ],
  },
]


// 第一題 : 印出所有學生的 name

for(let i = 0; i < students.length; i++){
  console.log(students[i].name)
}


// 第二題 : 計算全班 math 總分

function classMath(grade){
  let mathScore = 0
  for(let i = 0; i < grade.length; i++){
    mathScore = mathScore + grade[i].scores.math
  }
  return mathScore
}

console.log(classMath(students))

// 第三題 : 找出全班「三科平均最高」的學生

function averageHighClass(student){
  let averageScore = student[0]
  let averageScoreHigh = (student[0].scores.chinese + student[0].scores.math + student[0].scores.english) / 3


  for(let i = 1; i < student.length; i++){
    const classAvg = (student[i].scores.chinese + student[i].scores.math + student[i].scores.english) / 3

    if(classAvg > averageScoreHigh){
      averageScoreHigh = classAvg
      averageScore = student[i]
    }
  }
  return averageScore
}

console.log(averageHighClass(students))

// 第四題 :　回傳「英文不及格（<60）」的學生姓名陣列

function englishFail(student){
  let fieldResult = []

  for (let i = 0; i < student.length; i++){
    if(student[i].scores.english < 60){
      fieldResult.push(student[i].name)
    }
  }
  return fieldResult
}

console.log(englishFail(students))

// 第五題 :　計算標籤 tags 裡有 "leader" 的學生有幾位

function tagLeaderStudent(student){
  let count = 0
  for(let i = 0; i < student.length; i++){
    if(student[i].tags.includes('leader')){
      count ++
    }
  }
  return count
}

console.log(tagLeaderStudent(students))

// 第六題 : 用 map 產生新陣列
// 預計輸出:[{ name, avg }]、（avg 小數點 2 位）

const newArr = students.map((student) => {
  const newAvg = (student.scores.chinese + student.scores.math + student.scores.english) / 3

  return{
    name : student.name,
    avg : Number(newAvg.toFixed(2))
  }
})

console.log(newArr)

// 第七題 : 用 filter 找出「三科平均 >= 80」的學生

const avgStudent = students.filter((student) => (student.scores.chinese + student.scores.math + student.scores.english) / 3  >= 80)

console.log(avgStudent)

// 第八題 : 用 find 找出 id === 4 的學生

const findIdStudent = students.find((student) => student.id === 4)

console.log(findIdStudent)

// 第九題 : map 新增欄位 passed：平均 >= 60 → true，否則 false

const newPassed = students.map((student) => {
  const average = (student.scores.chinese + student.scores.math + student.scores.english) / 3

  return{
    id : student.id,
    name : student.name,
    scores : student.scores,
    tags : student.tags,
    passed : average >= 60
  }
})

console.log(newPassed)

// 第十題 : 雙 map（巢狀轉換）
// 預計輸出:[{ className, students: [{ name, avg }...] }, ...]

const newClass = classes.map((rank) => {
  return{
    className : rank.className,
    students : rank.students.map((sub) => {
      const classAvg = (sub.scores[0] + sub.scores[1] + sub.scores[2]) / 3
      return{
        name : sub.name,
        avg : Number(classAvg.toFixed(2))
      }
    })
  }
}
)

console.log(newClass)

// 第十一題 : 雙層統計（每班 classAvg）
// 回傳：[{ className, classAvg }]

const result = classes.map((rank) => {
  let sumAvg = 0

  for(let i = 0; i < rank.students.length; i++){
    const sum = rank.students[i]

    const studentAvg = (sum.scores[0] + sum.scores[1] + sum.scores[2]) / 3

    sumAvg += studentAvg
  }
  const classAvg = sumAvg / rank.students.length

  return {
    className: rank.className,
    classAvg: Number(classAvg.toFixed(2))
  }
})

console.log(result)

// 第十二題 : 扁平化（flatten）進階題
// 輸出:[{ className:"A", name:"Ann", scores:[...] }, ...]

const flatStudents = []

for(let i = 0; i < classes.length; i++) {
  const oneClass = classes[i]

  for(let j = 0; j < oneClass.students.length; j++) {
    const s = oneClass.students[j]

    flatStudents.push({
      className : oneClass.className,
      name : s.name,
      scores : s.scores
    })
  }
}

console.log(flatStudents)

// 第十三題 : 分組統計（tag group）
// 輸出:{ leader: 2, active: 2, quiet: 2, "needs-help": 1 }

const tagCount = {}

for (let i = 0; i < students.length; i++){
  const oneStudent = students[i]

  for (let j = 0; j < oneStudent.tags.length; j++){
    const tag = oneStudent.tags[j]

    if (tagCount[tag] === null) {
      tagCount[tag] = 0
    }

    tagCount[tag] += 1
  }
}

console.log(tagCount)
