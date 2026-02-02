/* eslint-disable no-undef */
// 第十五題 : API 題三：錯誤處理練習
// 最多嘗試 3 次
// 每次失敗要顯示「第 X 次失敗」
// 成功就停止並顯示成功訊息
// 全部失敗才顯示失敗訊息

const retryBtn = document.getElementById('retryBtn')
const msgEl = document.getElementById('msg')
const logEl = document.getElementById('log')

const apiUrl = 'https://randomuser.me/api/'

function shouldFail() {
  return Math.random() < 0.7
}

async function callApiWithRetry() {
  const maxRetry = 3
  logEl.innerHTML = ''
  msgEl.textContent = '開始呼叫...'

  for (let i = 1; i <= maxRetry; i++) {
    try {
      if (shouldFail()) {
        throw new Error('mock fail')
      }

      const res = await axios.get(apiUrl)

      msgEl.textContent = ` 成功！第 ${i} 次就成功了`
      const li = document.createElement('li')
      li.textContent = `成功：第 ${i} 次`
      logEl.appendChild(li)

      return res.data
    } catch (err) {

      const li = document.createElement('li')
      li.textContent = ` 第 ${i} 次失敗`
      logEl.appendChild(li)

      if (i === maxRetry) {
        msgEl.textContent = ' 全部失敗（已嘗試 3 次）'
        return null
      }
    }
  }
}

retryBtn.addEventListener('click', callApiWithRetry)
