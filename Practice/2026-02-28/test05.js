const passengers = [
  {
    name: 'Alice',
    age: 30,
    ticketType: 'economy',
    isBlacklisted: false
  },
  {
    name: 'Bob',
    age: 45,
    ticketType: 'business',
    isBlacklisted: true
  },
  {
    name: 'Charlie',
    age: 28,
    ticketType: 'economy',
    isBlacklisted: false
  }
]

// passengers 是一個訂位紀錄，今天航空公司規定，若同一個訂位紀錄中有任一乘客是黑名單，則整個訂位紀錄都不能登機，請寫一個程式判斷 passengers 是否能登機
