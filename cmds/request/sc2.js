#! /usr/bin/env node

const yargs = require('yargs');

const request = yargs
  .command({
    command: 'sc2 <resource>',
    describe: 'Perform a Starcraft 2 request to the Battle.net API',
    builder: (yargs) => yargs
      .options({
        origin: {
          alias: 'o',
          describe: 'The API endpoint to make the request to',
          choices: ['us', 'eu', 'kr', 'tw', 'sea', 'cn'],
          default: 'us',
        },
        locale: {
          alias: 'l',
          describe: 'A language locale code matching the origin endpoint',
        },
      })
      .global(['origin', 'locale'])
      .commandDir('sc2')
      .demandCommand(1),
    handler: (argv) => {
    },
  }).argv;

module.exports = request;
