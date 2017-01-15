#! /usr/bin/env node

const yargs = require('yargs');
const blizzard = require('blizzard.js').initialize({apikey: process.env.BATTLENET_CLIENT_ID});

const request = yargs
  .command({
    command: 'boss',
    describe: 'Fetch a World of Warcraft Boss',
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
            describe: 'The [id] of the {boss}',
          }
        })
        .demandOption(['id'], 'Please provide at least the [id] of the {boss}');
    },
    handler: argv => {
      const {origin, id} = argv;

      return blizzard.wow.aunction({origin, id})
        .then(response => {
          console.log(JSON.stringify(response.data));
        });
    }
  }).argv;

module.exports = request;
