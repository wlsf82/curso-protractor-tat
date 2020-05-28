const BasePage = require('./base')

const HeaderComponent = require('./components/header')
const TagsComponent = require('./components/tags')

class Home extends BasePage {
  constructor () {
    super()
    this.header = new HeaderComponent()
    this.tags = new TagsComponent()
    this.relativeUrl = '/'
  }
}

module.exports = Home
