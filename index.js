// solutions here
const AsyncOperation = require('./AsyncOperation')
var co = require('co')

co(function * () {
  // Test 1  Asynchronous Operations
  const input = ['', ['B', 'C'], 'D']
  const op = new AsyncOperation({ arr: input })
  yield op.doAsync()
}).catch((err) => console.log(err))
