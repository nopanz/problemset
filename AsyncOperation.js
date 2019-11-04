'use strict'
const { asyncOp } = require('./lib/lib')
class AsyncOperation {
  constructor (props) {
    this.arr = props.arr
  }

  * doAsync () {
    for (const element of this.arr) {
      if (Array.isArray(element)) {
        const promiseArr = element.map(data => asyncOp(data))
        yield Promise.all(promiseArr)
      } else if (typeof element === 'string') {
        yield asyncOp(element)
      } else {
        throw new Error('Invalid data type')
      }
    }
  }
}

module.exports = AsyncOperation
