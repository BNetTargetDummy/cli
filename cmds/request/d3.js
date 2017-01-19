#! /usr/bin/env node

const yargs = require('yargs');

const d3 = yargs
  .command({
    command: 'd3 <resource>',
    describe: 'Perform a Diablo 3 request to the Battle.net API',
    builder: yargs => yargs
      .commandDir('d3')
      .demandCommand(1),
    handler: argv => {
    },
  }).argv;

module.exports = d3;
