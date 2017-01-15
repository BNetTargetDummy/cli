#! /usr/bin/env node

const yargs = require('yargs');

const request = yargs
  .command({
    command: 'data-achievements',
    describe: 'Fetch a Starcraft 2 Data Rewards',
    builder: (yargs) => {
      return yargs
        .options({
          origin: {
            alias: 'o',
            describe: 'The API endpoint to make the request to',
            choices: ['us', 'eu'],
            default: 'us',
          }
        });
    },
    handler: argv => {
      const {origin} = argv;

      return blizzard.d3.data(['reward'], {origin})
        .then(response => {
          console.log(JSON.stringify(response.data));
        });
    }
  }).argv;

module.exports = request;
