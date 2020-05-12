const configCreator = require('../utils/configCreator')

module.exports.config = configCreator({
  capabilities: {
    browserName: 'firefox',
    'moz:firefoxOptions': {
      args: ['--headless']
    }
  }
})
