/* eslint-disable no-undef */
// 第十四題 : Random User 性別篩選
// 需求：
// 三顆按鈕：隨機 / 男 / 女
// 點不同按鈕 → API 加上 ?gender=male 或 ?gender=female
// 顯示「載入中...」
// 抓完更新卡片

const galleryEl = document.getElementById('gallery')
const authorEl = document.getElementById('author')
const btnRandom = document.getElementById('refresh')
const maleBtn = document.getElementById('maleBtn')
const femaleBtn = document.getElementById('femaleBtn')

function setActive(btn){
  btnRandom.classList.remove('active')
  maleBtn.classList.remove('active')
  femaleBtn.classList.remove('active')

  btn.classList.add('active')
}

async function apiPractice(gender) {
  try{

    authorEl.textContent = '載入中...'

    let url = 'https://randomuser.me/api/'
    if(gender === 'male') url = 'https://randomuser.me/api/?gender=male'
    if(gender === 'female') url = 'https://randomuser.me/api/?gender=female'

    const response = await axios.get(url)
    const user = response.data.results[0]

    galleryEl.src = user.picture.large
    galleryEl.alt = `${user.name.first} ${user.name.last}`

    const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`
    authorEl.textContent = `Name: ${fullName} | Email: ${user.email} | Country: ${user.location.country}`

    console.log('user:', user)
  }catch(error){
    console.log(error)
  }
}

apiPractice()
setActive(btnRandom)

btnRandom.addEventListener('click', () => {
  setActive(btnRandom)
  apiPractice()
})

maleBtn.addEventListener('click', () => {
  setActive(maleBtn)
  apiPractice('male')
})

femaleBtn.addEventListener('click', () => {
  setActive(femaleBtn)
  apiPractice('female')
})
