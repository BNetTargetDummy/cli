#! /usr/bin/env node

const yargs = require('yargs');
const blizzard = require('blizzard.js').initialize({apikey: process.env.BATTLENET_CLIENT_ID});

const request = yargs
  .command({
    command: 'auction-data',
    describe: 'Fetch a World of Warcraft Auction Data',
    builder: (yargs) => {
      return yargs
        .options({
          origin: {
            alias: 'o',
            describe: 'The API endpoint to make the request to',
            choices: ['us', 'eu'],
            default: 'us',
          },
          realm: {
            alias: 'r',
            describe: 'The [realm] of the {auction/data}',
          }
        })
        .demandOption(['realm'], 'Please provide at least the [realm] of the {auction/data}');
    },
    handler: argv => {
      const {origin, realm} = argv;

      return blizzard.wow.aunction({origin, realm})
        .then(response => {
          console.log(JSON.stringify(response.data));
        });
    }
  }).argv;

module.exports = request;