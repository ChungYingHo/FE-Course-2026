// 題目：篩選圖片資料（filter vs for + if）
//
// 已知以下陣列是從 API 取得的資料：
//
// const images = [
//   { id: '10', author: 'Paul Jarvis', width: 2500 },
//   { id: '20', author: 'Alejandro Escamilla', width: 1800 },
//   { id: '30', author: 'John Doe', width: 1200 },
//   { id: '40', author: 'Jane Smith', width: 3000 }
// ]
//
// 請完成以下兩個小題：
//
// -----------------------------
// (A) 使用 Array.filter
// -----------------------------
//
// 請使用 Array.filter，
// 篩選出 width 大於 2000 的圖片資料，
// 並將結果存成一個新陣列 largeImages。
//
// -----------------------------
// (B) 不使用 filter
// -----------------------------
//
// 請不要使用 filter、map、reduce，
// 改用 for 迴圈搭配 if 條件，
// 完成與 (A) 相同的篩選結果，
// 並將結果存成一個新陣列 largeImages2。
//
// 注意：
// - 不可直接修改原本的 images 陣列

const images = [
  { id: '10', author: 'Paul Jarvis', width: 2500 },
  { id: '20', author: 'Alejandro Escamilla', width: 1800 },
  { id: '30', author: 'John Doe', width: 1200 },
  { id: '40', author: 'Jane Smith', width: 3000 }
]

//const photoArr = images.filter((image) => image.width > 2000)

//console.log(photoArr)


function pictureArr(){
  let newPicture = []

  for(let i = 0; i < images.length; i++){
    if(images[i].width >= 2500){
      newPicture.push(images[i])
    }
  }
  return newPicture
}

console.log(pictureArr())
