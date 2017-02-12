#! /usr/bin/env node

const yargs = require('yargs');
const logger = require('../../../lib/logger');

const request = yargs
  .command({
    command: 'profile',
    describe: 'Fetch a Starcraft 2 profile',
    builder: yargs => {
      return yargs
        .options({
          key: {
            alias: 'k',
            describe: 'The {profile} resource to be requested',
            choices: ['profile', 'ladders', 'matches'],
            default: 'profile',
            type: 'string',
          },
          id: {
            alias: 'i',
            describe: 'The [id] of the {profile}',
            type: 'number',
            demand: true,
          },
          name: {
            alias: 'n',
            describe: 'The [name] of the {profile}',
            type: 'string',
            demand: true,
          },
          region: {
            alias: 'r',
            describe: 'The [region] of the {profile}',
            default: 1,
            type: 'number',
          },
        });
    },
    handler: argv => logger('sc2', 'profile', argv),
  }).argv;

module.exports = request;
