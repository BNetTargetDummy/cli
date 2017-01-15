#! /usr/bin/env node

const yargs = require('yargs');
const blizzard = require('blizzard.js').initialize({ apikey: process.env.BATTLENET_CLIENT_ID });

const request = yargs
  .command({
    command: 'data-achievements',
    describe: 'Fetch a Starcraft 2 Data Artisan',
    builder: (yargs) => {
      return yargs
        .options({
          origin: {
            alias: 'o',
            describe: 'The API endpoint to make the request to',
            choices: ['us', 'eu'],
            default: 'us',
          },
          follower: {
            alias: 'f',
            describe: 'The [realm] of the {character}',
            choices: ['blacksmith', 'jeweler', 'mystic'],
            default: 'blacksmith',
          },
        })
        .demandOption(['follower'], 'Please provide at least the realm and name of the character');
    },
    handler: argv => {
      const { origin, data } = argv;

      return blizzard.d3.data(['data', 'item'], { origin, data })
        .then(response => {
          console.log(JSON.stringify(response.data));
        });
    },
  }).argv;

module.exports = request;
