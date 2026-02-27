// Think of a realistic scenario where you would use the `find` method to solve a problem.

// 答案:

const employees = [
  {id: 1 , name: 'Joe'},
  {id: 2 , name: 'Alice'},
  {id: 3 , name: 'Duke'},
  {id: 4 , name: 'JoJo'}
]

const result = employees.find((employee) => employee.id === 3)

console.log(result)

// 文字解釋:
// 這份模擬如果有一份公司的員工編號，如果要直接去尋找那位員工叫:Duke的人，使用find直接做尋找{id:3, name:'Duke'}的人。
