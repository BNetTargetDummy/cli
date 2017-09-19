#! /usr/bin/env node

const yargs = require('yargs');
const logger = require('../../../lib/logger');

const guild = yargs
  .command({
    command: 'guild <origin> <realm> <name>',
    describe: 'Fetch a World of Warcraft guild',
    builder: yargs => {
      return yargs
        .options({
          fields: {
            alias: 'f',
            describe: 'A list of one or more [fields] belonging to the {guild}',
            choices: ['profile', 'achievements', 'members', 'news', 'challenge'],
            default: 'profile',
            array: true,
          },
        });
    },
    handler: argv => logger('wow', 'guild', argv),
  }).argv;

module.exports = guild;
