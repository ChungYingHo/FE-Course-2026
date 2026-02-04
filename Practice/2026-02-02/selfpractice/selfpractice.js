const students = [
  {
    id: 1,
    name: 'Alice',
    scores: { chinese: 85, math: 92, english: 88 },
    tags: ['leader', 'active']
  },
  {
    id: 2,
    name: 'Bob',
    scores: { chinese: 78, math: 81, english: 79 },
    tags: ['quiet']
  },
  {
    id: 3,
    name: 'Charlie',
    scores: { chinese: 90, math: 87, english: 93 },
    tags: ['active']
  },
  {
    id: 4,
    name: 'David',
    scores: { chinese: 60, math: 58, english: 55 },
    tags: ['needs-help', 'quiet']
  },
  {
    id: 5,
    name: 'Eve',
    scores: { chinese: 95, math: 94, english: 96 },
    tags: ['leader']
  }
]

// 進階題會用到：班級分組（巢狀資料）
const classes = [
  {
    className: 'A',
    students: [
      { name: 'Ann', scores: [80, 90, 70] },
      { name: 'Ben', scores: [60, 55, 72] },
      { name: 'Cat', scores: [88, 91, 84] }
    ]
  },
  {
    className: 'B',
    students: [
      { name: 'Dan', scores: [95, 92, 98] },
      { name: 'Eli', scores: [70, 73, 68] }
    ]
  }
]

// 第一題 : 印出所有學生的 name

function printName(student){
  for(let i = 0; i < student.length; i++){
    console.log(student[i].name)
  }
}

printName(students)

// 第二題 : 計算全班 math 總分

function classMath(leaner){
  let mathScore = 0

  for(let i = 0; i < leaner.length; i++){
    mathScore = mathScore + leaner[i].scores.math
  }
  console.log(mathScore)
}

classMath(students)

// 第三題 : 找出全班「三科平均最高」的學生

function average(students){
  let highStudent = students[0]
  let bestStudent =
    (students[0].scores.chinese + students[0].scores.math + students[0].scores.english) / 3

  for(let i = 1; i < students.length; i++){
    const bestAvg =
      (students[i].scores.chinese + students[i].scores.math + students[i].scores.english) / 3

    if(bestAvg > bestStudent){
      bestStudent = bestAvg
      highStudent = students[i]
    }
  }
  return highStudent
}

console.log(average(students))

// 第四題 :　回傳「英文不及格（<60）」的學生姓名陣列

function failEnglish(students){
  const failNames = []

  for(let i = 0; i < students.length; i++){
    if(students[i].scores.english < 60){
      failNames.push(students[i].name)
    }
  }
  return failNames
}

console.log(failEnglish(students))

// 第五題 :　計算標籤 tags 裡有 "leader" 的學生有幾位

function tagStudent(students){
  let count = 0

  for(let i = 0; i < students.length; i++){
    if(students[i].tags.includes('leader')){
      count ++
    }
  }
  return count
}

console.log(tagStudent(students))

// 第六題 : 用 map 產生新陣列
// 預計輸出:[{ name: "Alice", avg: 88.33 }, ...]

function newStudent(students){

  const newArr = students.map((arr) => {
    const newAvg = (arr.scores.chinese + arr.scores.math + arr.scores.english) / 3
    return{
      name: arr.name,
      avg : Number(newAvg.toFixed(2))
    }
  })
  return newArr
}

console.log(newStudent(students))

// 第七題 : 用 filter 找出「三科平均 >= 80」的學生

function averageStudent(students){
  const average = students.filter((novice) => (novice.scores.chinese + novice.scores.math + novice.scores.english) / 3 >= 80)
  return average
}

console.log(averageStudent(students))

// 第八題 : 用 find 找出 id === 4 的學生

function findStudent(students){
  return students.find((pupil) => pupil.id === 4)
}

console.log(findStudent(students))

// 第九題 : map 新增欄位 passed：平均 >= 60 → true，否則 false

function newPassed(students){
  const newField = students.map((field) => {
    const newAverage = (field.scores.chinese + field.scores.math + field.scores.english) / 3
    return {
      id : field.id,
      name : field.name,
      scores : field.scores,
      tags : field.tags,
      passed : newAverage >= 60
    }
  })
  return newField
}

console.log(newPassed(students))

// 第十題 : 雙 map（巢狀轉換）

const newClass = classes.map((scholar) => {
  return{
    className: scholar.className,
    students: scholar.students.map((stu) => {
      const avg = (stu.scores[0] + stu.scores[1] + stu.scores[2]) / 3
      return {
        name: stu.name,
        avg: Number(avg.toFixed(2))
      }
    })
  }
})

console.log(newClass)

// 第十一題 : 雙層統計（每班平均）

function totalAverage(classes){
  return classes.map((total) => {
    let totalScore = 0

    for(let i = 0; i < total.students.length; i++){
      const scores = total.students[i].scores
      totalScore = totalScore + scores[0] + scores[1] + scores[2]
    }
    const classAvg = totalScore / (total.students.length * 3)

    return{
      className : total.className,
      classAvg: Number(classAvg.toFixed(2))
    }
  })
}

console.log(totalAverage(classes))

// 第十二題 : 扁平化（flatten）進階題
function flattenStudent(classes){
  const flattenArr = classes.map((cls) => {
    return cls.students.map((stu) => {
      return {
        className: cls.className,
        name: stu.name,
        scores: stu.scores
      }
    })
  })
    .flat()

  return flattenArr
}

console.log(flattenStudent(classes))

// 第十三題 : 分組統計（tag group）

function groupTotal(){
  let result = {}

  for(let i = 0; i < students.length; i++){
    const tags = students[i].tags

    for(let j = 0; j < tags.length; j++){
      const tag = tags[j]

      if(result[tag] === undefined){
        result[tag] = 1
      }else{
        result[tag]++
      }
    }
  }
  return result
}

console.log(groupTotal(students))
