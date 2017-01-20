#! /usr/bin/env node

const yargs = require('yargs');
const blizzard = require('blizzard.js').initialize({ apikey: process.env.BATTLENET_CLIENT_ID });

const request = yargs
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
    handler: argv => {
      const { origin, locale, realm, name, fields } = argv;

      return blizzard.wow.character(fields, { origin, locale, realm, name })
        .then(response => console.log(JSON.stringify(response.data)))
        .catch(err => console.log(JSON.stringify(err.response.data)));
    },
  }).argv;

module.exports = request;
