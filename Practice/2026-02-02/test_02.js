// =======================================
// 本週考題：Lorem Picsum（隨機作者相簿）
// =======================================
//
// API：
// https://picsum.photos/v2/list
//
// 請搭配 test_02.html 使用
// 請勿修改 HTML 結構
// 請勿使用任何前端框架
// 必須使用 axios + async / await
//

const apiUrl = 'https://picsum.photos/v2/list'

// TODO：請取得以下 DOM
// - 顯示圖片的容器
// - 「重新選擇作者」按鈕
// - 顯示作者名稱的區塊（如果有）
const galleryEl = document.querySelector('#gallery')
const authorEl = document.querySelector('#author')
const refreshBtn = document.querySelector('#refresh')

// =======================================
// 提示區（Hints）
// =======================================
//
// 提示 1：
// axios.get(apiUrl) 會回傳一個 response
// 圖片資料在 response.data 中，是一個陣列
//
// 提示 2：
// 每一筆資料至少包含：
// - author
// - download_url（可直接當 <img src>）
//
// 提示 3（隨機）：
// - Math.random() 會產生 0 ~ 1 的亂數
// - 搭配 Math.floor() 可以取得陣列中的隨機 index
//
// 提示 4（作者）：
// - API 回傳資料中，會有多筆相同 author
// - 可以先整理出「不重複的作者清單」
// - 再從作者清單中隨機選一位
//
// 提示 5（顯示）：
// - 每次更新畫面前，記得先清空容器內容
// - 可使用 innerHTML 或 appendChild
//
// =======================================


// TODO：
// 請完成此 function
// 功能：
// 1. 從 API 取得資料
// 2. 隨機選擇一位作者
// 3. 顯示該作者的所有圖片
async function loadImagesByRandomAuthor () {
  // 在這裡開始作答
}



// =======================================
// 事件處理
// =======================================

// TODO：
// 1. 頁面載入時，執行一次 loadImagesByRandomAuthor
// 2. 點擊按鈕後，重新執行 loadImagesByRandomAuthor

