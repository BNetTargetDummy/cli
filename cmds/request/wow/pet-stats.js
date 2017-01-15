#! /usr/bin/env node

const yargs = require('yargs');
const blizzard = require('blizzard.js').initialize({apikey: process.env.BATTLENET_CLIENT_ID});

const request = yargs
  .command({
    command: 'pet-stats',
    describe: 'Fetch a World of Warcraft Achievement',
    builder: (yargs) => {
      return yargs
        .options({
          origin: {
            alias: 'o',
            describe: 'The API endpoint to make the request to',
            choices: ['us', 'eu'],
            default: 'us',
          },
          id: {
            alias: 'i',
            describe: 'The [speciesId] of the {pet/stats}',
            type: 'number'
          },
          level: {
            alias: 'l',
            describe: 'The [level] of the {pet/stats}',
            type: 'number'
          },
          breed: {
            alias: 'b',
            describe: 'The [breedId] of the {pet/stats}',
            type: 'number'
          },
          quality: {
            alias: 'b',
            describe: 'The [qualityId] of the {pet/stats',
            type: 'number'
          }
        })
        .demandOption(['id'], 'Please provide at least the [id] of the {pet/stats}');
    },
    handler: argv => {
      const {origin, id, level, breed, quality} = argv;

      return blizzard.wow.item(['stat'], {origin, id, level, breed, quality})
        .then(response => {
          console.log(JSON.stringify(response.data));
        });
    }
  }).argv;

module.exports = request;
