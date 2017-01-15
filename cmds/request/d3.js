#! /usr/bin/env node

const yargs = require('yargs');

const request = yargs
  .command({
    command: 'd3 <endpoint>',
    describe: 'Perform a Diablo 3 request to the Battle.net API',
    builder: (yargs) => yargs
      .commandDir('d3')
      .demandCommand(1),
    handler: (argv) => {
    },
  }).argv;

module.exports = request;
