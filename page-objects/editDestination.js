const BasePage = require('./base')

const HeaderComponent = require('./components/header')
const DestinationComponent = require('./components/destination')
const FormComponent = require('./components/form')

const randomNumberBewtweenOneAnd = require('../utils/randomNumberBewtweenOneAndN')

class EditDestination extends BasePage {
  constructor () {
    super()
    this.header = new HeaderComponent()
    this.self = new DestinationComponent()
    this.form = new FormComponent()
    this.relativeUrl = `/destinations/${randomNumberBewtweenOneAnd(15)}/edit`
  }
}

module.exports = EditDestination
