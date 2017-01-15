#! /usr/bin/env node

const yargs = require('yargs');

const request = yargs
  .command({
    command: 'data-artisan',
    describe: 'Fetch a Diablo 3 Data Artisan',
    builder: (yargs) => {
      return yargs
        .options({
          origin: {
            alias: 'o',
            describe: 'The API endpoint to make the request to',
            choices: ['us', 'eu'],
            default: 'us',
          },
          artisan: {
            alias: 'a',
            describe: 'The [artisan] of the {data/artisan}',
            choices: ['blacksmith', 'jeweler', 'mystic'],
            default: 'blacksmith',
          }
        })
        .demandOption(['artisan'], 'Please provide at least the [artisan] of the {data/artisan}');
    },
    handler: argv => {
      const {origin, artisan} = argv;

      return blizzard.d3.data(['artisan'], {origin, artisan})
        .then(response => {
          console.log(JSON.stringify(response.data));
        });
    }
  }).argv;

module.exports = request;
