const { EventEmitter } = require('events')

class RandStringSource extends EventEmitter {
  constructor (props) {
    super(props)
    this.randStream = props
    this.strStream = ''
    this.init()
  }

  init () {
    this.randStream.on('data', (data) => {
      this.strStream += data
      this.findPattern(this.strStream)
    })
  }

  findPattern (rawStr) {
    const patterns = rawStr.match(/(?<=\.)[^.]+(?=\.)/g)
    if (patterns) {
      const latestPatternFound = patterns[patterns.length - 1]
      const toSliceIndex = rawStr.indexOf(latestPatternFound)
      this.strStream = rawStr.slice(toSliceIndex + (latestPatternFound.length))

      while (patterns.length > 0) {
        this.emit('data', patterns.pop())
      }
    }
  }
}

module.exports = RandStringSource
