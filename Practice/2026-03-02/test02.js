const passengers = [
  { name: 'Alice', age: 30, destination: 'Paris' },
  { name: 'Bob', age: 25, destination: 'New York' },
  { name: 'Charlie', age: 35, destination: 'Tokyo' },
  { name: 'David', age: 28, destination: 'London' },
]

const locations = [
  {
    name: 'Paris',
    country: 'France',
    attractions: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame Cathedral'],
  },
  {
    name: 'New York',
    country: 'USA',
    attractions: ['Statue of Liberty', 'Central Park', 'Times Square'],
  },
  { name: 'Tokyo',
    country: 'Japan',
    attractions: ['Tokyo Tower', 'Shibuya Crossing', 'Senso-ji Temple'],
  },
  { name: 'London',
    country: 'UK',
    attractions: ['Big Ben', 'London Eye', 'Tower of London'],
  },
]

// 請寫一個程式，接受一參數 passengerName，並輸出該乘客的目的地以及該目的地的國家和著名景點。

function findPassengerWhereLocations(passengerName){
  const passenger = passengers.find((passenger) => {
    return passenger.name === passengerName
  })
  if(passenger === undefined){
    console.log('找不到乘客:' + passengerName)
    return
  }

  const location = locations.find((location) => {
    return location.name === passenger.destination
  })
  if(location === undefined){
    console.log('找不到目的地:' + passenger.destination)
    return
  }
  console.log('乘客：' + passenger.name)
  console.log('目的地：' + passenger.destination)
  console.log('國家：' + location.country)
  console.log('著名景點：' + location.attractions.join(', '))
}

findPassengerWhereLocations('Alice')
