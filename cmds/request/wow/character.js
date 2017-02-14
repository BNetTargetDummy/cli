#! /usr/bin/env node

const yargs = require('yargs');
const logger = require('../../../lib/logger');

const character = yargs
  .command({
    command: 'character',
    describe: 'Fetch a World of Warcraft character',
    builder: yargs => {
      return yargs
        .options({
          realm: {
            alias: 'r',
            describe: 'The [realm] of the {character}',
            type: 'string',
            demand: true,
          },
          name: {
            alias: 'n',
            describe: 'The [name] of the {character}',
            type: 'string',
            demand: true,
          },
          fields: {
            alias: 'f',
            describe: 'A list of one or more [fields] belonging to the {character}',
            choices: ['profile', 'achievements', 'appearance', 'audit', 'feed', 'guild', 'hunterPets', 'items', 'mounts', 'pets', 'petSlots', 'professions', 'progression', 'pvp', 'quests', 'reputation', 'statistics', 'stats', 'talents', 'titles'],
            default: 'profile',
            array: true,
          },
        });
    },
    handler: argv => logger('wow', 'character', argv),
  }).argv;

module.exports = character;
