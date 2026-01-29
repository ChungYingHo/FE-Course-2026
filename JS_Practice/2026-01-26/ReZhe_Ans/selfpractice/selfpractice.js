// 第一題 : 印出 1～10
for(let i = 0; i <= 10; i++){
  console.log(i)
}

// 第二題 : 計算陣列總和
const nums = [3, 7, 2, 9]

function numsTotal(nums){
  let total = 0
  for(let i = 0; i < nums.length; i++){
    total = total + nums[i]
  }
  return total
}

console.log(numsTotal(nums))
// 第三題 : 找最大值
const scores = [88, 92, 75, 91]

function findTop(arr){
  let max = arr[0]

  for(let i = 1; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i]
    }
  }
  return max
}

console.log(findTop(scores))
// 第四題 : 計算偶數有幾個
const even = [1, 4, 6, 9, 10]

function evenNumber(second){
  let evenCount = 0

  for(let i = 0; i < second.length; i++){
    if(second[i] % 2 ===0){
      evenCount = evenCount +1
    }
  }
  return evenCount
}

console.log(evenNumber(even))
// 第五題 : 反轉字串
const str = 'hello'

function reverseWord(str){
  let reversedStr = ''

  for(let i = str.length -1; i >= 0; i--){
    reversedStr = reversedStr + str[i]
  }
  return reversedStr
}

console.log(reverseWord('hello'))

// 第六題 : 找出不及格的學生名字
const students = [
  { id: 1, name: 'Alice', score: 85 },
  { id: 2, name: 'Bob', score: 58 },
  { id: 3, name: 'Charlie', score: 92 },
  { id: 4, name: 'David', score: 77 }
]

function failStudent(){
  for(let i = 0; i < students.length; i++){
    if(students[i].score < 60){
      console.log(students[i].name)
    }
  }
}

failStudent()

// 第七題 : 計算平均分數
function averageScore(){
  let total = 0

  students.forEach((learner) => {
    total = total + learner.score
  })
  console.log(total / students.length)
}

averageScore()

// 第八題 : 找出分數最高的學生
function highStudent(higher){
  let highGrade = higher[0]

  for(let i = 1; i < higher.length; i++){
    if(higher[i] > highGrade.score){
      highGrade = higher[i]
    }
  }
  return highGrade
}

console.log(highStudent(students))

// 第九題 : 新增 passed 欄位
function newPassed(students){
  let newArr = students.map((fieldPass) =>{
    return{
      id : fieldPass.id,
      name : fieldPass.name,
      score : fieldPass.score,
      passed: fieldPass.score >= 60
    }
  })
  return newArr
}

console.log(newPassed(students))

// 第十題 : 用 id 找學生
function findId(students, targetId){
  const result = students.find((student) => student.id === targetId)
  console.log(result)
  return result
}

findId(students, 3)

// 第十一題 : 計算每個學生的等級
//規則：
// ≥ 90 → A
// ≥ 80 → B
// ≥ 70 → C
// 其餘 → D

function grade(score){
  switch(true){
  case score >= 90:
    return 'A'
  case score >= 80:
    return 'B'
  case score >= 70:
    return 'C'
  default:
    return 'D'
  }
}

console.log(grade(96))
console.log(grade(82))
console.log(grade(77))
console.log(grade(65))

// 第十二題 : 刪除指定 id 的學生
function removeStudentById(students, deleteID){
  const studentResult = []

  for(let i = 0; i < students.length; i++){
    if(students[i].id === deleteID){
      continue
    }
    studentResult.push(students[i])
  }
  return studentResult
}

console.log(removeStudentById(students, 2))

// 第十三題 : 檢查是否「全部及格」
function passStudent(students){
  for(let i = 0; i < students.length; i++){
    if(students[i].score < 60){
      return false
    }
  }
  return true
}

console.log(passStudent(students))

// 第十四題 : 找出第二高分
function secondHighStudent(list){
  const secondScore = []
  for (let i = 0; i < list.length; i++) {
    secondScore.push(list[i].score)
  }

  let secondStudent = []

  for(let i = 0; i < secondScore.length; i++){
    let exist = false

    for(let j = 0; j < secondStudent.length; j++){
      if(secondStudent[j] === secondScore[i]){
        exist = true
        break
      }
    }
    if(exist === false){
      secondStudent.push(secondScore[i])
    }
  }

  secondStudent.sort((a, b) => b - a)
  const secondHighest = secondStudent[1]
  const result = list.find((student) => student.score === secondHighest)
  return result
}

console.log(secondHighStudent(students))

// 第十五題 : 成績單產生器
function generateReport(student){
  let transcript = []
  let total = 0
  let highestScore = students[0].score
  let highestName = students[0].name
  let passedCount = 0
  let failedCount = 0

  for(let i = 0; i < students.length; i++){
    const score = students[i].score

    total = total + score

    if(score > highestScore){
      highestScore = score
      highestName = students[i].name
    }

    if(score >= 60){
      passedCount = passedCount + 1
    }else{
      failedCount = failedCount + 1
    }
  }

  const average = total / students.length

  return {
    average: Number(average.toFixed(1)),
    highest: highestName,
    passedCount: passedCount,
    failedCount: failedCount
  }
}

console.log(generateReport(students))





// 輸出:
// {
// average: 78.0,
// highest: "Charlie",
// passedCount: 3,
// failedCount: 1
//}


