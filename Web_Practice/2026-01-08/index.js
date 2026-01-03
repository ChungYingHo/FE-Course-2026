const input = document.getElementById('test-input')
const button = document.getElementById('test-btn')

button.addEventListener('click', () => {
  const value = input.value
  alert(`你輸入的內容是：${value}`)
})

