/* eslint-disable no-undef */
// 第十三題 : API 題一：隨機使用者
// 頁面載入時，顯示 1 位使用者
// 顯示：
// 大頭貼、姓名、國家
// 點擊按鈕後，重新取得一位新使用者

const btnEl = document.getElementById('practice_bun')
const testImgEl = document.getElementById('practice_img')
const nameEl = document.getElementById('name')
const countryEl = document.getElementById('country')

const exerciseApi = 'https://randomuser.me/api/'

async function practiceApi(){
  try{
    const practiceResponse = await axios.get(exerciseApi)
    const userApi = practiceResponse.data.results[0]
    const photoPractice = userApi.picture.large

    console.log('practiceResponse:', practiceResponse)
    console.log(userApi)

    testImgEl.src = photoPractice

    const fullName = `${userApi.name.title} ${userApi.name.first} ${userApi.name.last}`
    nameEl.textContent = `name: ${fullName}`

    countryEl.textContent = `country: ${userApi.location.country}`

  }catch(error){
    console.log(error)
  }
}

practiceApi()
btnEl.addEventListener('click', practiceApi)
