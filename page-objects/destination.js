const HeaderComponent = require('./components/header')
const DestinationComponent = require('./components/destination')

const randomNumberBewtweenOneAnd = require('../utils/randomNumberBewtweenOneAndN')

class Destination {
  constructor () {
    this.header = new HeaderComponent()
    this.self = new DestinationComponent()
  }

  visit () {
    browser.get(`/destinations/${randomNumberBewtweenOneAnd(15)}`)
  }
}

module.exports = Destination
