#! /usr/bin/env node

const yargs = require('yargs');
const blizzard = require('blizzard.js').initialize({ apikey: process.env.BATTLENET_CLIENT_ID });

const request = yargs
  .command({
    command: 'ladder',
    describe: 'Fetch a Starcraft 2 ladder',
    builder: yargs => {
      return yargs
        .options({
          id: {
            alias: 'i',
            describe: 'The [id] of the {ladder}',
            type: 'number',
            demand: true,
          },
        });
    },
    handler: argv => {
      const { origin, locale, id } = argv;

      return blizzard.sc2.ladder({ origin, locale, id })
        .then(response => console.log(JSON.stringify(response.data)))
        .catch(err => console.log(JSON.stringify(err.response.data)));
    },
  }).argv;

module.exports = request;
