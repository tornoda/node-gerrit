const { program } = require('commander')
const meta = require('../package.json')

program
  .description(`One key command for pushing Git commit to Gerrit \n
  Just run:
      gerrit
  to push current HEAD to Gerrit
    `)
  .version(meta.version)
  .option('-c, --commitId', 'Push a specified commit id to Gerrit')
  .parse(process.argv)
