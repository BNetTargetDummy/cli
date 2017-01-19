#! /usr/bin/env node

const yargs = require('yargs');

const sc2 = yargs
  .command({
    command: 'sc2 <resource>',
    describe: 'Perform a Starcraft 2 request to the Battle.net API',
    builder: yargs => yargs
      .commandDir('sc2')
      .demandCommand(1),
    handler: argv => {
    },
  }).argv;

module.exports = sc2;
