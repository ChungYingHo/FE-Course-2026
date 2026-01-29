function mockFetchApi() {
  // 30% chance of success
  const isSuccess = Math.random() < 0.3
  return isSuccess
}

// Please finish the following function:
function fetchDataWithRetry(retryTimes) {


  for(let i = 0; i < retryTimes; i++){
    if(mockFetchApi()){
      return 200
    }
  }
  return 500
}

// Expected output:
const result = fetchDataWithRetry(3)
console.log(result)
// If successful fetch the api, it should log: 200
// If all retries fail, it should log: 500
// During retries, it may not log anything
