#! /usr/bin/env node

const yargs = require('yargs');
const blizzard = require('blizzard.js').initialize({ apikey: process.env.BATTLENET_CLIENT_ID });

const request = yargs
  .command({
    command: 'data',
    describe: 'Fetch a Diablo 3 Data resource',
    builder: (yargs) => {
      return yargs
        .options({
          key: {
            alias: 'k',
            describe: 'The data to be requested',
            choices: ['artisan', 'follower', 'item'],
            type: 'string',
          },
          id: {
            alias: 'i',
            describe: 'The [id] of the {key}',
            type: 'string',
          },
        })
        .demandOption(['key', 'id'], 'Please specify the [key] and [id] of the resource');
    },
    handler: argv => {
      const { origin, locale, key, id } = argv;

      return blizzard.d3.data(key, { origin, locale, id })
        .then(response => {
          console.log(JSON.stringify(response.data));
        });
    },
  }).argv;

module.exports = request;
