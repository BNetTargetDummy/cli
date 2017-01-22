#! /usr/bin/env node

global.rootRequire = function(name) {
  return require(__dirname + '/' + name);
}

const yargs = require('yargs');
const pkg = require('./package.json');
const models = require("./models");

const targetdummy = yargs
  .version(pkg.version)
  .help('help')
  .alias('help', 'h')
  .alias('version', 'v')
  .commandDir('cmds')
  .demandCommand(1)
  .argv;

// sync() will create all table if they doesn't exist in database
models.sequelize.sync();

module.exports.targetdummy = console;
