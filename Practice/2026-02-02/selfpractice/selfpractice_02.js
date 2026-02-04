/* eslint-disable no-undef */
// 第十五題:隨機 6 張圖片牆
// 需求：
// 取得資料後，隨機挑 6 張
// 每張顯示圖片 + 作者

const galleryEl = document.getElementById('gallery')
const authorEl = document.getElementById('author')
const refreshBtn = document.getElementById('refresh')
const imgListEl = document.getElementById('img_list')

const urlApi = 'https://picsum.photos/v2/list'

async function practiceApi() {
  try{
    const response = await axios.get(urlApi)
    const user = response.data

    const sixPhoto = user.slice().sort(() => Math.random() -0.5).slice(0, 6)

    imgListEl.innerHTML = ''

    sixPhoto.forEach((picture) => {
      const wrapper = document.createElement('div')

      const img = document.createElement('img')
      img.src = picture.download_url
      img.width = 300

      const authorApi = document.createElement('p')
      authorApi.textContent = `Author: ${picture.author}`

      wrapper.appendChild(img)
      wrapper.appendChild(authorApi)

      imgListEl.appendChild(wrapper)
    })

    console.log('user:', user)
  }catch(error) {
    console.log(error)
  }
}

practiceApi()
refreshBtn.addEventListener('click', practiceApi)
