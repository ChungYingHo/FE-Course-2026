const passengers = [
  { passengerNumber: 2569, name: 'Alice' },
  { passengerNumber: 1023, name: 'Bob' },
  { passengerNumber: 4785, name: 'Charlie' },
  { passengerNumber: 3890, name: 'David' },
  { passengerNumber: 1502, name: 'Eve' },
]

const passengerInfos = [
  { passengerNumber: 2569, seat: '12A', class: 'Economy' },
  { passengerNumber: 1023, seat: '1B', class: 'First' },
  { passengerNumber: 4785, seat: '23C', class: 'Economy' },
  { passengerNumber: 3890, seat: '14D', class: 'Business' },
  { passengerNumber: 1502, seat: '3E', class: 'First' },
]

// 請用 passengers 陣列中的 passengerNumber 去 passengerInfos 陣列中找對應的資訊，並將兩個陣列合併成一個新的陣列
// 預期輸出：
// [
//   { name: 'Alice', seat: '12A', class: 'Economy' },
//   { name: 'Bob', seat: '1B', class: 'First' },
//   { name: 'Charlie', seat: '23C', class: 'Economy' },
//   { name: 'David', seat: '14D', class: 'Business' },
//   { name: 'Eve', seat: '3E', class: 'First' },
// ]
