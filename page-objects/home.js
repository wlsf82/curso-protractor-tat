const HeaderComponent = require('./components/header')
const TagsComponent = require('./components/tags')

class Home {
  constructor () {
    this.header = new HeaderComponent()
    this.tags = new TagsComponent()
  }

  visit () {
    browser.get('/')
  }
}

module.exports = Home
