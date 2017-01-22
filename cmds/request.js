#! /usr/bin/env node

const yargs = require('yargs');

const request = yargs
  .command({
    command: 'request <game>',
    describe: 'Perform a request to the Battle.net API',
    builder: yargs => yargs
      .options({
        origin: {
          alias: 'o',
          describe: 'The API endpoint to make the request to',
          choices: ['us', 'eu', 'kr', 'tw', 'cn'],
          default: 'us',
          global: true,
        },
        locale: {
          alias: 'l',
          describe: 'A language locale code matching the origin endpoint',
          global: true,
        },
        target: {
          type: 'string',
          choices: ['console', 'file'],
          default: 'console',
          global: true,
        },
        filename: {
          type: 'string',
          default: 'targetdummy.log',
          global: true,
        },
      })
      .commandDir('request')
      .demandCommand(1),
    handler: argv => {
    },
  }).argv;

module.exports = request;
