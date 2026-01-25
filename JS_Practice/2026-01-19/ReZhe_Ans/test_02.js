async function test() {
  console.log(1)

  const result = await getValue()

  console.log(result)
  console.log(4)
}

function getValue() {
  console.log(2)

  return Promise.resolve(3)
}

console.log(0)
test()
console.log(5)

// 請寫出輸出順序
// 0
// 1
// 2
// 5
// 3
// 4

