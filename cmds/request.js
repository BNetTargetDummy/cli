#! /usr/bin/env node

const yargs = require('yargs');

const request = yargs.command(
  'request <command>',
  'Perform a request to the Battle.net API',
  yargs => yargs
    .commandDir('request')
    .demandCommand(1),
  argv => {}
).argv;

module.exports = request;
