#! /usr/bin/env node

const yargs = require('yargs');

const wow = yargs
  .command({
    command: 'wow <resource>',
    describe: 'Perform a World of Warcraft request to the Battle.net API',
    builder: yargs => yargs
      .commandDir('wow')
      .demandCommand(1),
    handler: argv => {
    },
  }).argv;

module.exports = wow;
