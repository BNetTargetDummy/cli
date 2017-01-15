#! /usr/bin/env node

const yargs = require('yargs');
const blizzard = require('blizzard.js').initialize({ apikey: process.env.BATTLENET_CLIENT_ID });

const request = yargs
  .command({
    command: 'data-item',
    describe: 'Fetch a Diablo 3 Data Item',
    builder: (yargs) => {
      return yargs
        .options({
          origin: {
            alias: 'o',
            describe: 'The API endpoint to make the request to',
            choices: ['us', 'eu'],
            default: 'us',
          },
          item: {
            alias: 'i',
            describe: 'The [item] of the {data/item}',
            type: 'string',
          },
        })
        .demandOption(['data'], 'Please provide at least the [item] of the {data/item}');
    },
    handler: argv => {
      const { origin, item } = argv;

      return blizzard.d3.data(['item'], { origin, item })
        .then(response => {
          console.log(JSON.stringify(response.data));
        });
    },
  }).argv;

module.exports = request;
