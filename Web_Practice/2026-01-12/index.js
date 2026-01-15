const button = document.getElementById('test-btn')
const image = document.getElementById('result-img')

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

async function fetchAndSetImage() {
  try {
    // eslint-disable-next-line no-undef
    const response = await axios.get(
      'https://dog.ceo/api/breeds/image/random'
    )
    image.src = response.data.message
  } catch (error) {
    console.error(error)
  } finally {
    console.log('Fetch attempt finished')
  }
}

fetchAndSetImage()
button.addEventListener('click', fetchAndSetImage)

