#! /usr/bin/env node

const yargs = require('yargs');

const request = yargs
  .command({
    command: 'profile',
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
          battletag: {
            alias: 'b',
            describe: 'The [battletag] of the {profile}',
            type: 'string'
          }
        })
        .demandOption(['battletag'], 'Please provide at least the [battletag] of the {profile}');
    },
    handler: argv => {
      const {origin, battletag} = argv;

      return blizzard.d3.profile({origin, battletag})
        .then(response => {
          console.log(JSON.stringify(response.data));
        });
    }
  }).argv;

module.exports = request;
