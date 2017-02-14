#! /usr/bin/env node

const yargs = require('yargs');
const logger = require('../../../lib/logger');

const request = yargs
  .command({
    command: 'data',
    describe: 'Fetch a World of Warcraft data resource',
    builder: yargs => {
      return yargs
        .options({
          key: {
            alias: 'k',
            describe: 'The data key to be requested',
            choices: ['battlegroups', 'character:achievements', 'character:classes', 'character:races', 'guild:achievements', 'guild:rewards', 'guild:perks', 'item:classes', 'talents', 'pet:types'],
            type: 'string',
            demand: true,
          },
        });
    },
    handler: argv => logger('wow', 'data', argv),
  }).argv;

module.exports = request;
