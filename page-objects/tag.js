const HeaderComponent = require('./components/header')
const DestinationsComponent = require('./components/destinations')

const randomNumberBewtweenOneAnd = require('../utils/randomNumberBewtweenOneAndN')

class Tag {
  constructor () {
    this.header = new HeaderComponent()
    this.destinations = new DestinationsComponent()
  }

  visit () {
    browser.get(`/tags/${randomNumberBewtweenOneAnd(5)}`)
  }
}

module.exports = Tag
