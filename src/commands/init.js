const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')
const { Command, flags } = require('@oclif/command')
const getGitBranchName = require('current-git-branch')

const generateConfiguration = require('../generateConfiguration')
const scenarioFileContent = require('../scenario')

class InitCommand extends Command {
  async run() {
    const { flags } = this.parse(InitCommand)
    const { entry, url } = flags
    const cwd = process.cwd()
    const configurationLocation = path.resolve(cwd, '.vidiffrc')
    const scenarioEntryLocation = path.resolve(cwd, entry)
    const scenarioEntryDirectory = path.dirname(scenarioEntryLocation)
    const branch = getGitBranchName()

    if (!branch) {
      this.error('CWD is not a git repository.', { exit: 2 })
    }

    this.log('Creating a .vidiffrc file')

    const configurationFileContent = generateConfiguration({ entry, branch, url })

    fs.writeFileSync(configurationLocation, configurationFileContent)

    this.log(`Creating scenario file at ${entry}`)

    if (!fs.existsSync(scenarioEntryDirectory)) {
      mkdirp.sync(scenarioEntryDirectory)
    }

    fs.writeFileSync(scenarioEntryLocation, scenarioFileContent)

    this.log('Done! You can commit and push your work then run your first build using:\nnpx vidiff create-build -p PROJECT_ID -t API_TOKEN')
  }
}

InitCommand.description = `Creates the files needed for Vidiff to work
...
Creates two files in your repository:
- A .vidiffrc configuration file, with default capabilities and branchToUrlMapping
- A scenario file
`

InitCommand.flags = {
  entry: flags.string({
    char: 'e',
    description: 'The location of the scenario file',
    default: 'test/scenario.js',
  }),
  url: flags.string({
    char: 'u',
    description: 'The URL to run the scenario on',
    default: 'https://google.com',
  }),
}

module.exports = InitCommand
