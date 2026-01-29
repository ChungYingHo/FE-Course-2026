/* eslint-disable no-undef */
async function func_01() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Hello, World!')
      resolve()
    }, 1000)
  })
}

async function main() {
  console.log('Hi, there!')
  await func_01()
  setTimeout(() => {
    console.log('Hi, JoJo!')

    setTimeout(() => {
      console.log('Hi, Jeremy!')
    }, 100)
  }, 10)
  console.log('Hi, everyone!')
}

main()


// 請寫出輸出順序
// Hi, there!
// Hello, World!
// Hi, everyone!
// Hi, JoJo!
// Hi, Jeremy!
