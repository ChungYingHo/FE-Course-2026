/* eslint-disable no-undef */
// 第十五題 : Picsum 圖片牆
// 需求：
// 抓資料後隨機選 6 張
// 每張顯示：圖片 + 作者
// 按按鈕重新隨機 6 張

const galleryEl = document.getElementById('gallery')
const authorEl = document.getElementById('author')
const imgListEl = document.getElementById('img_list')
const refreshBtn = document.getElementById('refresh')

const urlApi = 'https://picsum.photos/v2/list'


async function renderPicsumWall() {
  try {
    imgListEl.textContent = '載入中...'

    const response = await axios.get(urlApi)
    const photos = response.data

    const sixPhotos = photos.slice().sort(() => Math.random() - 0.5).slice(0, 6)

    imgListEl.innerHTML = ''

    sixPhotos.forEach((p) => {
      const wrapper = document.createElement('div')
      wrapper.style.marginBottom = '12px'

      const img = document.createElement('img')
      img.src = p.download_url
      img.alt = `Photo by ${p.author}`
      const author = document.createElement('p')
      author.textContent = `Author: ${p.author}`

      wrapper.appendChild(img)
      wrapper.appendChild(author)
      imgListEl.appendChild(wrapper)
    })
  } catch (error) {
    console.log(error)
    imgListEl.textContent = '載入失敗'
  }
}

renderPicsumWall()
refreshBtn.addEventListener('click', renderPicsumWall)
