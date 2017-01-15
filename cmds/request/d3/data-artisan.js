#! /usr/bin/env node

const yargs = require('yargs');
const blizzard = require('blizzard.js').initialize({ apikey: process.env.BATTLENET_CLIENT_ID });

const request = yargs
  .command({
    command: 'data-artisan',
    describe: 'Fetch a Diablo 3 Artisan',
    builder: (yargs) => {
      return yargs
        .options({
          artisan: {
            alias: 'a',
            describe: 'The [id] of the {artisan}',
            choices: ['blacksmith', 'jeweler', 'mystic'],
            default: 'blacksmith',
          },
        })
        .demandOption(['artisan'], 'Please provide specify the [artisan]');
    },
    handler: argv => {
      const { origin, locale, artisan } = argv;

      return blizzard.d3.data(['artisan'], { origin, locale, artisan })
        .then(response => {
          console.log(JSON.stringify(response.data));
        });
    },
  }).argv;

module.exports = request;
