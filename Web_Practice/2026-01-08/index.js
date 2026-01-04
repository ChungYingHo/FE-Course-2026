const button = document.getElementById('test-btn')
const image = document.getElementById('result-img')

function fetchAndSetImage() {
  axios
    .get('https://dog.ceo/api/breeds/image/random')
    .then(response => {
      image.src = response.data.message
    })
    .catch(error => {
      console.error(error)
    })
}

// async function fetchAndSetImage() {
//   try {
//     const response = await axios.get(
//       'https://dog.ceo/api/breeds/image/random'
//     )
//     image.src = response.data.message
//   } catch (error) {
//     console.error(error)
//   }
// }

fetchAndSetImage()
button.addEventListener('click', fetchAndSetImage)

