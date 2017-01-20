#! /usr/bin/env node

const yargs = require('yargs');
const blizzard = require('blizzard.js').initialize({ apikey: process.env.BATTLENET_CLIENT_ID });

const guild = yargs
  .command({
    command: 'guild',
    describe: 'Fetch a World of Warcraft guild',
    builder: yargs => {
      return yargs
        .options({
          realm: {
            alias: 'r',
            describe: 'The [realm] of the {guild}',
            type: 'string',
            demand: true,
          },
          name: {
            alias: 'n',
            describe: 'The name of the guild',
            type: 'string',
            demand: true,
          },
          fields: {
            alias: 'f',
            describe: 'A list of one or more [fields] belonging to the {guild}',
            choices: ['profile', 'achievements', 'members', 'news', 'challenge'],
            default: 'profile',
            array: true,
          },
        });
    },
    handler: argv => {
      const { origin, locale, realm, name, fields } = argv;

      return blizzard.wow.guild(fields, { origin, locale, realm, name })
        .then(response => console.log(JSON.stringify(response.data)))
        .catch(err => console.log(JSON.stringify(err.response.data)));
    },
  }).argv;

module.exports = guild;
