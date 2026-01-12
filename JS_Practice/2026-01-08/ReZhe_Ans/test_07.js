// Write a JavaScript program that:
// 1. Keeps track of a numeric counter.
// 2. Increases the counter by 1 each time a button is clicked.
// 3. Displays the updated count on the page.

let counter =0 //設定名為counter的變數為0
const button = document.getElementById('button')
//取得在html裡id=button的元素
const counterDisplay = document.getElementById('counter')
//取得在html裡id=counter

function readCounter(){ //設定一個函數,用來每次被呼叫時更新計數器的數值跟畫面
  counter = counter + 1 //把 counter 現在的數字，加 1，再存回 counter 自己
  counterDisplay.textContent = counter //把 counter 的數字，更新到網頁畫面上
}

button.addEventListener('click',readCounter)
//使用button.addEventListener('click',readCounter) 來監聽點擊事件
