'use strict'

class ResourceManager {
  constructor (props) {
    this.count = props
    this.resource = 0
  }

  borrow (callback) {
    const waitForResource = () => {
      if (this.resource < this.count) {
        const resource = new Resource()
        this.resource += 1
        resource.releaseCallback = () => {
          this.resource -= 1
        }
        callback(resource)
      } else {
        setTimeout(waitForResource, 100)
      }
    }
    waitForResource()
  }
}

class Resource {
  constructor () {
    this.releaseCallback = null
  }

  release () {
    this.releaseCallback()
  }
}

module.exports = ResourceManager
