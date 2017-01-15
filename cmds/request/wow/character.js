#! /usr/bin/env node

const yargs = require('yargs');
const blizzard = require('blizzard.js').initialize({ apikey: process.env.BATTLENET_CLIENT_ID });

const request = yargs
  .command({
    command: 'character',
    describe: 'Fetch a World of Warcraft Character',
    builder: (yargs) => {
      return yargs
        .options({
          realm: {
            alias: 'r',
            describe: 'The [realm] of the {character}',
            type: 'string',
          },
          name: {
            alias: 'n',
            describe: 'The [name] of the {character}',
            type: 'string',
          },
        })
        .demandOption(['realm', 'name'], 'Please provide at least the [realm] and [name] of the {character}');
    },
    handler: (argv) => {
      const { origin, locale, realm, name } = argv;

      return blizzard.wow.character(['profile'], { origin, locale, realm, name })
        .then(response => {
          console.log(JSON.stringify(response.data));
        });
    },
  }).argv;

module.exports = request;
