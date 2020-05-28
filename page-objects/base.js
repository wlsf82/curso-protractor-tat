const HeaderComponent = require('./components/header')

class Base {
  constructor () {
    this.header = new HeaderComponent()
  }

  visit () {
    browser.get(this.relativeUrl)
  }
}

module.exports = Base
