/* eslint-disable no-undef */
// 第十四題 : API 題二：圖片清單
// 頁面載入時，顯示 5 張圖片
// 顯示圖片作者（author）
// 點擊按鈕後，重新隨機顯示 5 張圖片
// 圖片使用 download_url

const btnElPractice = document.getElementById('practice_bun02')
const imgList = document.getElementById('imgList')

const drillApi = 'https://picsum.photos/v2/list'

async function practiceFivePhoto() {
  try{
    const apiResponse = await axios.get(drillApi)
    const user = apiResponse.data
    const fivePicture = user.slice().sort(() => Math.random() -0.5).slice(0, 5)

    imgList.innerHTML = ''

    console.log('apiResponse:', apiResponse)


    fivePicture.forEach((picture) =>{
      const wrapper = document.createElement('div')

      const photo = document.createElement('img')
      photo.src = picture.download_url
      photo.width = 300
      photo.alt = picture.author

      const practiceAuthor = document.createElement('p')
      practiceAuthor.textContent = `'Author': ${picture.author}`

      wrapper.appendChild(photo)
      wrapper.appendChild(practiceAuthor)

      imgList.appendChild(wrapper)
    })
  }catch(error){
    console.log(error)
  }
}


practiceFivePhoto()
btnElPractice.addEventListener('click', practiceFivePhoto)
