// solutions here
const AsyncOperation = require('./AsyncOperation')
const RandStringSource = require('./RandStringSource')
const ResourceManager = require('./ResourceManager')
const { RandStream } = require('./lib/lib')
var co = require('co')

co(function * () {
  // Test 1  Asynchronous Operations
  const input = ['A', ['B', 'C'], 'D']
  const op = new AsyncOperation({ arr: input })
  yield op.doAsync()

  // Test 2 Streams
  const source = new RandStringSource(new RandStream())
  source.on('data', (data) => console.log(data))

  // Test 3 Resource Pooling
  const pool = new ResourceManager(2)
  console.log('START')
  const timestamp = Date.now()
  pool.borrow((res) => {
    console.log('RES: 1')
    setTimeout(() => {
      res.release()
    }, 500)
  })

  pool.borrow((res) => {
    console.log('RES: 2')
  })

  pool.borrow((res) => {
    console.log('RES: 3')
    console.log('DURATION: ' + (Date.now() - timestamp))
  })
}).catch((err) => console.log(err))
