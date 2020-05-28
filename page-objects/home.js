const BasePage = require('./base')

const TagsComponent = require('./components/tags')

class Home extends BasePage {
  constructor () {
    super()
    this.tags = new TagsComponent()
    this.relativeUrl = '/'
  }
}

module.exports = Home
