#! /usr/bin/env node

const yargs = require('yargs');

const request = yargs
  .command({
    command: 'wow <endpoint>',
    describe: 'World of Warcraft game API request to the Battle.net API',
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
      .commandDir('wow')
      .demandCommand(1),
    handler: (argv) => {
    },
  }).argv;

module.exports = request;
