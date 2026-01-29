/* eslint-disable no-undef */
const button = document.getElementById('test-btn')
const image = document.getElementById('result-img')
const nationalEl = document.getElementById('national')
const emailEl = document.getElementById('email')
const genderEl = document.getElementById('gender')

// function fetchAndSetImage() {
//   // eslint-disable-next-line no-undef
//   axios
//     .get('https://dog.ceo/api/breeds/image/random') // https://dog.ceo/dog-api/
//     .then(response => {
//       console.log(response)
//       image.src = response.data.message
//     })
//     .catch(error => {
//       console.error(error)
//     })
// }

async function seriesConnectionAPI() {
  try{
    const response = await axios.get('https://randomuser.me/api/')
    const user = response.data.results[0]
    const photo = user.picture.large

    console.log(user)
    image.src = photo
    nationalEl.textContent = `${user.location.country} 、 ${user.location.city}`
    emailEl.textContent = `Email: ${user.email}`
    genderEl.textContent = `Gender: ${user.gender}`
  } catch(error){
    console.error(error)
  }
}

seriesConnectionAPI()
button.addEventListener('click' , seriesConnectionAPI)
