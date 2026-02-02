// =======================================
// 本週考題：Array.filter（資料篩選）
// =======================================
//
// 說明：
// 以下是一個「模擬 API response」的資料結構
//
// 請使用 Array.filter()，依照條件篩選資料
//
// 篩選規則：
// 1. 只保留 author 為 "Paul Jarvis" 的圖片
// 2. 並且圖片寬度（width）需大於等於 3000
//
// 規定：
// - 必須使用 Array.filter()
// - 不可使用 for / forEach
// - 不可修改原始資料
//

const response = {
  status: 200,
  data: [
    {
      id: '10',
      author: 'Paul Jarvis',
      width: 2500,
      height: 1667,
      download_url: 'https://picsum.photos/id/10/2500/1667'
    },
    {
      id: '11',
      author: 'Paul Jarvis',
      width: 3000,
      height: 2000,
      download_url: 'https://picsum.photos/id/11/3000/2000'
    },
    {
      id: '12',
      author: 'Paul Jarvis',
      width: 4000,
      height: 2667,
      download_url: 'https://picsum.photos/id/12/4000/2667'
    },
    {
      id: '20',
      author: 'John Doe',
      width: 3670,
      height: 2462,
      download_url: 'https://picsum.photos/id/20/3670/2462'
    }
  ]
}

// TODO：
// 請使用 Array.filter()
// 從 response.data 中篩選符合條件的資料
// 並將結果指派給 result

const result =

// =======================================
// 以下程式碼不用修改
// =======================================

console.log(result)

/*
  預期結果（順序相同）：
  [
    {
      id: '11',
      author: 'Paul Jarvis',
      width: 3000,
      height: 2000,
      download_url: 'https://picsum.photos/id/11/3000/2000'
    },
    {
      id: '12',
      author: 'Paul Jarvis',
      width: 4000,
      height: 2667,
      download_url: 'https://picsum.photos/id/12/4000/2667'
    }
  ]
*/
