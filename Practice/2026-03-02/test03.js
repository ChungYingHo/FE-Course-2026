// 你是一間學校的 IT 工程師，請撰寫一組程式並設計資料結構來做到以下功能：

// 1. 學生資料包含：姓名、學號、學期總成績
// 2. 可以新增學生資料
// 3. 可以刪除學生資料
// 4. 可以更新學生資料
// 5. 可以查詢學生資料
// 6. 可以快速查詢學生是否 all pass
// 提示：你需要寫至少 5 個 function 來實現以上功能，並且需要設計一個適合的資料結構來存儲學生資料。

const students = []

function addStudent(studentID, studentName, studentScore){
  students.push(
    {
      studentID,
      studentName,
      studentScore
    }
  )
}


function deleteStudent(studentID){
  const deleteFirst = students.findIndex((student) => {
    return student.studentID === studentID
  })
  if(deleteFirst === -1){
    return false
  }
  students.splice(deleteFirst, 1)
  return true
}


function newStudent(studentID, studentData){
  const target = students.find((student) => student.studentID === studentID)
  if(target === undefined){
    return false
  }
  if(studentData.studentName === undefined){

  }else {
    target.studentName = studentData.studentName
  }
  if(studentData.studentScore === undefined){

  }else{
    target.studentScore = studentData.studentScore
  }
  return true
}


function checkStudent(students){
  const checkOutStudent = students.find((student) => {
    return student.studentScore >= 250
  })
  return (checkOutStudent)
}


function hurryCheckStudent(students, passScore){
  for(let i = 0; i < students.length; i++){
    const score = students[i].studentScore

    if(score < passScore){
      return '沒有all pass'
    }
  }
  return '有all pass'
}


addStudent(1, 'Joe', 350)
addStudent(2, 'Alice', 430)
addStudent(3, 'Henry', 200)

console.log(students)

console.log(newStudent(3, { studentScore: 390 }))
console.log(checkStudent(students))

console.log(hurryCheckStudent(students, 250))
console.log(deleteStudent(1))
console.log(students)
