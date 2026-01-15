/* eslint-disable no-undef */
// Problem Description
// You are going to create a simple timer that counts seconds.

// Objective
// Practice using setInterval() and clearInterval().

// Task
// 1. Create a variable called secs and set its initial value to 0.
// 2. Use setInterval() to run a function every 1000 milliseconds (1 second).
// 3. Inside the function, print the current value of secs to the console,
//    then increase secs by 1.
// 4. When secs becomes greater than 10, stop the timer using clearInterval().

let secs = 0

function timer(){  //設定函數timer
  console.log('目前秒數:', secs)  //先印出目前的秒數

  secs = secs + 1  //secs+1

  if(secs > 10){  //設定如果secs大於10秒
    clearInterval(timerId) //clearInterval會將計數器停掉
    console.log('計時結束')  //印出計時結束
  }
}

const timerId = setInterval(timer, 1000)  //使用setInterval讓函數的timer的每1000毫秒(1秒)跑一次
