const chalk = require('chalk')

function info(msg) {
  console.log(chalk.keyword('orange')(msg))
}

function success(msg) {
  console.log(chalk.green(msg))
}

function err(errMsg) {
  console.log(chalk.red(errMsg))
}

exports.success = success
exports.err = err
exports.info = info
