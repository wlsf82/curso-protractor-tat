const BasePage = require('./base')

const DestinationComponent = require('./components/destination')

const randomNumberBewtweenOneAnd = require('../utils/randomNumberBewtweenOneAndN')

class Destination extends BasePage {
  constructor () {
    super()
    this.self = new DestinationComponent()
    this.relativeUrl = `/destinations/${randomNumberBewtweenOneAnd(15)}`
  }
}

module.exports = Destination
