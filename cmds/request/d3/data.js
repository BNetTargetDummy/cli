#! /usr/bin/env node

const yargs = require('yargs');
const blizzard = require('blizzard.js').initialize({ apikey: process.env.BATTLENET_CLIENT_ID });

const request = yargs
  .command({
    command: 'data',
    describe: 'Fetch a Diablo 3 data resource',
    builder: yargs => {
      return yargs
        .options({
          key: {
            alias: 'k',
            describe: 'The data key to be requested',
            choices: ['artisan', 'follower', 'item'],
            type: 'string',
            demand: true,
          },
          id: {
            alias: 'i',
            describe: 'The [id] of the {key}',
            type: 'string',
            demand: true,
          },
        });
    },
    handler: argv => {
      const { origin, locale, key, id } = argv;

      return blizzard.d3.data(key, { origin, locale, id })
        .then(response => console.log(JSON.stringify(response.data)))
        .catch(err => console.log(JSON.stringify(err.response.data)));
    },
  }).argv;

module.exports = request;
