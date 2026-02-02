// 題目：使用 Array.map 轉換資料
//
// 已知以下陣列是從 API 取得的資料：
//
// const images = [
//   { id: '10', author: 'Paul Jarvis', download_url: 'https://picsum.photos/id/10/2500/1667' },
//   { id: '20', author: 'Alejandro Escamilla', download_url: 'https://picsum.photos/id/20/3670/2462' },
//   { id: '30', author: 'John Doe', download_url: 'https://picsum.photos/id/30/1280/901' }
// ]
//
// 請使用 Array.map，將資料轉換成以下格式：
//
// [
//   { id: '10', imageUrl: 'https://picsum.photos/id/10/2500/1667' },
//   { id: '20', imageUrl: 'https://picsum.photos/id/20/3670/2462' },
//   { id: '30', imageUrl: 'https://picsum.photos/id/30/1280/901' }
// ]
//
// 注意：
// - 請使用 map
// - 不要直接修改原本的 images 陣列
const images = [
  { id: '10', author: 'Paul Jarvis', download_url: 'https://picsum.photos/id/10/2500/1667' },
  { id: '20', author: 'Alejandro Escamilla', download_url: 'https://picsum.photos/id/20/3670/2462' },
  { id: '30', author: 'John Doe', download_url: 'https://picsum.photos/id/30/1280/901' }
]

const newApi = images.map((photo) =>{
  return{
    id : photo.id,
    imageUrl : photo.download_url
  }
})

console.log(newApi)
