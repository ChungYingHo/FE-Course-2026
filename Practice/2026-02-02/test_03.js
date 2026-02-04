// =======================================
// 本週考題：Array.map（多層資料結構）
// =======================================
//
// 說明：
// 以下是一個「模擬 API response」的資料結構
//
// 請使用 Array.map()，將資料轉換成新的陣列
//
// 轉換規則：
// 1. 最終結果必須是一個「一維陣列」
// 2. 每一筆資料需轉換成一個物件，包含：
//    - id：圖片 id
//    - author：作者名稱
//    - url：圖片網址（download_url）
//
// 規定：
// - 必須使用 Array.map()
// - 不可使用 for / forEach / filter / reduce
// - 不可修改原始資料
//

const response = {
  status: 200,
  page: 1,
  total: 2,
  data: [
    {
      album: 'Nature',
      images: [
        {
          id: '10',
          author: 'Paul Jarvis',
          download_url: 'https://picsum.photos/id/10/2500/1667'
        },
        {
          id: '11',
          author: 'Paul Jarvis',
          download_url: 'https://picsum.photos/id/11/2500/1667'
        }
      ]
    },
    {
      album: 'People',
      images: [
        {
          id: '20',
          author: 'John Doe',
          download_url: 'https://picsum.photos/id/20/3670/2462'
        },
        {
          id: '21',
          author: 'John Doe',
          download_url: 'https://picsum.photos/id/21/3670/2462'
        }
      ]
    }
  ]
}

// TODO：
// 請使用 Array.map()
// 將 response.data 中的所有 images
// 轉換成以下格式的一維陣列：

/*
[
  { id: '10', author: 'Paul Jarvis', url: 'https://picsum.photos/id/10/2500/1667' },
  { id: '11', author: 'Paul Jarvis', url: 'https://picsum.photos/id/11/2500/1667' },
  { id: '20', author: 'John Doe', url: 'https://picsum.photos/id/20/3670/2462' },
  { id: '21', author: 'John Doe', url: 'https://picsum.photos/id/21/3670/2462' }
]
*/

// 提示（不給解法）：
// - data 本身是一個陣列
// - data 裡的每一項，都還有一個 images 陣列
// - 可以思考「map 裡面再 map」
// - 注意最終結果的陣列結構（是不是多了一層）

const result = response.data.map((person) => {
  return person.images.map((photo) => {
    return{
      id: photo.id,
      author : photo.author,
      url: photo.download_url
    }
  })
})

console.log(result)
