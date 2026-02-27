const classes = [
  {
    className: 'A',
    students: [
      { id: 1, name: 'Ann', scores: [80, 90, 70], tags: ['active'] },
      { id: 2, name: 'Ben', scores: [60, 55, 72], tags: ['quiet', 'needs-help'] },
      { id: 3, name: 'Cat', scores: [88, 91, 84], tags: ['leader', 'active'] },
    ],
  },
  {
    className: 'B',
    students: [
      { id: 4, name: 'Dan', scores: [95, 92, 98], tags: ['leader'] },
      { id: 5, name: 'Eli', scores: [70, 73, 68], tags: ['quiet'] },
    ],
  },
]

// 第一題:計算全校有幾位學生

function howManyStudents(){
  let count = 0

  for(let i = 0; i < classes.length; i++){
    count = count + classes[i].students.length
  }
  return count
}

console.log(howManyStudents())


// 第二題:找出所有學生名字（用 forEach 或 map）
// 輸出：["Ann", "Ben", "Cat", "Dan", "Eli"]

const names = []

classes.forEach((oneClass) => {
  oneClass.students.forEach((student) => {
    names.push(student.name)
  })
})

console.log(names)

// 第三題:找出「平均 >= 80」的學生名字
// 輸出:["Ann", "Cat", "Dan"]

const allStudents = classes.flatMap((classStudent) => classStudent.students)

const betterStudents = allStudents.filter((student) => {
  const avg = (student.scores[0] + student.scores[1] + student.scores[2]) / 3
  return avg >= 80
})

const studentName = betterStudents.map((student) => student.name)

console.log(studentName)

// 第四題:檢查是否「至少有一個學生」有 tag 包含 "needs-help"

const oneStudent = classes.some((student) => student.tags === 'needs-help')

console.log(oneStudent)

// 第五題:雙map
// 輸出:[
//  { className: "A", students: [{ name: "Ann", avg: 80.00 }, ...] },
//  { className: "B", students: [{ name: "Dan", avg: 95.00 }, ...] }
// ]

const newArr = classes.map((oneClass) => {
  return{
    className: oneClass.className,
    students: oneClass.students.map((student) => {
      const avg = (student.scores[0] + student.scores[1] + student.scores[2]) / 3

      const result = {
        name: student.name,
        avg: Number(avg.toFixed(2))
      }
      return result
    })
  }
})

console.log(newArr)

// 第六題:雙層統計：每班平均分 classAvg
// 輸出:[
//  { className: "A", classAvg: 76.67 },
//  { className: "B", classAvg: 82.17 }
// ]

const classTotal = classes.map((oneClass) => {
  let sumAvg = 0

  for(let i = 0; i < oneClass.students.length; i++){
    const student = oneClass.students[i]
    const studentAvg = (student.scores[0] + student.scores[1] + student.scores[2]) / 3

    sumAvg += studentAvg
  }
  const classAvg = sumAvg / oneClass.students.length

  return{
    className: oneClass.className,
    classAvg: Number(classAvg.toFixed(2))
  }
})

console.log(classTotal)

// 第七題:扁平化（flatten）
// 輸出:[
//  { className: "A", id: 1, name: "Ann", scores: [...], tags: [...] },
//  ...
// ]

const flatArr = []

for(let i = 0; i < classes.length; i++){
  const oneClass = classes[i]

  for(let j = 0; j < oneClass.students.length; j++){
    const student = oneClass.students[j]

    flatArr.push({
      className: oneClass.className,
      id: student.id,
      name: student.name,
      scores: student.scores,
      tags: student.tags
    })
  }
}

console.log(flatArr)

// 第八題:分組統計（tag 次數）
// 輸出:{ active: 2, quiet: 2, "needs-help": 1, leader: 2 }

const count = 0

for(let i = 0; i < classes.length; i++){
  const oneClass = classes[i]

  for(let j = 0; j < oneClass.students.length; j++){
    const student = oneClass.students[j]

    for(let k = 0; k < student.tags.length; k++){
      const tag = student.tags[k]

      if(count[tag] === undefined){
        count[tag] = 0
      }
      count[tag] += 1
    }
  }
}

console.log(count)

// 第九題:用 reduce 算出「全校三科總分的總和」

const allStudent  = classes.flatMap((learner) => learner.students)

const totalScore = allStudent.reduce((average, student) => {
  const sum = student.scores[0] + student.scores[1] + student.scores[2]
  return average + sum
},0)

console.log(totalScore)

// 第十題:找出每班 Top1（平均最高）學生
// 輸出:[
//  { className: "A", name: "Cat", avg: 87.67 },
//  { className: "B", name: "Dan", avg: 95.00 }
// ]

const classTop = classes.map((oneClass) => {

  const topStudent = oneClass.students.reduce((best, current) => {

    const currentAvg =
      (current.scores[0] + current.scores[1] + current.scores[2]) / 3

    const bestAvg =
      (best.scores[0] + best.scores[1] + best.scores[2]) / 3

    if (currentAvg > bestAvg) {
      return current
    } else {
      return best
    }
  })

  const avg =
    (topStudent.scores[0] + topStudent.scores[1] + topStudent.scores[2]) / 3

  return {
    className: oneClass.className,
    name: topStudent.name,
    avg: Number(avg.toFixed(2))
  }
})

console.log(classTop)

// 第十一題:綜合題：找出「全校 Top1」
// 輸出:{ className: "B", name: "Dan", avg: 95.00 }

function studentTop(scores){
  const avg = (scores[0] + scores[1] + scores[2]) /3
  return Number(avg.toFixed(2))
}

const Student = classes.flatMap((learner) =>
{ return learner.students.map((student) =>
{return {
  className: learner.className,
  id: student.id,
  name: student.name,
  scores: student.scores,
  tags: student.tags
}
})
})

const topStudent = Student.reduce((best, current) =>
{ const bestAvg = studentTop(best.scores)
  const currentAvg = studentTop(current.scores)
  if (currentAvg > bestAvg) {
    return current
  } else {
    return best
  }
})

const schoolTop = {
  className: topStudent.className,
  name: topStudent.name,
  avg: studentTop(topStudent.scores)
}

console.log(schoolTop)




// 第十二題:檢查是否「每一班都至少有一位 leader」

const allStudentsHaveLeader = classes.every((oneClass) => {
  return oneClass.students.some((student) => student.tags.includes('leader'))
})

console.log(allStudentsHaveLeader)
