#! /usr/bin/env node

const yargs = require('yargs');
const logger = require('../../../lib/logger');

const request = yargs
  .command({
    command: 'data',
    describe: 'Fetch a Starcraft 2 data resource',
    builder: yargs => {
      return yargs
        .options({
          key: {
            alias: 'k',
            describe: 'The {data} key to be requested',
            choices: ['achievements', 'rewards'],
            type: 'string',
            demand: true,
          },
        });
    },
    handler: argv => logger('sc2', 'data', argv),
  }).argv;

module.exports = request;
