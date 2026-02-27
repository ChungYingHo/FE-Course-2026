// Think of a realistic scenario where you would use the `filter` method to solve a problem.

// 答案:

const hotels = [
  {hotelName: 'fullon' , roomPrice: 4000},
  {hotelName: 'Caser' , roomPrice: 5000},
  {hotelName: 'Sun hotel' , roomPrice: 3000},
  {hotelName: 'HotelDua' , roomPrice: 4500}
]

const result = hotels.filter((hotel) => hotel.roomPrice >= 4000 )

console.log(result)


// 文字敘述:
// 這份模擬旅店的房價，如果今天這份房價表想要篩選出說房價的價格有 >= 4000的，使用filter的方式進行篩選把符合條件的將他篩選出來，並將結果丟出來。
