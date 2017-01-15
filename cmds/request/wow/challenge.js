#! /usr/bin/env node

const yargs = require('yargs');
const blizzard = require('blizzard.js').initialize({apikey: process.env.BATTLENET_CLIENT_ID});

const request = yargs
  .command({
    command: 'challenge',
    describe: 'Fetch a World of Warcraft Challenge',
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
            describe: 'The [realm] of the {challenge}',
          }
        })
        .demandOption(['id'], 'Please provide at least the [id] of the {challenge}');
    },
    handler: argv => {
      const {origin, realm} = argv;

      return blizzard.wow.challenge({origin, realm})
        .then(response => {
          console.log(JSON.stringify(response.data));
        });
    }
  }).argv;

module.exports = request;
