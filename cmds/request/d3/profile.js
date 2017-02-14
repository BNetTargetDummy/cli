#! /usr/bin/env node

const yargs = require('yargs');
const logger = require('../../../lib/logger');

const request = yargs
  .command({
    command: 'profile',
    describe: 'Fetch a Diablo 3 profile',
    builder: yargs => {
      return yargs
        .options({
          battletag: {
            alias: 'b',
            describe: 'The [battletag] of the {profile}',
            type: 'string',
            demand: true,
          },
          hero: {
            alias: 'i',
            describe: 'The [id] of the {hero}',
            type: 'number',
          },
        });
    },
    handler: argv => logger('d3', 'profile', argv),
  }).argv;

module.exports = request;
