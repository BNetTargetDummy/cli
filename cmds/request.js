#! /usr/bin/env node

const yargs = require('yargs');

const request = yargs
  .command({
    command: 'request <game>',
    describe: 'Request to the Battle.net API',
    builder: (yargs) => yargs
      .commandDir('request')
      .demandCommand(1),
    handler: (argv) => {
    },
  }).argv;

module.exports = request;
