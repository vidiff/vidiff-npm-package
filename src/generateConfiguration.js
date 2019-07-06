function generateConfiguration({ entry, branch, url }) {
  return `
{
  "branchToUrlMapping": {
    "${branch}": "${url}"
  },
  scenarios: [
    {
      "name": "Scenario 1",
      "entry": "${entry}",
      "capabilities": [
        {
          "platform": "WIN10",
          "browserName": "chrome",
          "version": "75"
        },
        {
          "platform": "WIN10",
          "browserName": "firefox",
          "version": "67"
        },
        {
          "platform": "ANDROID",
          "platformName": "Android",
          "deviceName": "Pixel 2",
          "browserName": "Chrome",
          "version": "7.1"
        }
      ]
    }
  ]
}
  `.trim()
}

module.exports = generateConfiguration
