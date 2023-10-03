import fs from 'fs-extra';

import runTasks from './run.js';

const pkg = JSON.parse(
  fs.readFileSync(new URL('../package.json', import.meta.url), 'utf8')
);

const helpText = `open-npm-link-cli v${pkg.version}

  Usage: onpm [options]

  -h --help              Print this help
  -v --version           Print open-npm-link-cli version number
  -b --browser           Browser to open

For more details, please see https://github.com/yyz945947732/open-npm-link-cli`;

const version = () => console.log(`v${pkg.version}`);

const help = () => console.log(helpText);

async function cli(options) {
  if (options.version) {
    version();
  } else if (options.help) {
    help();
  } else {
    return runTasks(options);
  }
  return Promise.resolve();
}

export default cli;
