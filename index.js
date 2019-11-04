// solutions here
const AsyncOperation = require('./AsyncOperation')
const RandStringSource = require('./RandStringSource')
const { RandStream } = require('./lib/lib')
var co = require('co')

co(function * () {
  // Test 1  Asynchronous Operations
  const input = ['', ['B', 'C'], 'D']
  const op = new AsyncOperation({ arr: input })
  yield op.doAsync()

  // Test 2 Streams
  const source = new RandStringSource(new RandStream())
  source.on('data', (data) => console.log(data))
}).catch((err) => console.log(err))
