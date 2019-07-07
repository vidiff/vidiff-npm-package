const axios = require('axios')
const { Command, flags } = require('@oclif/command')
const getGitBranchName = require('current-git-branch')

class CreateBuild extends Command {
  async run() {
    const { flags } = this.parse(CreateBuild)
    const { apiToken, projectId, baselineBranch, comparisonBranch } = flags

    const response = await axios.post('https://api.vidiff.com/rest/build', {
      accountToken: apiToken,
      projectId,
      baselineBranch,
      comparisonBranch,
    })

    if (response.status !== 202) {
      this.error(response.data, { exit: 2 })
    }

    this.log(`Done! To view your build go to ${response.data.buildUrl}`)
  }
}

CreateBuild.description = 'Launches a new build'

CreateBuild.flags = {
  apiToken: flags.string({
    char: 't',
    description: 'Your API token. Availlable in the account page.',
    required: true,
  }),
  projectId: flags.string({
    char: 'p',
    description: 'The id of the project. Availlable in the project page.',
    required: true,
  }),
  baselineBranch: flags.string({
    char: 'b',
    description: 'The baseline branch.',
    default: getGitBranchName,
  }),
  comparisonBranch: flags.string({
    char: 'c',
    description: 'The comparison branch.',
    default: getGitBranchName,
  }),
}

module.exports = CreateBuild
