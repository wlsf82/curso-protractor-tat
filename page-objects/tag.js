const BasePage = require('./base')

const DestinationsComponent = require('./components/destinations')

const randomNumberBewtweenOneAnd = require('../utils/randomNumberBewtweenOneAndN')

class Tag extends BasePage {
  constructor () {
    super()
    this.destinations = new DestinationsComponent()
    this.relativeUrl = `/tags/${randomNumberBewtweenOneAnd(5)}`
  }
}

module.exports = Tag
