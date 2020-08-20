const child = require('child_process')
const log = require('./util/log')

const { promisify } = require('util')
const exec = promisify(child.exec)

module.exports = function(commitId) {
  log.info('Pushing gerrit')
  return getCurrentBranch()
    .then(name => {
      return pushGerrit(commitId, name)
    })
    .then(() => {
      log.success('Push gerrit succeed')
    })
    .catch(err => {
      log.err('Push gerrit error')
      throw err
    })
}

function getCurrentBranch() {
  return exec('git symbolic-ref --short -q HEAD').then(res => {
    const { stdout, stderr } = res
    if (stderr) throw new Error(stderr)
    return stdout
  })
}

function pushGerrit(commitId, branchName) {
  if (!commitId) commitId = 'HEAD'
  const cmd = `git push origin ${commitId}:refs/for/${branchName}`
  log.info(`Runing: ${cmd}`)
  return exec(cmd)
}
