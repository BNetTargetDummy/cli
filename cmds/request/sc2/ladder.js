#! /usr/bin/env node

const yargs = require('yargs');

const request = yargs
  .command({
    command: 'ladder',
    describe: 'Fetch a Starcraft 2 Ladder',
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
            describe: 'The [id] of the {ladder}',
            type: 'number'
          }
        })
        .demandOption(['id'], 'Please provide at least the [id] of the {ladder}');
    },
    handler: argv => {
      const {origin, data} = argv;

      return blizzard.d3.data(['follower'], {origin, data})
        .then(response => {
          console.log(JSON.stringify(response.data));
        });
    }
  }).argv;

module.exports = request;
