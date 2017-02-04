#! /usr/bin/env node

const yargs = require('yargs');
const pkg = require('./package.json');

const targetdummy = yargs
  .version(pkg.version)
  .help('help')
  .alias('help', 'h')
  .alias('version', 'v')
  .commandDir('cmds')
  .demandCommand(1)
  .argv;

module.exports = targetdummy;
