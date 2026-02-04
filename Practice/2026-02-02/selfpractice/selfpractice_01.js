/* eslint-disable no-undef */
// 第十四題 : 顯示使用者卡片 + 重新抽一位
// 需求：
// 頁面載入顯示 1 位使用者
// 顯示：大頭貼、全名、email、國家
// 按按鈕「重新抽」再換一位

const galleryEl = document.getElementById('gallery')
const authorEl = document.getElementById('author')
const refreshBtn = document.getElementById('refresh')

const urlApi = 'https://randomuser.me/api/'


async function userCard() {
  try{

    const response = await axios.get(urlApi)
    const user = response.data.results[0]

    galleryEl.src = user.picture.large
    galleryEl.alt =  `${user.name.first} ${user.name.last}`

    const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`
    authorEl.textContent = `Name: ${fullName} | Email: ${user.email} | Country: ${user.location.country}`

    console.log('user:', user)
  }catch(error){
    console.log(error)
  }
}


userCard()
refreshBtn.addEventListener('click', userCard)
