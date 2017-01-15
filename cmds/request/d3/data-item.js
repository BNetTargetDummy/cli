#! /usr/bin/env node

const yargs = require('yargs');
const blizzard = require('blizzard.js').initialize({ apikey: process.env.BATTLENET_CLIENT_ID });

const request = yargs
  .command({
    command: 'data-item',
    describe: 'Fetch a Diablo 3 Item',
    builder: (yargs) => {
      return yargs
        .options({
          item: {
            alias: 'i',
            describe: 'The [item] of the {data/item}',
            type: 'string',
          },
        })
        .demandOption(['data'], 'Please specify the [item]');
    },
    handler: argv => {
      const { origin, locale, item } = argv;

      return blizzard.d3.data(['item'], { origin, locale, item })
        .then(response => {
          console.log(JSON.stringify(response.data));
        });
    },
  }).argv;

module.exports = request;
