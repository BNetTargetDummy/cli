#! /usr/bin/env node

const yargs = require('yargs');

const request = yargs
  .command({
    command: 'd3 <endpoint>',
    describe: 'Perform a Diablo 3 request to the Battle.net API',
    builder: (yargs) => yargs
      .options({
        origin: {
          alias: 'o',
          describe: 'The API endpoint to make the request to',
          choices: ['us', 'eu', 'kr', 'tw', 'cn'],
          default: 'us',
        },
        locale: {
          alias: 'l',
          describe: 'A language locale code matching the origin endpoint',
        },
      })
      .global(['origin', 'locale'])
      .commandDir('d3')
      .demandCommand(1),
    handler: (argv) => {
    },
  }).argv;

module.exports = request;
