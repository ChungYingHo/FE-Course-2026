const users = [
  { id: 1, firstName: 'Jeremy', lastName: 'Lin', role: 'admin' },
  { id: 2, firstName: 'May', lastName: 'Chen', role: 'editor' },
  { id: 3, firstName: 'Tom', lastName: 'Wang', role: 'viewer' }
]

// 請使用 map 方法，將 users 陣列轉換成一個新的陣列
// 預期結果如下：
// [
//   { id: 1, name: 'Jeremy Lin', isAdmin: true },
//   { id: 2, name: 'May Chen', isAdmin: false },
//   { id: 3, name: 'Tom Wang', isAdmin: false }
// ]
