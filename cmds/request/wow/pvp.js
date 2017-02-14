#! /usr/bin/env node

const yargs = require('yargs');
const logger = require('../../../lib/logger');

const request = yargs
  .command({
    command: 'pvp',
    describe: 'Fetch a World of Warcraft PvP bracket',
    builder: yargs => {
      return yargs
        .options({
          bracket: {
            alias: 'b',
            describe: 'The [bracket] of the PvP leaderboard',
            choices: ['2v2', '3v3', '5v5', 'rgb'],
            type: 'string',
            demand: true,
          },
        });
    },
    handler: argv => logger('wow', 'pvp', argv),
  }).argv;

module.exports = request;
