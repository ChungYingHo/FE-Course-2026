const students = [
  { id: 1, name: 'Alice', chinese: 85, math: 92, english: 88 },
  { id: 2, name: 'Bob', chinese: 78, math: 81, english: 79 },
  { id: 3, name: 'Charlie', chinese: 90, math: 87, english: 93 },
  { id: 4, name: 'David', chinese: 60, math: 58, english: 65 },
  { id: 5, name: 'Eve', chinese: 95, math: 94, english: 96 },
  { id: 6, name: 'Joe', chinese: 66, math: 77, english: 55 },
  { id: 7, name: 'Zoe', chinese: 70, math: 60, english: 40 }
]

// 第一題 : 印出每位學生的姓名
function studentName(students){
  for(let i = 0; i < students.length; i++){
    console.log(students[i].name)
  }
}

studentName(students)

// 第二題 : 計算全班「數學」總分
function classMath(student){
  let totalMath = 0

  for(let i = 0; i < student.length; i++){
    totalMath = totalMath + student[i].math
  }
  return totalMath
}

console.log(classMath(students))

// 第三題 : 找出「三科平均最高」的學生姓名
function averageHigh(high){
  let totalHigh = 0
  let highName = ''

  for(let i = 0; i < high.length; i++){
    const avg = (high[i].chinese + high[i].math + high[i].english) / 3

    if(avg > totalHigh){
      totalHigh = avg
      highName = high[i].name
    }
  }
  return highName
}

console.log(averageHigh(students))

// 第四題 : 計算有幾位學生「三科平均 ≥ 80」
function allStudent(threeAverage){
  let howManyStudent = 0

  for(let i = 0; i < threeAverage.length; i++){
    const studentAvg = (threeAverage[i].chinese + threeAverage[i].math + threeAverage[i].english) / 3

    if(studentAvg >= 80){
      howManyStudent ++
    }
  }
  return howManyStudent
}

console.log(allStudent(students))

// 第五題 : 找出英文不及格（<60）的學生姓名陣列
function failStudent(fail){
  let failName = []

  for(let i = 0; i < fail.length; i++){
    if(fail[i].english <= 60){
      failName.push(fail[i].name)
    }
  }
  return failName
}

console.log(failStudent(students))

// 第六題 : 用 forEach 計算全班平均分數
function averageClass(){
  let averageStudent = 0

  students.forEach((leaner) => {
    const studentAvg = (leaner.chinese + leaner.math + leaner.english)/3
    averageStudent = averageStudent + studentAvg
  })
  console.log((averageStudent / students.length).toFixed(2))
}

averageClass()

// 第七題 : 用 map 產生新陣列：
function newArr(students){
  return students.map((novice) => {
    const newStudent = (novice.chinese + novice.math + novice.english) / 3
    return{
      name : novice.name,
      average : Number(newStudent.toFixed(2))
    }
  })
}

console.log(newArr(students))

// 第八題 : 用 filter 找出「三科平均 ≥ 85」的學生
function averageStudent(){
  return students
    .filter((pupil) => (pupil.chinese + pupil.math + pupil.english) / 3 >= 85 )
    .map((pupil) => {
      const pupilAvg =((pupil.chinese + pupil.math + pupil.english) / 3)
      return{
        name : pupil.name,
        average : Number(pupilAvg.toFixed(2))
      }
    })
}

console.log(averageStudent())

// 第九題 : 用 find 找出 id = 3 的學生物件
function findStr(target){
  const findResult = students.find((findTarget) => findTarget.id === target)
  console.log(findResult)
}

findStr(3)

// 第十題 : 用 map 新增欄位 passed
function newPassed(){
  const newStudentPassed = students.map((newField) => {
    const passedAvg = (newField.chinese + newField.math + newField.english) / 3
    return{
      id : newField.id,
      name : newField.name,
      chinese : newField.chinese,
      math : newField.math,
      english : newField.english,
      passed : passedAvg >= 60
    }
  })
  return newStudentPassed
}

console.log(newPassed())

// 第十一題 : 判斷是否「全班都及格」
function allPass(students){
  const passClass = students.filter((newPassed) => {
    const passAvg = (newPassed.chinese + newPassed.math + newPassed.english) / 3
    return passAvg <= 60
  })
  return passClass.length === 0
}

console.log(allPass(students))

// 第十二題 : 回傳每科的平均分數
function everyAvg(students){
  let avgChinese = 0
  let avgMath = 0
  let avgEnglish = 0

  students.forEach((avgSubject) => {
    avgChinese = avgChinese + avgSubject.chinese
    avgMath = avgMath + avgSubject.math
    avgEnglish = avgEnglish + avgSubject.english
  })
  return{
    chinese : Number((avgChinese / students.length).toFixed(2)),
    math : Number((avgMath / students.length).toFixed(2)),
    english : Number((avgEnglish / students.length).toFixed(2))
  }
}

console.log(everyAvg(students))

