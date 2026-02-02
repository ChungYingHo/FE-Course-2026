/* eslint-disable no-undef */
// 以下是一個來自 Lorem Picsum (https://picsum.photos/) 的 API
//
// API：
// https://picsum.photos/v2/list
//
// 請使用「純 HTML + JavaScript」完成以下功能：
//
// 1. 頁面載入時，顯示五張圖片
// 2. 點擊按鈕後，重新隨機顯示五張圖片
// 3. 圖片請使用 API response 中「可直接作為 <img src> 的圖片檔 URL」顯示
// 4. 請使用 axios 並搭配 async/await
// 5. 請顯示圖片作者（author 欄位）
const buttonEl = document.getElementById('test_bun')
const imgEl = document.getElementById('test_img')
const imgListEl = document.getElementById('img_list')

const apiUrl = 'https://picsum.photos/v2/list'

async function testAPI() {
  try{
    const response = await axios.get(apiUrl)
    const user = response.data

    const fivePhoto = user.slice().sort(() => Math.random() -0.5).slice(0, 5)

    imgListEl.innerHTML = ''

    console.log('user:', user)

    fivePhoto.forEach((photograph) => {
      const img = document.createElement('img')
      img.src = photograph.download_url
      img.width = 300

      const author = document.createElement('photograph')
      author.textContent = `'Author': ${photograph.author}`

      imgListEl.appendChild(img)
      imgListEl.appendChild(author)
    })

    console.log('imgEl:', imgEl)
    console.log('response:',response)
  }catch(error){
    console.log(error)
  }
}

testAPI()
buttonEl.addEventListener('click', testAPI)
