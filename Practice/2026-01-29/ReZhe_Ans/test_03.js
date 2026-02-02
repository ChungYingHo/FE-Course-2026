// 題目：使用 Array.forEach 處理資料
//
// 已知以下陣列是從 API 取得的資料：
//
// const images = [
//   { id: '10', author: 'Paul Jarvis', download_url: 'https://picsum.photos/id/10/2500/1667' },
//   { id: '20', author: 'Alejandro Escamilla', download_url: 'https://picsum.photos/id/20/3670/2462' },
//   { id: '30', author: 'John Doe', download_url: 'https://picsum.photos/id/30/1280/901' }
// ]
//
// 請使用 Array.forEach，將所有作者名稱（author）
// 依序存入一個新的陣列 authors 中。
//
// 範例結果：
// ['Paul Jarvis', 'Alejandro Escamilla', 'John Doe']
//
// 注意：
// - 請使用 forEach
// - 不可使用 map、filter、reduce
// - authors 請自行宣告

const images = [
  { id: '10', author: 'Paul Jarvis', download_url: 'https://picsum.photos/id/10/2500/1667' },
  { id: '20', author: 'Alejandro Escamilla', download_url: 'https://picsum.photos/id/20/3670/2462' },
  { id: '30', author: 'John Doe', download_url: 'https://picsum.photos/id/30/1280/901' }
]

let authors = []

images.forEach((image) => {
  authors.push(image.author)
})

console.log(authors)
