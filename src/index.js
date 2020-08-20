const push = require('./pushGerrit')
const argv = require('minimist')(process.argv.slice(2))

const { c } = argv

if (!c || !commitId) {
  push()
} else {
  push(c)
}
