# Vidiff CLI

[![Version](https://img.shields.io/npm/v/vidiff.svg)](https://npmjs.org/package/vidiff)
[![License](https://img.shields.io/npm/l/vidiff.svg)](https://github.com/vidiff/vidiff-npm-package/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
## Usage
<!-- usage -->
```
npx vidiff init --url https://example.com
```

<!-- usagestop -->
## Commands
<!-- commands -->
* [`vidiff init`](#vidiff-init)
* [`vidiff create-build`](#vidiff-create-build)
* [`vidiff help [COMMAND]`](#vidiff-help-command)

### `vidiff init`

Creates the files needed for Vidiff to work

```
USAGE
  $ vidiff init

OPTIONS
  -e, --entry=entry  [default: test/scenario.js] The location of the scenario file
  -u, --url=url      [default: https://google.com] The URL to run the scenario on

DESCRIPTION
  ...
  Creates two files in your repository:
  - A .vidiffrc configuration file, with default capabilities and branchToUrlMapping
  - A scenario file
```

_See code: [src/commands/init.js](https://github.com/vidiff/vidiff-npm-package/blob/v0.0.0/src/commands/init.js)_

### `vidiff create-build`

Launches a new build

```
USAGE
  $ vidiff create-build

OPTIONS
  -t, --apiToken=apiToken                  (required) Your API token. Availlable in the account page.
  -p, --projectId=projectId                (required) The id of the project. Availlable in the project page.
  -b, --baselineBranch=baselineBranch      [default: the current branch] The baseline branch.
  -c, --comparisonBranch=comparisonBranch  [default: the current branch] The comparison branch.
```

_See code: [src/commands/create-build.js](https://github.com/vidiff/vidiff-npm-package/blob/v0.0.0/src/commands/create-build.js)_

### `vidiff help [COMMAND]`

display help for vidiff

```
USAGE
  $ vidiff help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.0/src/commands/help.ts)_

<!-- commandsstop -->
